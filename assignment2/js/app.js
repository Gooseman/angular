(function() {
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  function ShoppingListCheckOffService() {
    var shoppingListCheck = this;
    var itemsToBuy =
        [{ name: "Wine", quantity: "2 bottles" }, 
         { name: "Cheddar Cheese", quantity: "1 block" },
         { name: "Salted Crackers", quantity: "2 packets" },
         { name: "Hummus", quantity: "2 tubs" },
         { name: "Cocktail Sausages", quantity: "2 packs" }];
    var boughtItems = [];
    
    shoppingListCheck.getItemsToBuy = function() {
      return itemsToBuy;
    };

    shoppingListCheck.getBoughtItems = function() {
      return boughtItems;
    };

    shoppingListCheck.itemBought = function(index) {
      console.log("buying item " + index);
      boughtItems.push(itemsToBuy[index]);
      itemsToBuy.splice(index, 1);
    };
  };

  ToBuyController.$inject = ['ShoppingListCheckOffService', '$scope'];
  function ToBuyController(ShoppingListCheckOffService, $scope) {
    var shoppingList = this;
    
    shoppingList.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();
    console.log(shoppingList.itemsToBuy);
    
    shoppingList.itemBought = function(index) {
      console.log("Buying item " + index + " in controller"); 
      ShoppingListCheckOffService.itemBought(index);
    };
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtFromList = this;
    
    boughtFromList.boughtItems = ShoppingListCheckOffService.getBoughtItems();
  }
})();
