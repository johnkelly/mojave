app.controller('IngredientsCtrl', function($scope, $state, Ingredient, Helpers) {

  $scope.ingredient_data = Ingredient.get({}, function() {
    $scope.ingredients = $scope.ingredient_data.ingredients;
  });
})
