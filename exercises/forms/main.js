var exercise = angular.module("exercise",[])

exercise.controller("BuyShoelaceCtrl", function($scope) {
  $scope.buy = function() {
    // TODO don't run if form is invalid
    // TODO add lace to laces list
    // TODO reset form
    if($scope.shoelaceForm.$invalid) return;
    $scope.laces.push($scope.shoelace); 
  } 
});

exercise.controller("ShoelaceListCtrl", function($scope) {
  $scope.laces = [];
});
