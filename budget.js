var budgetApp = angular.module('budgetApp', []);

budgetApp.controller('EnvelopeCtrl', function($scope) {
  $scope.envelopes = [{
    name: 'test',
    income: 50.01,
    start: new Date()
  },
  {
    name: 'test2',
    income: 1,
    start: new Date()
  }]
  
  $scope.save = function() {
    $scope.envelopes.push($scope.newEnvelope);
    $scope.resetForm();
  };
  
  $scope.resetForm = function() {
    $scope.newEnvelope = {
      name: 'name',
      income: 0,
      start: new Date()
    };
  }
  
  $scope.resetForm();
});



// compare - new Date(localStorage['last_visit']). be sure to check if undefined
localStorage['last_visit'] = new Date();

//envelopes = localStorage['envelopes'] || []
