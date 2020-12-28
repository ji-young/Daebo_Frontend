from parse1 import load_dataframes
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
