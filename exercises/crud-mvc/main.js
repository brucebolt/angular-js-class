var app = angular.module("exercise",[]);

app.controller("orderList",function($scope) {
  // YOUR CODE
  $scope.orderDone = function(index) {
    $scope.orders.splice(
      index,
      1
    );
  }
});

app.controller("addOrder",function($scope) {
  // YOUR CODE
  $scope.addOrder = function(newOrder) {
    $scope.orders.push({
      text: newOrder.text
    });
    newOrder.text = "";
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

