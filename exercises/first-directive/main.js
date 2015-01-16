var exercise = angular.module("exercise",[]);

exercise.directive("flash",function() {
  return function(scope,el,attrs) {
     // YOUR CODE
     el = el[0];
     el.on('click', function() {
       el.remove();
     });
  }
})
