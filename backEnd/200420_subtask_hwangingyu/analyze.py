from parse import load_dataframes
import time
import pandas as pd
import shutil


def sort_stores_by_score(dataframes):
    stores_reviews = pd.merge(
        dataframes["stores"], dataframes["reviews"], left_on="id", right_on="store"
    )
    scores_group = stores_reviews.groupby(["store_name", "store"])
    scores = scores_group.mean()
    scores = scores.sort_values("score", ascending=False)

    return scores.reset_index()

def stores_by_menus(dataframes):
    stores_menus = pd.merge(
        dataframes["stores"], dataframes["menus"], left_on="id", right_on="store"
    )
    return stores_menus.reset_index()

def menus_by_reviews(dataframes):
    menus_reviews = pd.merge(
        dataframes["menus"], dataframes["reviews"], left_on="id", right_on="store"
    )
    print(menus_reviews)



def main():
    data = load_dataframes()
    start = time.time()
    preference_recommendation = {}
    # 생맥주 -> 음식점 메뉴 생맥주 음식점 가져왔어 -> 음식점 평점 -> Top5
    # 음식점 - 리뷰, 음식점 - 메뉴

    for i in data["menus"]["menu_name"] :
        if '초밥' in i :
             if i in preference_recommendation :
                 preference_recommendation[i] += 1
             else :
                 preference_recommendation[i] = 1
    sorted_preference_recommendation = sorted(preference_recommendation.items(), key=lambda preference_recommendation : preference_recommendation[1], reverse=True)[:3]
    # 선호가 가장 많이 포함된 메뉴를 선정

    print("** 추천 레시피 **")
    print(sorted_preference_recommendation)

    restaurant = []
    stores_menus = stores_by_menus(data)

    # 메뉴별 가게를 선정
    for i, val in enumerate(stores_menus["menu_name"]):
        if sorted_preference_recommendation[0][0] in val :
            if stores_menus["store_name"][i] not in restaurant and "서울특별시 용산구" in stores_menus["address"][i]:
                restaurant.append(stores_menus["store_name"][i])

    # 가게 별 평점
    stores_score = sort_stores_by_score(data)
    top_restaurant = {}
    for j, val_j in enumerate(stores_score["store_name"]):
        for k, val_k in enumerate(restaurant):
            if val_k == val_j:
                top_restaurant[val_k] = stores_score["score"][j]


    sorted_top_restaurant = sorted(top_restaurant.items(), key=lambda top_restaurant : top_restaurant[1], reverse=True)[:3]

    print("** 추천 음식점 **")
    print(sorted_top_restaurant)
    # print("time :", time.time() - start)  # 현재시각 - 시작시간 = 실행 시간

    print("-----------------------")
    loc_dict = {} # 전체
    store_dict ={}
    for i, store in enumerate(sorted_top_restaurant):
        # print(store[0])
        lat = {}
        lon = {}
        for j, target in enumerate(stores_menus["store_name"]):
            if store[0]==target:
                # print(stores_menus['latitude'][j])
                store_dict[stores_menus['store_name'][j]] = {}
                lat['latitude'] = stores_menus['latitude'][j]
                lon['longitude'] = stores_menus['longitude'][j]
                store_dict[stores_menus['store_name'][j]].update(lat)
                store_dict[stores_menus['store_name'][j]].update(lon)
                loc_dict.update(store_dict)
                break
        
        # loc_dict = { store_name = { latidue = {}, logitude = {}}}

    print(loc_dict['엔스시'])

if __name__ == "__main__":
    main()
