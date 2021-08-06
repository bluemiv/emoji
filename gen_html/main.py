# -*- coding: utf-8 -*-
import os
import json


BASE_DIR_PATH = os.path.dirname(__file__)
RESOURCES_DIR_PATH = os.path.join(BASE_DIR_PATH, "resources")
RESULT_DIR_PATH = os.path.join(BASE_DIR_PATH, "../")


def get_file(layout_name, json_value=False):
    with open(os.path.join(RESOURCES_DIR_PATH, layout_name), "r", encoding="utf-8") as f:
        if(json_value):
            return json.loads(f.read())
        return f.read()


def gen_breadcrumb():
    breadcrumb = get_file("breadcrumb.json", json_value=True)
    if breadcrumb["use"]:
        html = ''
        for item in breadcrumb["items"]:
            html += '<li><a href="{url}">{text}</a></li>\n'.format(**item)
        return html

def gen_emoji_container():
    emoji_container = get_file("emoji_container.json", json_value=True)
    if not emoji_container["use"]:
        return

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

    return html

if __name__ == "__main__":
    print("check variable")
    assert os.path.exists(BASE_DIR_PATH), "Unexpected error. {}".format(BASE_DIR_PATH)
    assert os.path.exists(RESOURCES_DIR_PATH), "Resource is required. {}".format(RESOURCES_DIR_PATH)

    print(RESULT_DIR_PATH)

    value = get_file("values.json", json_value=True)
    html = get_file("index.html")
    css = get_file("index.css")
    sitemap = get_file("sitemap.xml")

    html = html.replace("[##_breadcrumb_##]", gen_breadcrumb())
    html = html.replace("[##_emoji_container_list_##]", gen_emoji_container())

    for k, v in value.items():
        print("replace '{}'".format(k))
        html = html.replace(v["html"], v["python"])
        css = css.replace(v["html"], v["python"])
        sitemap = sitemap.replace(v["html"], v["python"])

    with open(os.path.join(RESULT_DIR_PATH, "index.html"), "w", encoding="utf-8") as f:
        f.write(html)

    with open(os.path.join(RESULT_DIR_PATH, "index.css"), "w", encoding="utf-8") as f:
        f.write(css)

    with open(os.path.join(RESULT_DIR_PATH, "sitemap.xml"), "w", encoding="utf-8") as f:
        f.write(sitemap)