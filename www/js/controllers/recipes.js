app.controller('RecipesCtrl', function($scope, $stateParams) {
  $scope.recipes = [
    { title: 'Burgers', id: 1 },
    { title: 'Hot Dogs', id: 2 },
    { title: 'Brownies', id: 3 },
    { title: 'BBQ Chicken', id: 4 },
    { title: 'Ice Cream', id: 5 },
    { title: 'Pulled Pork', id: 6 },
    { title: 'Curry', id: 7 }
  ];
})