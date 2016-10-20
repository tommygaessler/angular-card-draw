(function() {
  'use strict';

  angular.module('cardDrawApp.components.hand')
  .controller('DeckController', DeckController);

  DeckController.$inject = ['HandService', '$rootScope'];

  function DeckController (HandService, $rootScope) {
    this.draw = () => HandService.draw();

    $rootScope.$on('cardChange', (event, cards) => {

      this.hearts = 0;
      this.spades = 0;
      this.diamonds = 0;
      this.clubs = 0;

      cards.forEach((card) => {
        if (card.suit === 'SPADES') {
          this.spades++;
        } else if (card.suit === 'HEARTS') {
          this.hearts++;
        } else if (card.suit === 'CLUBS') {
          this.clubs++;
        } else if (card.suit === 'DIAMONDS') {
          this.diamonds++;
        }
      });
    });
  }
}());
