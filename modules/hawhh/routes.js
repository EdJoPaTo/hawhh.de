angular.module("hawhh")
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/pages/main.html',
        controller: 'mainCtrl'
      })
      .when('/impressum', {
        templateUrl: 'templates/pages/impressum.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
