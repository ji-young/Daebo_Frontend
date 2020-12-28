from .models import Recipes, Score, Last_Ingredient, RecommendRecipe
from rest_framework import serializers

class RecipesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipes
        fields = '__all__'

class ScoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Score
        fields = '__all__'


class LastingredientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Last_Ingredient
        fields = '__all__'

class GetScoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipes
        fields = ('score')