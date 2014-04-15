// Ionic Starter App

var app = angular.module('mojave', ['ionic', 'auth0', 'authInterceptor', 'ngCookies'])

app.run(function($ionicPlatform, $rootScope, $state, auth, AUTH_EVENTS, Loading) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

  $rootScope.$on(AUTH_EVENTS.loginSuccess, function () {
    $state.go('app.shopping').finally(function() {
      Loading.stop();
    });
  });
  $rootScope.$on(AUTH_EVENTS.loginFailed, function () {
    $state.go('app.signin', {error: true}).finally(function() {
      Loading.stop();
    });
  });

  $rootScope.$on('$stateChangeStart', function(e, to) {
    if (to.data && to.data.requiresLogin) {
      if (!auth.isAuthenticated) {
        e.preventDefault();
        $state.go('app.signin');
      }
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider, authProvider, $httpProvider) {

  authProvider.init({
    domain: 'kalahari.auth0.com',
    clientID: 'udhMji1uBx0ue4Lqvf9d4kzrC8mWg5YO',
    callbackURL: 'http://localhost:8000',
    callbackOnLocationHash: true
  })

  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.signin',{
      url: "/signin",
      views: {
        'menuContent' : {
          templateUrl: "templates/signin.html",
          controller: "SignInCtrl"
        }
      },
      data: {
        requiresLogin: false
      }
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
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/signin');

  $httpProvider.interceptors.push('authInterceptor');
});

