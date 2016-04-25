(function() {
  'use strict';

  angular
    .module('shop')
    .controller('WelcomeController', WelcomeController);

  function WelcomeController(){
    this.title = "Mushnik's Flower Shop";
    this.tagline = "Don't Feed the Plants";
    this.flowerOfWeek = "Audrey II";
  }

  // search needs to be functionable

}());
