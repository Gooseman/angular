(function () {
  'use strict'
  angular.module('counterApp', [])

  .controller('foodController', function ($scope, $filter) {
    $scope.foodList = "";
    $scope.mealResult = '';

    $scope.countItems = function() {
      if ($scope.foodList.length == 0) {
        $scope.mealResult = 'Please enter data first';
        $scope.mealInputBorder = "redMealBorder";
        $scope.mealResultColour = "red";
        return;
        }

      $scope.mealResultColour = "green";
      $scope.mealInputBorder = "greenMealBorder";

      var allItems = $scope.foodList.split(",");
      // var nonEmptyItems = $filter('filter')(allItems, function(val) { val.trim().length > 0;});
      // $scope.foodItemCount = nonEmptyItems.length;

      $scope.mealResult = '';

      var count = 0;

      for (var index = 0; index < allItems.length; ++index) {
        if (allItems[index].length > 0) {
          count++;
          }
        }
      
      if (count <= 3) {
        $scope.mealResult = 'Enjoy!';
      }
      else {
        $scope.mealResult = 'Too much!';
        }
      }
  });
})();
