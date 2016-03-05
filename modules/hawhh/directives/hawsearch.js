angular.module('hawhh')
  .directive('hawsearch', function($window) {
    return {
      scope: {
        q: "="
      },
      templateUrl: 'templates/directives/hawsearch.html',
      link: function(scope, element, attr) {
        scope.clearsearch = function() {
          scope.q = "";
        };
        scope.search = function(q) {
          if (!q) return;
          $window.open("//duckduckgo.com/?q=" + window.encodeURIComponent(scope.q + " site:haw-hamburg.de"));
        };
      }
    };
  });
