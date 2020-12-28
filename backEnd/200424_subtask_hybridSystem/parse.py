import json
import pandas as pd
import os
import shutil
import datetime
import pymysql

DATA_DIR = "./data"
DATA_FILE = os.path.join(DATA_DIR, "recipes_original.json")
DUMP_FILE = os.path.join(DATA_DIR, "dump.pkl")
db = pymysql.connect(host='52.79.57.86', port=3306, user='user1',
                     passwd='user1', db='bigdageeta', charset='utf8')
#mysql 접근
recipe_columns = {
   "id"
    "name"
    "ingredients"
    "time_req"
    "cook_method"
    "img"
    "tags"
    "category"
} # 레시피

def dump_dataframes(dataframes):
    pd.to_pickle(dataframes, DUMP_FILE)


def load_dataframes():
    return pd.read_pickle(DUMP_FILE)

def insert_data():
    cur = db.cursor()

    # user row exmaple
    # "id", "password", "last_login", "is_superuser", "username", "first_name", "last_name", "email", "is_staff", "is_active", "date_joined"
    #( 1,
    # 'pbkdf2_sha256$180000$Zo82FBEt1LwV$6F6l1MkfJYTxeQhp6qk3Lh+yUBMzyTnC9eM2keg5Lhw=',
    # datetime.datetime(2020, 4, 22, 3, 28, 32, 252627),
    # 0,
    # 'test',
    # '',
    # '',
    # 'test@test.com',
    # 0,
    # 1,
    # datetime.datetime(2020, 4, 21, 7, 54, 27, 221809))
    # sql = """insert into auth_user(password, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) values (
    #   %s, %s, %s, %s, %s, %s, %s, %s, %s
    # )"""

    # 천수지 id = 8

    # cur.execute(sql, ('123', '0','천수지', '천', '수지', 'abc@gmail.com','0','1','2020-04-23')) 8
    # cur.execute(sql, ('123', '0', '유관미', '유', '관미', 'abc2@gmail.com', '0', '1', '2020-04-23')) 9
    # cur.execute(sql, ('123', '0', '강하늘', '강', '하늘', 'abc3@gmail.com', '0', '1', '2020-04-23')) 10
    # cur.execute(sql, ('123', '0', '황민지', '황', '민지', 'abc4@gmail.com', '0', '1', '2020-04-23')) 11
    # cur.execute(sql, ('123', '0', '김민수', '김', '민수', 'abc5@gmail.com', '0', '1', '2020-04-23')) 12
    # db.commit()

    # score row example
    # 'id', 'user_id', 'recipe_id', 'score'

    # sql = """insert into scores(user_id, recipe_id, score) values ( %s, %s, %s)"""
    # 천수지
    # cur.execute(sql, ('8','1','4.0'))
    # cur.execute(sql, ('8','2','4.5'))
    # cur.execute(sql, ('8','7','5.0'))

    # 유관미
    # cur.execute(sql, ('9','2','5.0'))
    # cur.execute(sql, ('9','3','5.0'))
    # cur.execute(sql, ('9','4','5.0'))

    # 강하늘
    # cur.execute(sql, ('10','6','2.5'))
    # cur.execute(sql, ('10','7', '4.0'))
    # cur.execute(sql, ('10','8', '5.0'))

    # 황민지
    # cur.execute(sql, ('11', '1', '4.5'))
    # cur.execute(sql, ('11', '2', '5.0'))
    # cur.execute(sql, ('11', '3', '4.5'))

    # 김민수
    # cur.execute(sql, ('12', '1', '4.5'))
    # cur.execute(sql, ('12', '2', '4.5'))
    # cur.execute(sql, ('12', '3', '4.5'))

    db.commit()


def fetch_data(data_path=DATA_FILE) :
    cur = db.cursor()
    sql = """select * from auth_user"""

    cur.execute(sql)
    users_rows = cur.fetchall()

    sql = """select * from scores"""
    cur.execute(sql)
    score_rows = cur.fetchall()

    recipe = []

    try:
        with open(data_path, encoding="utf-8") as f:
            data = json.loads(f.read(), strict=False)
    except FileNotFoundError as e:
        print(f"`{data_path}` 가 존재하지 않습니다.")
        exit(1)

    pd.options.display.max_columns = None
    pd.options.display.max_rows = None

    for d in data:
        recipe.append(
            [
                d["id"],
                d["name"],
                d["ingredients"],
                d["time_req"],
                d["cook_method"],
                d["img"],
                d["tags"],
                d["category"],
            ]
        )

    user_frame = pd.DataFrame(users_rows,
                        columns=["id", "password", "last_login", "is_superuser", "username", "first_name", "last_name", "email", "is_staff", "is_active", "date_joined"])
    recipe_frame = pd.DataFrame(recipe, columns=['id', 'name', 'ingredients', 'time-req', 'cook_method', 'img', 'tags', 'category'])
    score_frame = pd.DataFrame(score_rows, columns=['id', 'score', 'recipe_id', 'user_id'])
    return {"recipe": recipe_frame, "user" : user_frame, 'score' : score_frame}

def main():
        data = fetch_data()
        dump_dataframes(data)
        data = load_dataframes()

        # 데이터 insert
        # insert_data()

if __name__ == "__main__":
    main()