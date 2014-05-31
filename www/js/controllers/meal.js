app.controller('MealCtrl', function($scope, $state, $stateParams, Meal, Helpers) {
  $scope.content_loaded = false;
  Helpers.show_loading();

  $scope.meal_id = $stateParams.id

  $scope.meal_data = Meal.get({ id: $scope.meal_id }, function() {
    $scope.content_loaded = true;
    Helpers.hide_loading();
    $scope.meal = $scope.meal_data.meal;
    $scope.ingredients = $scope.meal.ingredients;
    $scope.directions = $scope.meal.directions;
    $scope.appliances = $scope.meal.appliances;
  }, function(response){ Helpers.ajax_error_handling(response) });
})
