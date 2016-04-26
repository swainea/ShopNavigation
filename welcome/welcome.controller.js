(function() {
  'use strict';

  angular
    .module('shop')
    .controller('WelcomeController', WelcomeController);

  WelcomeController.$inject = ["$state"];

  function WelcomeController($state){
    this.title = "Mushnik's Flower Shop";
    this.tagline = "Don't Feed the Plants";
    this.flowerOfWeek = "Audrey II";

    this.search = function search (){
      console.log("inside search");
      $state.go('itemDetail');
    };
  }


}());
