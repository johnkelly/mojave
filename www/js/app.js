// Ionic Starter App

var app = angular.module('mojave', ['ionic'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.recipes', {
      url: "/recipes",
      views: {
        'menuContent' :{
          templateUrl: "templates/recipes.html",
          controller: 'RecipesCtrl'
        }
      }
    })

    .state('app.recipe', {
      url: "/recipes/:recipeId",
      views: {
        'menuContent' :{
          templateUrl: "templates/recipe.html",
          controller: 'RecipeCtrl'
        }
      }
    })

    .state('app.dashboard', {
      url: "/dashboard",
      views: {
        'menuContent' :{
          templateUrl: "templates/dashboard.html",
          controller: 'DashboardCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/dashboard');
});

