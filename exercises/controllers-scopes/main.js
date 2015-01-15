var app = angular.module("exercise",[]);

// TODO
// we're missing a controller
// - you'll see an error in the console that'll suggest what to fix.

app.controller("listful",function($scope) {
  // TODO
  $scope.list = [
    { title: 'item a' }, 
    { title: 'item b' }, 
    { title: 'item c' },
  ];
})

app.controller("tabs",function($scope) {
  // TODO
  // the view is expecting a function to be defined
  // on the scope - can you fill it in?
  $scope.showTab = function(tabName) {
    $scope.tab = tabName;
  };
  $scope.showTab('a');
})

app.controller("someController", function($scope) {
  
})
