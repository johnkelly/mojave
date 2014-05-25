app.controller('AddIngredientsCtrl', function($scope, $state, $timeout, Food, Ingredient, Measurement, Helpers, CurrentUser) {
  var foodSearchTimeout;

  Helpers.show_loading();
  $scope.content_loaded = false;
  $scope.search = { food_name: "" };

  $scope.go_to_ingredients = function() {
    $state.go('app.ingredients');
  }

  $scope.measurement_data = Measurement.get({}, function() {
    $scope.measurements = $scope.measurement_data.measurements;
    $scope.content_loaded = true;
    Helpers.hide_loading();
  });

  $scope.searchFood = function(release) {
    if(foodSearchTimeout != null){
      $timeout.cancel(foodSearchTimeout)
    }

    foodSearchTimeout = $timeout(function(){
      Food.get(
        { name: $scope.search.food_name },
        function(response) {
          $scope.foods = response.foods;
          for(i=0; i < $scope.foods.length; i++){
            $scope.foods[i].foods.selected = false;
            $scope.foods[i].foods.quantity = "";
            $scope.foods[i].foods.measurement_id = "";
          }
        },
        function(response) {
          Helpers.ajax_error_handling(response);
        }
        );
    }, 250);
  }

  $scope.toggleSelectFood = function(food) {
    food.selected = !food.selected;
  }

  $scope.createIngredient = function(food) {
    Ingredient.save(
      { ingredients: { food_id: food.id, quantity: food.quantity, measurement_id: food.measurement_id }},
      function(response) {
        food.quantity = "";
        food.measurement_id = "";
        food.selected = false;
      },
      function(response) {
        Helpers.ajax_error_handling(response);
      }
    );
  }
})
