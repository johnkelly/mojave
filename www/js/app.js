// Ionic Starter App

var app = angular.module('mojave', ['ionic', 'ngResource', 'flash', 'LocalStorageModule'])

app.run(function($ionicPlatform, $rootScope, $state, CurrentUser) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

  $rootScope.$on('$stateChangeStart', function(e, to) {
    if(to.data && to.data.requiresLogin){
      if(!CurrentUser.isAuthenticated()) {
        e.preventDefault();
        $state.go('welcome');
      }
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('welcome', {
      url: "/welcome",
      templateUrl: "templates/welcome.html",
      controller: "WelcomeCtrl",
      data: {
        requiresLogin: false
      }
    })

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
      },
      data: {
        requiresLogin: true
      }
    })

    .state('app.recipe', {
      url: "/recipes/:recipeId",
      views: {
        'menuContent' :{
          templateUrl: "templates/recipe.html",
          controller: 'RecipeCtrl'
        }
      },
      data: {
        requiresLogin: true
      }
    })

    .state('app.inventory', {
      url: "/inventory",
      views: {
        'menuContent' :{
          templateUrl: "templates/inventory.html",
          controller: 'InventoryCtrl'
        }
      },
      data: {
        requiresLogin: true
      }
    })

    .state('app.shopping', {
      url: "/shopping",
      views: {
        'menuContent' :{
          templateUrl: "templates/shopping.html",
          controller: 'ShoppingCtrl'
        }
      },
      data: {
        requiresLogin: true
      }
    })

    .state('app.meals', {
      url: "/meals",
      views: {
        'menuContent' :{
          templateUrl: "templates/meals.html",
          controller: 'MealsCtrl'
        }
      },
      data: {
        requiresLogin: true
      }
    })

    .state('app.dashboard', {
      url: "/dashboard",
      views: {
        'menuContent' :{
          templateUrl: "templates/dashboard.html",
          controller: 'DashboardCtrl'
        }
      },
      data: {
        requiresLogin: true
      }
    })

    .state('app.kitchen', {
      url: "/kitchen",
      views: {
        'menuContent' :{
          templateUrl: "templates/kitchen.html",
          controller: 'KitchenCtrl'
        }
      },
      data: {
        requiresLogin: true
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/welcome');
});

