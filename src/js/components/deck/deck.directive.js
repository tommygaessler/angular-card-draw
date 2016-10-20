// 1. write an iife
// 2. create access your module
// 3. $inject
// 4. named function and write the function
// 5. connect in app.js
// 6. connect in index.html

(function() {
  'use strict';

  angular.module('cardDrawApp.components.deck')
  .directive('cdDeck', DeckDirective);

  DeckDirective.$inject = [];

  function DeckDirective() {
    return {
      restrict: 'E',
      scope: {},
      controller: 'DeckController',
      controllerAs: 'vm',
      templateUrl: './js/components/deck/deck.html'
    };
  }

}());
