app.controller('MealsCtrl', function($scope, $state, AvailableMeal, Meal, CurrentUser, Helpers) {

  $scope.available_meal_data = AvailableMeal.get({}, function() {
    $scope.available_meals = Helpers.shuffle_array($scope.available_meal_data.available_meals);
    $scope.current_meal_index = 0
    $scope.available_meal = $scope.available_meals[$scope.current_meal_index]
  });

  $scope.nextAvailableMeal = function() {
    if ($scope.current_meal_index < $scope.available_meals.length - 1) {
      $scope.current_meal_index += 1
    } else {
      $scope.available_meal = null;
    }
  }
})
