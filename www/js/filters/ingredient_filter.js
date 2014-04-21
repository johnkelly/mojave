app.filter('ingredientFilter', function(){

  compareStr = function(stringA, stringB){
    stringA = ("" + stringA).toLowerCase();
    stringB = ("" + stringB).toLowerCase();
    return stringA.indexOf(stringB) !== -1;
  }

  return function(input, query){
    if(!query) return input;
    var result = [];

    angular.forEach(input, function(ingredient){
      if(compareStr(ingredient.food.name, query))
        result.push(ingredient);
    });
    return result;
  };
});
