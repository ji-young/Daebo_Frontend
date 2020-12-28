from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Recipes(models.Model):
    name = models.CharField(max_length = 200)
    time_req = models.CharField(max_length = 200)
    cook_method = models.CharField(max_length = 5000)
    img = models.CharField(max_length = 500, blank = True)
    tags = models.CharField(max_length = 1000)
    category = models.CharField(max_length = 100)
    ingredients = models.CharField(max_length = 1000, null=True)

    class Meta:
        db_table = "recipes"

class Score(models.Model):
    recipe = models.ForeignKey(Recipes, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    score = models.DecimalField(max_digits=10, decimal_places=2, blank=False)

    class Meta:
        db_table = "scores"

class Last_Ingredient(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    last_ingredients = models.CharField(max_length=5000, null=True)

    class Meta:
        db_table = "last_ingredients"

class RecommendRecipe(models.Model):
    name = models.CharField(max_length = 200)
    time_req = models.CharField(max_length = 200)
    cook_method = models.CharField(max_length = 5000)
    img = models.CharField(max_length = 500, blank = True)
    tags = models.CharField(max_length = 1000)
    category = models.CharField(max_length = 100)
    ingredients = models.CharField(max_length = 1000, null=True)
    score = models.CharField(max_length = 30)
