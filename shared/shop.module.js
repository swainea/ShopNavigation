(function() {
  'use strict';

  angular
    .module('shop', ['ui.router'])
    .config(shopConfig);

    shopConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function shopConfig( $stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'welcome/welcome.html',
                controller: 'WelcomeController',
                controllerAs: 'welcome'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'categories/categories.html',
                controller: 'CategoriesController',
                controllerAs: 'categories'
            })
            .state('itemsByCategory', {
                url: '/categories/:category',
                templateUrl: 'items/items.html',
                controller: 'ItemsController',
                controllerAs: 'items'
            })
            .state('itemDetail', {
                url: '/items/:id',
                templateUrl: 'itemDetail/itemDetail.html',
                controller: 'ItemDetailController',
                controllerAs: 'itemDetail'
            })
            .state('cart', {
                url: '/cart',
                templateUrl: 'cart/cart.html',
                controller: 'CartController',
                controllerAs: 'cart'
            });
    }


}());
