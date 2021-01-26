import pandas as pd
import pymysql
import time
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel

conn = pymysql.connect(host='34.64.88.80', port=3306, user='root',
                     passwd='root', db='django_db', charset='utf8')

def contents_based_filtering(item_id, num,tag_data, ingredi):
    curs=conn.cursor()

    splited_data=ingredi.split(',')

    getAll="select * from recipes where ingredients like "
    
    for idx, data in enumerate(splited_data):
        if idx==len(splited_data)-1:
            break
        getAll = getAll + "\"%" + data + "%\"" + " or ingredients like "

    getAll = getAll + "\"%" + splited_data[len(splited_data)-1] + "%\""

    print(getAll)

    curs.execute(getAll)
    temp = curs.fetchall()


    allcontent=list(temp)

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

    print("Recommending " + str(num) + " products similar to " + df.loc[df['id'] == item_id]['name'].tolist()[0] + "...")
    print("-------")
    recs = results[item_id][:num]
    dict = {}

    for rec in recs:
       print("Recommended: " + df.loc[df['id'] == rec[1]]['name'].tolist()[0] + " (score:" + str(rec[0]) + ")")
       dict[df.loc[df['id'] == rec[1]]['name'].tolist()[0]] = str(rec[0])

    return dict


contents_based_filtering(item_id=999999, num=5, tag_data='#피자#이탈리안#술안주', ingredi='치즈,옥수수,고추장')
