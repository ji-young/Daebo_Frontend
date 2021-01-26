import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))

from django.http import Http404
import pandas as pd
import pymysql
import time
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel



def contents_based_filtering(item_id, num, tag_data, ingredients):
    conn = pymysql.connect(host='34.64.88.80', port=3306, user='root',
                        passwd='root', db='django_db', charset='utf8')
    curs=conn.cursor()
    like = "ingredients like \"%"
    copy = "ingredients like \"%"
    for i, k in enumerate(ingredients):
        print (k['name'])
        if len(ingredients) - 1 != i:
            like = like + k['name'] + "%\" and " + copy
        else:
            like = like + k['name'] + "%\""

    getAll="select * from recipes where " + like
    curs.execute(getAll)

    temp = curs.fetchall()
    allcontent=list(temp)

    if len(allcontent) == 0:
        raise Http404("Question does not exist")

    allcontent.append((999999,'name','timereq','cookmethod','img',tag_data,'category','ingredients'))

    df=pd.DataFrame(allcontent, columns=['id','name','time_req','cook_method','img','tags','category','ingredients'])

    tf = TfidfVectorizer(analyzer='word', stop_words='english')
    tfidf_matrix = tf.fit_transform(df['tags'].values.astype('U'))
    cosine_similarities = linear_kernel(tfidf_matrix, tfidf_matrix)

    results = {}
    for idx, row in df.iterrows():
        similar_indices = cosine_similarities[idx].argsort()[:-100:-1]
        similar_items = [(cosine_similarities[idx][i], df['id'][i]) for i in similar_indices]
        results[row['id']] = similar_items[1:]
    recs = results[item_id][:num]
 
    conn.close()    
    return recs


# contents_based_filtering(item_id=999999, num=5, tag_data='#닭볶음탕#매콤#찜닭#치킨')
