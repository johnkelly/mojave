app.controller('LogCtrl', function($scope, $state, $stateParams, UserMeal) {

  $scope.user_meal_data = UserMeal.get({}, function() {
    $scope.users_meals = $scope.user_meal_data.meals;
  });

  $scope.deleteUserMeal = function(user_meal) {
    UserMeal.remove({ id: user_meal.id }, function() {
      $scope.users_meals.splice($scope.users_meals.indexOf(user_meal), 1);
    })
  }
})
