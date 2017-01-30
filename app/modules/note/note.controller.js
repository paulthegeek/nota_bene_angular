(function() {
  "use strict";

  angular
    .module("app.note")
    .controller("noteController", noteController);

  noteController.$inject = ["$http"];

  function noteController($http) {
    var noteCtrl = this;
    console.log("Testing with Sublime");

    $http({
      method: "GET",
      url: "http://localhost:5000/api/notes/"
    }).then(function success(response) {
      noteCtrl.notes = response.data;
      return noteCtrl.notes;
    }, function error(response) {
      console.log("Error");
    });
  }
})();
