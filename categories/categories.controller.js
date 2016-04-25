(function() {
  'use strict';

  angular
    .module('shop')
    .controller('CategoriesController', CategoriesController);

  function CategoriesController (){
    this.list = [
      { name: "Garden Varieties" },
      { name: "Unusual Varieties" },
      { name: "Soil, Fertilizers, and Supplies" }
    ];


  }

}());
