# -*- coding: utf-8 -*-

import os
import json

import requests
from bs4 import BeautifulSoup


BASE_URL = "https://www.unicode.org/emoji/charts/full-emoji-list.html"
DATA_DIR_NAME = os.path.join(os.path.dirname(os.path.abspath(__file__)), "result")

# 파일 이름 정의
SMILES_EMOTION_FILE_NAME = "smileys-emotion"
PEOPLE_BODY_FILE_NAME = "people-body"
COMPONENT_FILE_NAME = "component"
ANIMALS_NATURE_FILE_NAME = "animals-nature"
FOOD_DRINK_FILE_NAME = "food-drink"

# 파일 경로 정의
SMILES_EMOTION_FULL_PATH = os.path.join(DATA_DIR_NAME, SMILES_EMOTION_FILE_NAME)
PEOPLE_BODY_FULL_PATH = os.path.join(DATA_DIR_NAME, PEOPLE_BODY_FILE_NAME)
COMPONENT_FULL_PATH = os.path.join(DATA_DIR_NAME, COMPONENT_FILE_NAME)
ANIMALS_NATURE_FULL_PATH = os.path.join(DATA_DIR_NAME, ANIMALS_NATURE_FILE_NAME)
FOOD_DRINK_FULL_PATH = os.path.join(DATA_DIR_NAME, FOOD_DRINK_FILE_NAME)


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
                    item[keymap[className]] = td.text.replace("⊛ ", "") if not (len(td.text.split(" ")) >= 2 and className == "code") else td.text.split(" ")
            data[current_bighead][current_mediumhead].append(item)

    # 폴더 생성
    if not os.path.exists(DATA_DIR_NAME):
        os.makedirs(DATA_DIR_NAME)

    # 파일 저장
    # - 스마일 & 표정
    with open(SMILES_EMOTION_FULL_PATH, "w", encoding="utf-8") as f:
        temp_bighead = "Smileys & Emotion"
        temp_dict = {
            "title": temp_bighead,
            "data": data[temp_bighead]
        }
        f.write(json.dumps(temp_dict, indent=2, ensure_ascii=False))

    # - 사람
    with open(PEOPLE_BODY_FULL_PATH, "w", encoding="utf-8") as f:
        temp_bighead = "People & Body"
        temp_dict = {
            "title": temp_bighead,
            "data": data[temp_bighead]
        }
        f.write(json.dumps(temp_dict, indent=2, ensure_ascii=False))

    # - 구성요소
    with open(COMPONENT_FULL_PATH, "w", encoding="utf-8") as f:
        temp_bighead = "Component"
        temp_dict = {
            "title": temp_bighead,
            "data": data[temp_bighead]
        }
        f.write(json.dumps(temp_dict, indent=2, ensure_ascii=False))

    # - 동물 & 자연
    with open(ANIMALS_NATURE_FULL_PATH, "w", encoding="utf-8") as f:
        temp_bighead = "Animals & Nature"
        temp_dict = {
            "title": temp_bighead,
            "data": data[temp_bighead]
        }
        f.write(json.dumps(temp_dict, indent=2, ensure_ascii=False))
    
    # - 음식 & 음료
    with open(FOOD_DRINK_FULL_PATH, "w", encoding="utf-8") as f:
        temp_bighead = "Food & Drink"
        temp_dict = {
            "title": temp_bighead,
            "data": data[temp_bighead]
        }
        f.write(json.dumps(temp_dict, indent=2, ensure_ascii=False))
    