var app = angular.module("exercise",["ngRoute"]);

app.config(function($locationProvider) {
  // won't work for file://
  // normally we'd use this to enable pushState
  // $locationProvider.html5Mode(true);
});

app.config(function($routeProvider) {
  // we'd like to define three routes for the three paths
  // - how can we do that?
  //
  $routeProvider
    .when("/", {
      templateUrl: "home.html"
    })
    .when("/baked-goods", {
      templateUrl: "baked-goods.html"
    })
    .when("/coffee/:type", {
      templateUrl: "coffee.html",
      controller: "CoffeeCtrl",
    })
});


app.controller("CoffeeCtrl", function($scope,
      $routeParams) {

  $scope.type = $routeParams.type;

});
