(function() {
  'use strict';

  angular
    .module('shop')
    .controller('WelcomeController', WelcomeController);

  WelcomeController.$inject = ["$stateParams"];

  function WelcomeController(){
    this.title = "Mushnik's Flower Shop";
    this.tagline = "Don't Feed the Plants";
    this.flowerOfWeek = "Audrey II";

    this.search = function search (){
      $state.go();
    };
  }


}());
