angular.module('hawhh')
  .controller('mainCtrl', function($scope, $http, duckDuckGoSearchLinkService) {
    $scope.q = "";

    $scope.oftenlinks = [];
    $http.get("resources/oftenlinks.json").success(function(request) {
      $scope.oftenlinks = request;
    });

    $scope.currentsearch = { description: "DuckDuckGo Suche" };
    $scope.$watch('q', function(newValue) {
      $scope.currentsearch.name = $scope.q + " site:haw-hamburg.de";
      $scope.currentsearch.url = "https:" + duckDuckGoSearchLinkService($scope.q + " site:haw-hamburg.de");
    });
  });
