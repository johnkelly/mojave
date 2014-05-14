app.controller('MealsCtrl', function($scope, $state, AvailableMeal, Meal, UserMeal, CurrentUser, Helpers) {

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

  $scope.eat = function() {
    UserMeal.save(
      { meal: { meal_id: $scope.available_meal.id }},
      function(response) {
        $state.go('app.meal',{ id: $scope.available_meal.id });
      },
      function(response) {
        Helpers.ajax_error_handling(response);
      }
    );
  }
})
