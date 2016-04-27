function ContactController() {

  var vm = this;

  vm.name = "Paul";
  vm.email = "pickledyamsman@gmail.com";
  vm.phone = "0123456789";

  this.changeName = function() {
    vm.name = "Matt";
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)