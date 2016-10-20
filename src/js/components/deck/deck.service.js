(function () {
  'use strict';

  angular.module('cardDrawApp.components.deck')
    .service('DeckService', DeckService);

  DeckService.$inject = ['$http'];

  function DeckService ($http) {
    console.log('deck');
  }
})();
