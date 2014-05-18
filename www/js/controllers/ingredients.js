app.controller('IngredientsCtrl', function($scope, $state, Ingredient, Measurement, Helpers, CurrentUser) {
  Helpers.show_loading();
  $scope.content_loaded = false;

  $scope.newIngredient = {}
  $scope.showNewIngredientView = false;

  $scope.toggleIngredientView = function() {
    $scope.showNewIngredientView = !$scope.showNewIngredientView;
  }

  $scope.ingredient_data = Ingredient.get({}, function() {
    $scope.content_loaded = true;
    Helpers.hide_loading();
    $scope.ingredients = $scope.ingredient_data.ingredients;
  });

  $scope.measurement_data = Measurement.get({}, function() {
    $scope.measurements = $scope.measurement_data.measurements;
  });

  $scope.createIngredient = function() {
    Ingredient.save(
      { ingredients: $scope.newIngredient },
      function(response) {
        $scope.ingredients.push(response.ingredient);
        $scope.newIngredient = {};
      },
      function(response) {
        Helpers.ajax_error_handling(response);
      }
    );
  }

  $scope.deleteIngredient = function(ingredient) {
    Ingredient.remove({ id: ingredient.id }, function() {
      $scope.ingredients.splice($scope.ingredients.indexOf(ingredient), 1);
    })
  }
})
