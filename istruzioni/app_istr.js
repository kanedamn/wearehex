var app = angular.module('plunker', ['angularUtils.directives.dirTerminalType']);

app.controller('MainCtrl', function($scope, $timeout) {

   $scope.showInputForm = function() {
    $scope.showform = true;
    $timeout(function() {
      document.getElementById("idInput").focus();
    }, 50);
  }

  $scope.textEntered = function() {
    $scope.p8 = true;
    document.getElementById("idInput").blur();
  }

    var idValue = document.getElementById("idInput").value;
});
