import json
import os

from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response  # JSON 응답 생성기
from .serializers import ScoreSerializer, RecipesSerializer, LastingredientsSerializer, GetScoreSerializer
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import AllowAny  # 회원가입은, 인증을 볼 필요가 없음.
from .models import Recipes, Score, Last_Ingredient
from .algorithm import tfidf
from .algorithm import collaborative
from .parse import load_dataframes
import pandas as pd
import pymysql

import time
import shutil
from . import analyze
from . import parse


@api_view(['GET'])
def getRecipe(request):
    recipes = Recipes.objects.all()
    serializer = RecipesSerializer(instance=recipes, many=True)
    # from IPython import embed; embed()
    return Response(serializer.data)

@api_view(['GET'])
def getRecipeFive(requset):
    recipes = Recipes.objects.raw('select *from recipes where id <= 5')
    serializer = RecipesSerializer(instance=recipes, many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST'])
def regScore1(request):
    if request.method == 'GET':
        queryset = Score.objects.all()
        serializer = ScoreSerializer(queryset, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        userid = request.user.id
        datas = request.data
        serializer = ScoreSerializer(data={'user':userid , 'recipe':datas['recipe'],'score':datas['score']})
        if serializer.is_valid():
            serializer.save()
            os.remove("/ssafy/bigdaheetasub3/s02p23a309/BackEnd/bigdageeta/recipes/data/dump.pkl")
            data1 = parse.fetch_data()
            parse.dump_dataframes(data1)
            return Response(serializer.data)
        return x(serializer.errors)


@api_view(['GET', 'PUT'])
def lastingredientslist(request):
    try:
        ingredients = Last_Ingredient.objects.get(user_id=request.user.id)
    except Last_Ingredient.DoesNotExist:
        return Response()

    if request.method == 'GET':
        serializer = LastingredientsSerializer(ingredients)
        return Response(serializer.data)

    elif request.method == 'PUT':
        userid = request.user.id
        datas = request.data
        serializer = LastingredientsSerializer(ingredients,data={'user':userid , 'last_ingredients':datas['last_ingredients']})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

@api_view(['POST'])
def algo(request):
    datas = request.data
    data = load_dataframes()
    content_filtering_result = {}
    collaboratvie_filtering_result = []
    # 변경되는 값
    user_name = request.user.username  # 로그인 한 사람
    
    user_by_score = pd.merge(
        data["user"], data["score"], left_on="id", right_on="user_id"
    )
    user_by_score_group = user_by_score.groupby(['username'])['score'].agg(lambda g: g.values.tolist()).to_dict()

    result = []
    #result['collaborative_filtering_result'] = {}
    #result['content_filtering_result'] = {}
    # result['collaborative']
    # 사용자가 평점 데이터를 줬고 평점 데이터가 있다면 협업 필터링 알고리즘을 활용한다.
    collaboratvie_filtering_result_temp = {}
    copy = ' or id = '
    copy1 = ' or name = ' 
    like = ''

    list1 = []
    if user_name in user_by_score_group.keys():
        critics = collaborative.recipe_score(data)
        collaboratvie_filtering_result = collaborative.getRecommendation(critics, user_name)
        
        for idx, rid in enumerate(collaboratvie_filtering_result):
            if idx != len(collaboratvie_filtering_result) -1 :
                print (rid[1])
                like = like + '\"'+str(rid[1]) +'\"' + copy1
                list1.append(rid[0])
            else :
                like = like + '\"'+str(rid[1]) +'\"'
                list1.append(rid[0])

        recipes = Recipes.objects.raw('select * from recipes where name = ' + like)
        serializer = RecipesSerializer(instance=recipes, many=True)
        totallist1 = []
        
        for idx, sc in enumerate(serializer.data) :
            totallist1.append({"id" : sc['id'],
            "name":sc['name'],
            "time_req":sc['time_req'], 
            "cook_method":sc['cook_method'], 
            "img":sc['img'],
            "tags":sc['tags'],
            "category":sc['category'],
            "ingredients":sc['ingredients'], 
            "score" : list1[idx]})
        
        like1 = ''
        content_filtering_result = tfidf.contents_based_filtering(item_id=999999, num=21, tag_data=datas['tag'], ingredients=datas['ingredients'])
        
        list2 =[]
        for idx, rid in enumerate(content_filtering_result):
            if idx != len(content_filtering_result) -1 :
                like1 = like1 + str(rid[1]) + copy
                list2.append(rid[0])
            else :
                like1 = like1 + str(rid[1])
                list2.append(rid[0])
        recipes1 = Recipes.objects.raw('select * from recipes where id = ' + like1)
        serializer1 = RecipesSerializer(instance=recipes1, many=True)

        totallist2 = []
        for idx, sc in enumerate(serializer.data) :
            totallist2.append({"id" : sc['id'],
            "name":sc['name'],
            "time_req":sc['time_req'], 
            "cook_method":sc['cook_method'], 
            "img":sc['img'],
            "tags":sc['tags'],
            "category":sc['category'],
            "ingredients":sc['ingredients'], 
            "score" : list2[idx]})
        
        list=[totallist1, totallist2]

        return Response(list)
    else :
        content_filtering_result = tfidf.contents_based_filtering(item_id=999999, num=21, tag_data=datas['tag'], ingredients=datas['ingredients'])
        for idx, rid in enumerate(content_filtering_result):
            if idx != len(content_filtering_result) -1 :
                like = like + str(rid[1]) + copy
            else :
                like = like + str(rid[1])
        recipes = Recipes.objects.raw('select * from recipes where id = ' + like)
        serializer = RecipesSerializer(instance=recipes, many=True)

        list = [{'nodata'}, serializer.data]
        return Response(list)


@api_view(['POST'])
def map(request):
    datas = request.data
    data = analyze.load_dataframes()
    start = time.time()
    preference_recommendation = {}
    # 생맥주 -> 음식점 메뉴 생맥주 음식점 가져왔어 -> 음식점 평점 -> Top5
    # 음식점 - 리뷰, 음식점 - 메뉴

    for i in data["menus"]["menu_name"] :
        if datas['food'] in i :
             if i in preference_recommendation :
                 preference_recommendation[i] += 1
             else :
                 preference_recommendation[i] = 1
    sorted_preference_recommendation = sorted(preference_recommendation.items(), key=lambda preference_recommendation : preference_recommendation[1], reverse=True)[:3]
    # 선호가 가장 많이 포함된 메뉴를 선정

    print("** 추천 레시피 **")
    print(sorted_preference_recommendation)

    restaurant = []
    stores_menus = analyze.stores_by_menus(data)

    # 메뉴별 가게를 선정
    for i, val in enumerate(stores_menus["menu_name"]):
        if sorted_preference_recommendation[0][0] in val :
            if stores_menus["store_name"][i] not in restaurant and datas['area'] in stores_menus["address"][i]:
                restaurant.append(stores_menus["store_name"][i])

    # 가게 별 평점
    stores_score = analyze.sort_stores_by_score(data)
    top_restaurant = {}
    for j, val_j in enumerate(stores_score["store_name"]):
        for k, val_k in enumerate(restaurant):
            if val_k == val_j:
                top_restaurant[val_k] = stores_score["score"][j]


    sorted_top_restaurant = sorted(top_restaurant.items(), key=lambda top_restaurant : top_restaurant[1], reverse=True)[:3]

    print("** 추천 음식점 **")
    print(sorted_top_restaurant)
    # print("time :", time.time() - start)  # 현재시각 - 시작시간 = 실행시간

    print("-----------------------")
    loc_dict = {} # 전체
    store_dict = {}
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

    print(loc_dict)

    return Response(loc_dict)


@api_view(['POST'])
def comp(request):

    datas = request.data
    recipe1 = Recipes.objects.get(id = datas['id1'])
    recipe2 = Recipes.objects.get(id = datas['id2'])
    score1 = Score.objects.filter(recipe = datas['id1'])
    score2 = Score.objects.filter(recipe = datas['id2'])
    rserializer1 = RecipesSerializer(instance=recipe1, many = False)
    rserializer2 = RecipesSerializer(instance = recipe2, many = False)
    sserializer1 = ScoreSerializer(instance=score1, many=True)
    sserializer2 = ScoreSerializer(instance=score2, many=True)


    totalscore1 = 0.0
    totalscore2 = 0.0

    for score in sserializer1.data:
        totalscore1 += float(score['score'])

    if len(sserializer1.data) != 0 :
        totalscore1/=len(sserializer1.data)


    for score in sserializer2.data:
        totalscore2 += float(score['score'])

    if len(sserializer2.data) != 0:
        totalscore2/=len(sserializer2.data)

    count1 = rserializer1.data['ingredients'].count('\n')/2
    count2 = rserializer2.data['ingredients'].count('\n')/2

    list = [
        {"time":int(rserializer1.data['time_req'][0:2]), "ingredientcount":count1, "score":totalscore1},
        {"time":int(rserializer2.data['time_req'][0:2]), "ingredientcount":count2, "score":totalscore2}
    ]

    return Response(list)