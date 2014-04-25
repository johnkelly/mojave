app.controller('MealsCtrl', function($scope, $state, UserMeal, Meal, CurrentUser, Helpers) {
  $scope.newUserMeal = {}

  $scope.user_meal_data = UserMeal.get({}, function() {
    $scope.user_meals = $scope.user_meal_data.meals;
  });

  $scope.meal_data = Meal.get({}, function() {
    $scope.meals = $scope.meal_data.meals;
  });

  $scope.createUserMeal = function() {
    UserMeal.save(
      { meal: $scope.newUserMeal },
      function(response) {
        $scope.user_meals.push(response.users_meal);
        $scope.newIngredient = {};
      },
      function(response) {
        Helpers.ajax_error_handling(response);
      }
      );
  }

  $scope.deleteUserMeal = function(user_meal) {
    UserMeal.remove({ id: user_meal.id }, function() {
      $scope.user_meals.splice($scope.user_meals.indexOf(user_meal), 1);
    })
  }
})
