// * Scope uses prototypical inheritance
// * Some directives create a new scope
// * ng-controller creates a new scope
// * Share with a page controller

angular.module('app', [])


angular.module('app')
  .controller("appController", function($scope) {
    $scope.cheese = {};
  })





angular.module('app')
  .controller("cheeseController", function() {

  });



























// initial state
// angular.module('app', [])
//   .controller("cheeseController", function() {});
