angular.module('hawhh')
  .directive('quickresult', function() {
    return {
      scope: {
        item: "="
      },
      templateUrl: 'templates/directives/quickresult.html'
    };
  });
