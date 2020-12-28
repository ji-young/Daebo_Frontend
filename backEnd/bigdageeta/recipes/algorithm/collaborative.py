import pandas as pd
from math import sqrt
from matplotlib import font_manager, rc #한글이 나오게
import matplotlib.pyplot as plt
import requests
import json
import shutil
import decimal
import random

pd.options.display.max_columns = None
pd.options.display.max_rows = None


def sim(i, j):
    return sqrt(pow(i,2)+pow(j,2))


def recipe_score(dataframes, n=20, min_reviews=30):

    recipe_score = pd.merge(
        dataframes["recipe"], dataframes["score"], left_on="id", right_on="recipe_id"
    )

    recipe_score_user = pd.merge(
        recipe_score, dataframes["user"], left_on="user_id", right_on="id"
    )


    recipe_score_user_group = recipe_score_user.groupby(['username'])['name', 'score'].apply(lambda g : g.values.tolist()).to_dict()

    user_recipe_score_dict = {}
    for idx, value in enumerate(recipe_score_user['username']):
        user_recipe_score_dict_sample = {}
        if value not in user_recipe_score_dict:
            user_recipe_score_dict[value] = {}
            for jdx, jvalue in enumerate(recipe_score_user_group[value]):
                user_recipe_score_dict_sample[jvalue[0]]=jvalue[1]
            user_recipe_score_dict[value].update(user_recipe_score_dict_sample)

    return user_recipe_score_dict

def sim_pearson(data, name1, name2):


    sumX = 0  # X의 합
    sumY = 0  # Y의 합
    sumPowX = 0  # X 제곱의 합
    sumPowY = 0  # Y 제곱의 합
    sumXY = 0  # X*Y의 합
    count = 0  # 레시피 개수

    for i in data[name1]:  # i = key
        if i in data[name2]:  # 같은 레시피를 평가했을때만
            sumX += data[name1][i]
            sumY += data[name2][i]
            sumPowX += pow(data[name1][i], 2)
            sumPowY += pow(data[name2][i], 2)
            sumXY += data[name1][i] * data[name2][i]
            count += 1

    sumX = float(sumX)
    sumY = float(sumY)
    sumPowX = float(sumPowX)
    sumPowY = float(sumPowY)
    sumXY = float(sumXY)
    count = int(count)
    # print(sqrt(
    #         (sumPowX - (pow(sumX, 2) / count)) * (sumPowY - (pow(sumY, 2) / count))))
    # print(sumPowX - (pow(sumX, 2) / count))
    # print(sumPowY - (pow(sumY, 2) / count))
    # print(sumPowY)
    # print(pow(sumY,2))
    # print(pow(sumY,2)/count)
    # print(count)
    # '천수지': [['담백한 새우연두부달걀탕', Decimal('4.00')], ['새우살로 만드는 얼큰한 새우탕 만들기', Decimal('4.50')], ['오늘뭐먹지? 닭장국 레시피 닭백숙보다 맛있네', Decimal('5.00')]],
    # '김민수': [['담백한 새우연두부달걀탕', Decimal('4.50')], ['새우살로 만드는 얼큰한 새우탕 만들기', Decimal('4.50')], ['간단하게 속편한 국 끓이기! 새우젓 연두부달걀국', Decimal('4.50')]]

    if count ==0 or sqrt((sumPowX - (pow(sumX, 2) / count)) * (sumPowY - (pow(sumY, 2) / count))) == 0:
        return 0
    else :
        return (sumXY - ((sumX * sumY) / count)) / sqrt(
            (sumPowX - (pow(sumX, 2) / count)) * (sumPowY - (pow(sumY, 2) / count)))

def top_match(data, name, index=3, sim_function=sim_pearson):
    li=[]
    index = 0
    for i in data: #딕셔너리를 돌고
        if name!=i: #자기 자신이 아닐때만
            index+=1
            li.append((sim_function(data,name,i),i)) #sim_function()을 통해 상관계수를 구하고 li[]에 추가
    li.sort() #오름차순
    li.reverse() #내림차순
    return li[:index]

def getRecommendation(data, person, sim_function=sim_pearson):
    result = top_match(data, person, len(data))
    simSum = 0  # 유사도 합을 위한 변수
    score = 0  # 평점 합을 위한 변수
    li = []  # 리턴을 위한 리스트
    score_dic = {}  # 유사도 총합을 위한 dic
    sim_dic = {}  # 평점 총합을 위한 dic

    for sim, name in result:  # 튜플이므로 한번에
        if sim <= 0: continue  # 유사도가 양수인 사람만

        # if sim >0 :
        for movie in data[name]:
           if movie not in data[person]:  # name이 평가를 내리지 않은 레시피
                sim = float(sim)
                data[name][movie] = float(data[name][movie])
                score += sim * data[name][movie]  # 그사람의 레시피평점 * 유사도
                score_dic.setdefault(movie, 0)  # 기본값 설정
                score_dic[movie] += score  # 합계 구함
                # 조건에 맞는 사람의 유사도의 누적합을 구한다
                sim_dic.setdefault(movie, 0)
                sim_dic[movie] += sim
                score = 0  # 레시피가 바뀌었으니 초기화한다
        # elif sim == 0 :
        #     for movie in data[name]:
        #         if movie not in data[person]:
        #             score_dic[movie] = -1
        #             sim_dic[movie] = 1

    for key in score_dic:
        if sim_dic[key] == 0 :
            score_dic[key] = -1
        else:
            score_dic[key] = score_dic[key] / sim_dic[key]  # 평점 총합/ 유사도 총합
        if score_dic[key] > 2 :
            li.append((score_dic[key], key))  # list((tuple))의 리턴을 위해서.
    li.sort()  # 오름차순
    li.reverse()  # 내림차순

    print(li)

    return random.sample(li, 3)


# def main():
    # data = load_dataframes()
    # critics = recipe_score(data)
    # print('**recommend**')
    # print(getRecommendation(critics, '천수지'))


# if __name__ == "__main__":
#     main()