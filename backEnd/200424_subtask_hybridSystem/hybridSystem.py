import algorithm.tfidf
import algorithm.collaborative
from parse import load_dataframes
import pandas as pd
import pymysql


def main(tag_data, ingredi, user_name):
    data = load_dataframes()
    content_filtering_result = {}
    collaboratvie_filtering_result = []
    # 변경되는 값

    user_by_score = pd.merge(
        data["user"], data["score"], left_on="id", right_on="user_id"
    )
    user_by_score_group = user_by_score.groupby(['username'])['score'].agg(
        lambda g: g.values.tolist()).to_dict()

    result = {}
    result['collaborative_filtering_result'] = {}
    result['content_filtering_result'] = {}
    # result['collaborative']
    # 사용자가 평점 데이터를 줬고 평점 데이터가 있다면 협업 필터링 알고리즘을 활용한다.
    # if len(user_by_score_group[user_name]) > 0 and len(user_by_score_group) > 10 :
    critics = algorithm.collaborative.recipe_score(data)
    collaboratvie_filtering_result = algorithm.collaborative.getRecommendation(critics, user_name)

    collaboratvie_filtering_result_temp = {}
    for idx, value in enumerate(collaboratvie_filtering_result):
        collaboratvie_filtering_result_temp[value[1]] = value[0]
    result['collaborative_filtering_result'].update(collaboratvie_filtering_result_temp)
    content_filtering_result = algorithm.tfidf.contents_based_filtering(item_id=999999, num=5, tag_data=tag_data,
                                                                        ingredi=ingredi)
    result['content_filtering_result'].update(content_filtering_result)

    print(result)
    return result


if __name__ == "__main__":
    main()
