from django.urls import path,include
from . import views

urlpatterns = [
    # path('cookmethod/', views.recipes_list),
    path('recipelist/', views.getRecipe),
    path('regScore/', views.regScore1),
    path('getFive/', views.getRecipeFive),
    path('regRefri/', views.lastingredientslist),
    path('algo/', views.algo),
    path('map/', views.map),
    path('compare/', views.comp)
]
