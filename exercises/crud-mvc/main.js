var app = angular.module("exercise",[]);

app.controller("orderList",function($scope) {
  // TODO implement deleting done orders
  $scope.remove = function(order) {
    var index = $scope.orders.indexOf(order);
    $scope.orders.splice(index, 1);
  }
});

app.controller("addOrder",function($scope) {
  // TODO implement new orders
  $scope.createOrder = function() {
    $scope.orders.push($scope.order);
    $scope.order = {};
  }
});

app.controller("orders",function($scope) {
  $scope.orders = [
    {text:"warm cheese and mushroom cupcake"},
    {text:"citrus banoffee tart"},
    {text:"polenta meringue"},
    {text:"half a baker's dozen of unboiled bagles"}
  ];
})

