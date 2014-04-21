app.controller('KitchenCtrl', function($scope, $state, Appliance, Helpers) {

  $scope.appliance_data = Appliance.get({}, function() {
    $scope.appliances = $scope.appliance_data.appliances;
  });

  $scope.toggleAppliance = function(appliance) {
    if(appliance.owned) {
      $scope.removeAppliance(appliance)
    } else {
      $scope.addAppliance(appliance)
    }
  }

  $scope.removeAppliance = function(appliance) {
    Appliance.remove({ id: appliance.id }, function() {
      appliance.owned = false;
    })
  }

  $scope.addAppliance = function(appliance) {
    Appliance.save(
      { appliances: { id: appliance.id }},
      function() {
        appliance.owned = true;
      },
      function(response) {
        Helpers.ajax_error_handling(response);
      }
    );
  }
})
