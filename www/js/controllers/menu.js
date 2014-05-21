app.controller('MenuCtrl', function($scope, $state, Menu, Meal, UserMeal, CurrentUser, Helpers) {
  $scope.content_loaded = false;
  Helpers.show_loading();

  $scope.menu_data = Menu.get({}, function() {
    $scope.content_loaded = true;
    Helpers.hide_loading();
    $scope.menu_items = Helpers.shuffle_array($scope.menu_data.available_meals);
    $scope.current_meal_index = 0;
    $scope.current_menu_item = $scope.menu_items[$scope.current_meal_index];
  });

  $scope.nextMenuItem = function() {
    if ($scope.current_meal_index < $scope.menu_items.length - 1) {
      $scope.current_meal_index += 1;
      $scope.current_menu_item = $scope.menu_items[$scope.current_meal_index];
    } else {
      $scope.current_menu_item = null;
    }
  }

  $scope.eat = function() {
    UserMeal.save(
      { meal: { meal_id: $scope.current_menu_item.id }},
      function(response) {
        $state.go('app.meal',{ id: $scope.current_menu_item.id });
      },
      function(response) {
        Helpers.ajax_error_handling(response);
      }
    );
  }
})
