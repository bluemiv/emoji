# -*- coding: utf-8 -*-

import os
import json

import requests
from bs4 import BeautifulSoup


BASE_URL = "https://www.unicode.org/emoji/charts/full-emoji-list.html"
DATA_DIR_NAME = os.path.join(os.path.dirname(os.path.abspath(__file__)), "result")
DATA_FILE_NAME = "emoji.js"
FULL_PATH = os.path.join(DATA_DIR_NAME, DATA_FILE_NAME)


if __name__ == "__main__":
    res = requests.get(BASE_URL, verify=False)
    assert res.status_code == 200, "Fail to crawling. status code: {}".format(res.status_code)
    
    html = res.text
    soup = BeautifulSoup(html, 'html.parser')

    data = dict()

    current_bighead = ""
    current_mediumhead = ""
    for tr in soup.select("table > tr"):
        th = tr.select("th")
        if th:
            head = th[0].get("class")[0]
            text = th[0].select("a")[0].text
            if head == "bighead":
                current_bighead = text
                data[current_bighead] = dict()
            elif head == "mediumhead":
                current_mediumhead = text
                data[current_bighead][current_mediumhead] = list()
        else:
            item = dict()
            for td in tr.select("td"):
                className = td.get("class")[0]
                keymap = {
                    "rchars": "id",
                    "code": "unicode",  # 여러개일 수 있음
                    "chars": "emoji",
                    "name": "name"
                }
                if className in keymap.keys():
                    item[keymap[className]] = td.text if not (len(td.text.split(" ")) >= 2 and className == "code") else td.text.split(" ")
            data[current_bighead][current_mediumhead].append(item)

    # 폴더 생성
    if not os.path.exists(DATA_DIR_NAME):
        os.makedirs(DATA_DIR_NAME)

    # 파일 저장
    with open(FULL_PATH, "w", encoding="utf-8") as f:
        f.write("export const emoji = {}".format(json.dumps(data, indent=2, ensure_ascii=False)))
