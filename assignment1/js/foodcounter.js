(function () {
  'use strict'
  angular.module('counterApp', [])
  .controller('foodController', FoodController);

  FoodController.$inject = ['$scope', '$filter'];

  function FoodController ($scope, $filter) {
    $scope.foodList = "";
    $scope.mealResult = '';

    $scope.countItems = function() {
      if ($scope.foodList.length == 0) {
        handleNoItemsCase($scope);
        return;
      }

      $scope.mealResultColour = "green";
      $scope.mealInputBorder = "greenMealBorder";

      var allItems = $scope.foodList.split(",");
      var count = allItems.filter(isNonEmptyString).length;

      $scope.mealResult = '';

      if (count <= 3) {
        $scope.mealResult = 'Enjoy!';
      }
      else {
        $scope.mealResult = 'Too much!';
      }
    }
  }
    
  function isNonEmptyString(val) {
    return val.trim().length > 0;
  }

  function handleNoItemsCase(sc) {
    sc.mealResult = 'Please enter data first';
    sc.mealInputBorder = "redMealBorder";
    sc.mealResultColour = "red";
  }
})();
