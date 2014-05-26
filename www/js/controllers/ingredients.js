app.controller('IngredientsCtrl', function($scope, $state, $timeout, Ingredient, Helpers, CurrentUser, Measurement) {
  var updateIngredientTimeout;

  Helpers.show_loading();
  $scope.content_loaded = false;

  $scope.measurement_data = Measurement.get({}, function() {
    $scope.measurements = $scope.measurement_data.measurements;
  });

  $scope.ingredient_data = Ingredient.get({}, function() {
    $scope.ingredients = $scope.ingredient_data.ingredients;

    for(i=0; i < $scope.ingredients.length; i++){
      $scope.ingredients[i].selected = false;
    }

    $scope.content_loaded = true;
    Helpers.hide_loading();
  });

  $scope.deleteIngredient = function(ingredient) {
    Ingredient.remove({ id: ingredient.id }, function() {
      $scope.ingredients.splice($scope.ingredients.indexOf(ingredient), 1);
    })
  }

  $scope.toggleIngredient = function(ingredient) {
    ingredient.selected = !ingredient.selected;
  }

  $scope.updateIngredient = function(ingredient) {
    if(updateIngredientTimeout != null) {
      $timeout.cancel(updateIngredientTimeout);
    }

    updateIngredientTimeout = $timeout(function(){
      Ingredient.update(
          { id: ingredient.id, ingredients: { quantity: ingredient.quantity, measurement_id: ingredient.measurement.id }}, function(response){},
       function(response){
         Helpers.ajax_error_handling(response);
       }
     );
    }, 3000);
  }

  $scope.go_to_add_ingredient = function() {
    $state.go('app.add_ingredient');
  }
})
