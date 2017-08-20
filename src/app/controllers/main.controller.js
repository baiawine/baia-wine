AppCtrl.$inject = ['$translate', '$rootScope'];

export default function AppCtrl($translate, $rootScope) {
  let vm = this;

  // Set language code
  vm.language = $translate.use();

  vm.switchLang = (langCode) => {
  	$translate.use(langCode);
  }

  $rootScope.$on("$translateChangeSuccess", () => {
  	vm.language = $translate.use();
  });
}