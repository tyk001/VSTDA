(function() {
    //  'use strict';

    angular
      .module('myApp', [])
      .controller('toDoController', toDoController);

    toDoController.$inject = [];

    /* @ngInject */
    function toDoController() {
      var orderBy = '';
      var vm = this;
      vm.items = [];

      activate();

      function activate() {
        // need to add an item to the list

        vm.toDoAdd = function() {

          vm.items.push({
            itemText: vm.toDoInput,
            itemPriority: vm.toDoPrioritySelect
          });
          console.log(vm.items);
          vm.toDoInput = "";
        };

        vm.sortList = function(sortMethod) {
          switch (sortMethod) {
            case '1':
              vm.showMeOrder = 'itemPriority';
              break;
            case '2':
              vm.showMeOrder = '-itemPriority';
              break;
            case '3':
              vm.showMeOrder = 'itemText';
              break;
            default:
          }
        }
      }
    }
  }
})()
