# -*- coding: utf-8 -*-
import os
import json
import sys

if len(sys.argv) == 1:
    HTML_NAME = "index.html"
else:
    HTML_NAME = sys.argv[1]

EMOJI_CONTAINER_MAP = {
    "smileys.html": "Smileys & Emotion",
    "people.html": "People & Body",
    "component.html": "Component",
    "animals.html": "Animals & Nature",
    "food.html": "Food & Drink",
    "travel.html": "Travel & Places",
    "activities.html": "Activities",
    "objects.html": "Objects",
    "symbols.html": "Symbols",
    "flags.html": "Flags",
}

BASE_DIR_PATH = os.path.dirname(__file__)
RESOURCES_DIR_PATH = os.path.join(BASE_DIR_PATH, "resources")
RESULT_DIR_PATH = os.path.join(BASE_DIR_PATH, "../")


def get_file(layout_name, json_value=False):
    with open(os.path.join(RESOURCES_DIR_PATH, layout_name), "r", encoding="utf-8") as f:
        if(json_value):
            return json.loads(f.read())
        return f.read()


def gen_nav():
    nav = get_file("nav.json", json_value=True)
    if nav["use"]:
        html = ''
        for item in nav["items"]:
            html += '<li><a href="{url}">{text}</a></li>\n'.format(**item)
        return html


def gen_breadcrumb():
    breadcrumb = get_file("breadcrumb.json", json_value=True)
    if breadcrumb["use"]:
        html = ''
        for item in breadcrumb["items"]:
            html += '<li><a href="{url}">{text}</a></li>\n'.format(**item)
        return html

def gen_emoji_container(html_name=None):
    emoji_container = get_file("emoji_container.json", json_value=True)
    if not emoji_container["use"]:
        return

    if html_name is None or html_name == "index.html":
        html = ''
        for k, v in emoji_container["items"].items():
            html += '<div class="emoji-container">\n'
            html += '<h3 class="emoji-container-tit">{}</h3>\n'.format(k)
            html += '<ul class="emoji-items">\n'
            for k2, v2 in v.items():
                for emoji in v2:
                    html += '<li class="emoji-item" id="emoji-item-{id}" name="{name}" data-unicode="{unicode}" onclick="{onclick}">{emoji}</li>\n'.format(**{
                        "id": emoji["id"],
                        "name": emoji["name"],
                        "emoji": emoji["emoji"],
                        "unicode": emoji["unicode"] if type(emoji["unicode"]) == "<class 'str'>" else emoji["unicode"][0],
                        "onclick": 'navigator.clipboard.writeText(document.querySelector(\'#emoji-item-{}\').innerText);'.format(emoji["id"])
                    })
            html += '</ul>\n'
            html += '</div>\n'
    else:
        title = EMOJI_CONTAINER_MAP[html_name]

        html = ''
        html += '<div class="emoji-container">\n'
        html += '<h3 class="emoji-container-tit">{}</h3>\n'.format(title)
        html += '<ul class="emoji-items">\n'
        for k2, v2 in emoji_container["items"][title].items():
            for emoji in v2:
                html += '<li class="emoji-item" id="emoji-item-{id}" name="{name}" data-unicode="{unicode}" onclick="{onclick}">{emoji}</li>\n'.format(**{
                    "id": emoji["id"],
                    "name": emoji["name"],
                    "emoji": emoji["emoji"],
                    "unicode": emoji["unicode"] if type(emoji["unicode"]) == "<class 'str'>" else emoji["unicode"][0],
                    "onclick": 'navigator.clipboard.writeText(document.querySelector(\'#emoji-item-{}\').innerText);'.format(emoji["id"])
                })
        html += '</ul>\n'
        html += '</div>\n'

    return html

if __name__ == "__main__":
    print("check variable")
    assert os.path.exists(BASE_DIR_PATH), "Unexpected error. {}".format(BASE_DIR_PATH)
    assert os.path.exists(RESOURCES_DIR_PATH), "Resource is required. {}".format(RESOURCES_DIR_PATH)

    print(RESULT_DIR_PATH)

    value = get_file("values.json", json_value=True)
    html = get_file("index.html")
    
    if HTML_NAME == "index.html":
        css = get_file("index.css")
        sitemap = get_file("sitemap.xml")
        robots = get_file("robots.txt")

    html = html.replace("[##_nav_##]", gen_nav())
    html = html.replace("[##_breadcrumb_##]", gen_breadcrumb())
    html = html.replace("[##_emoji_container_list_##]", gen_emoji_container(HTML_NAME))

    for k, v in value.items():
        print("replace '{}'".format(k))
        html = html.replace(v["html"], v["python"])
        if HTML_NAME == "index.html":
            css = css.replace(v["html"], v["python"])
            sitemap = sitemap.replace(v["html"], v["python"])
            robots = robots.replace(v["html"], v["python"])

    with open(os.path.join(RESULT_DIR_PATH, HTML_NAME), "w", encoding="utf-8") as f:
        f.write(html)

    if HTML_NAME == "index.html":
        with open(os.path.join(RESULT_DIR_PATH, "index.css"), "w", encoding="utf-8") as f:
            f.write(css)

        with open(os.path.join(RESULT_DIR_PATH, "sitemap.xml"), "w", encoding="utf-8") as f:
            f.write(sitemap)

        with open(os.path.join(RESULT_DIR_PATH, "robots.txt"), "w", encoding="utf-8") as f:
            f.write(robots)