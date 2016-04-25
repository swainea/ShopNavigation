(function() {
  'use strict';

  angular
    .module('shop')
    .controller('ItemsController', ItemsController);

  ItemsController.$inject = ["$stateParams"];

  function ItemsController ($stateParams){
    this.category = "Item List" + $stateParams.category;
    this.list = [
      { name: "item1" },
      { name: "item2" }

    ];


  }

}());
