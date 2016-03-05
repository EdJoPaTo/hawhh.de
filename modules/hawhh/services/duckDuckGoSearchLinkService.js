angular.module('hawhh')
  .service('duckDuckGoSearchLinkService', function() {
    return function(query) {
      if (!query) {
        return "";
      }
      return "//duckduckgo.com/?q=" + window.encodeURIComponent(query);
    };
  })
