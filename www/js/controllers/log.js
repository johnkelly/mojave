app.controller('LogCtrl', function($scope, $state, $stateParams, UserMeal, Helpers) {
  Helpers.show_loading();
  $scope.content_loaded = false;

  $scope.user_meal_data = UserMeal.get({}, function() {
    $scope.content_loaded = true;
    Helpers.hide_loading();
    $scope.users_meals = $scope.user_meal_data.meals;
  });

  $scope.deleteUserMeal = function(user_meal) {
    UserMeal.remove({ id: user_meal.id }, function() {
      $scope.users_meals.splice($scope.users_meals.indexOf(user_meal), 1);
    })
  }

  $scope.viewMealDetails = function(meal) {
    $state.go('app.meal',{ id: meal.id });
  }
})
