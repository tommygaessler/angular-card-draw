(function () {
  'use strict';

  angular.module('cardDrawApp.components.hand')
    .service('HandService', HandService);

  HandService.$inject = ['$http', '$rootScope'];

  const baseUrl = 'https://deckofcardsapi.com/api/deck';
  const newDeckPath = '/new/draw/?count=52';

  function HandService ($http, $rootScope) {
    this.deck = [];
    this.hand = [];
    this.draw = () => {

      if (!this.deck.length) {
        return $http.get(baseUrl + newDeckPath)
        .then(({ data: { cards }}) => {
          this.deck = cards;
          drawACard.call(this);
        });
      } else {
        drawACard.call(this);
      }
    };

    function drawACard() {
      /*jshint validthis: true */
      let selectedCard = this.deck.pop();

      this.hand.push(selectedCard);
      $rootScope.$emit('cardChange', this.hand);
    }
  }
})();
