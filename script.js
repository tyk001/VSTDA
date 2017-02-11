(function() {
  //  'use strict';

  angular
    .module('myApp', [])
    .controller('toDoController', toDoController);

  toDoController.$inject = ['$filter'];

  /* @ngInject */
  function toDoController($filter) {
    var vm = this;
    var orderBy = '';
    var showMeOrder = '';
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
        console.log(sortMethod);
        vm.items = $filter('orderBy')(vm.items, sortMethod);
      };
    }
  }
})()
