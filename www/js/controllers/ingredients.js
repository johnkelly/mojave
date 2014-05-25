app.controller('IngredientsCtrl', function($scope, $state, Ingredient, Helpers, CurrentUser) {

  Helpers.show_loading();
  $scope.content_loaded = false;

  $scope.ingredient_data = Ingredient.get({}, function() {
    $scope.ingredients = $scope.ingredient_data.ingredients;
    $scope.content_loaded = true;
    Helpers.hide_loading();
  });

  $scope.deleteIngredient = function(ingredient) {
    Ingredient.remove({ id: ingredient.id }, function() {
      $scope.ingredients.splice($scope.ingredients.indexOf(ingredient), 1);
    })
  }

  $scope.go_to_add_ingredient = function() {
    $state.go('app.add_ingredient');
  }
})
