// Ionic Starter App

var app = angular.module('mojave', ['ionic', 'ngResource', 'flash', 'LocalStorageModule'])

app.run(function($ionicPlatform, $rootScope, $state, CurrentUser) {
  $ionicPlatform.ready(function() {
    if(window.navigator && window.navigator.splashscreen){
      setTimeout(function() {
        navigator.splashscreen.hide();
      }, 100);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    if(window.cordova){
      cordova.plugins && cordova.plugins.Keyboard && cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
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

app.constant('Host', 'https://kalahari.herokuapp.com');

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

    .state('sign_up', {
      url: "/sign_up",
      templateUrl: "templates/sign_up.html",
      controller: "SignUpCtrl",
      data: {
        requiresLogin: false
      }
    })

    .state('sign_in', {
      url: "/sign_in",
      templateUrl: "templates/sign_in.html",
      controller: "SignInCtrl",
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

    .state('app.ingredients', {
      url: "/ingredients",
      views: {
        'menuContent' :{
          templateUrl: "templates/ingredients.html",
          controller: 'IngredientsCtrl'
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

    .state('app.meal', {
      url: "/meal/:id",
      views: {
        'menuContent' :{
          templateUrl: "templates/meal.html",
          controller: 'MealCtrl'
        }
      },
      data: {
        requiresLogin: true
      }
    })

    .state('app.log', {
      url: "/log",
      views: {
        'menuContent' :{
          templateUrl: "templates/log.html",
          controller: 'LogCtrl'
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

