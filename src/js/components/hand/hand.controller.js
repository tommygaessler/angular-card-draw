(function() {
  'use strict';

  angular.module('cardDrawApp.components.hand')
  .controller('HandController', HandController);

  HandController.$inject = ['HandService'];

  function HandController (HandService) {

    this.hand = HandService.hand;
    HandService.draw();
  }
}());
