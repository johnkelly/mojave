app.controller('MealCtrl', function($scope, $state, $stateParams, Meal) {
  $scope.meal_id = $stateParams.id

  $scope.meal_data = Meal.get({ id: $scope.meal_id }, function() {
    $scope.meal = $scope.meal_data.meal;
    $scope.ingredients = $scope.meal.ingredients;
    $scope.directions = $scope.meal.directions;
    $scope.appliances = $scope.meal.appliances;
  });
})
