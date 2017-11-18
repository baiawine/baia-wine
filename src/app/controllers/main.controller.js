AppCtrl.$inject = ['$scope', '$document', 'THUMBNAILS'];

export default function AppCtrl($scope, $document, THUMBNAILS) {
  let vm = this;

  vm.thumbnails = THUMBNAILS;
  vm.productLimit = 2;
}