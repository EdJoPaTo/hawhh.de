angular.module('hawhh')
  .controller('mainCtrl', function($scope, $http) {
    $scope.q = "";
    $scope.oftenlinks = [];

    $http.get("resources/oftenlinks.json").success(function(request) {
      $scope.oftenlinks = request;
    });
  });
