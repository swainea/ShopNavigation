(function() {
  'use strict';

  angular
    .module('shop')
    .controller('ItemDetailController', ItemDetailController);

  ItemDetailController.$inject = ["$stateParams"];

  function ItemDetailController ($stateParams){
    this.id = "Item: " + $stateParams.id;
    this.item = {
      id: 342342,
      name: "Audrey II",
      price: "$1,000",
      variety: "Carnivorous",
      similar: "Venus II"
    };

    this.addToCart = function(id){

    };
  }

}());
