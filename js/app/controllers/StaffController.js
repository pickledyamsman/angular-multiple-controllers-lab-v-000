function StaffController() {

  var vm = this;

  vm.name = "Michael";
  vm.email = "mike@gmail.com";
  vm.phone = "9999999999";
}

angular
  .module('app')
  .controller('StaffController', StaffController)