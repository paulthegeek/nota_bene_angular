(function() {
  "use strict";

  require("angular");
  require("angular-ui-router");
  require("./app_require.js");

  angular
    .module("app", ["app.note","ui.router"])
    .config(config);

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state("notes", {
        url: "/notes",
        templateUrl: "modules/note/notes.html",
        controller: "noteController",
        controllerAs: "noteCtrl"
      });
  }
})();
