AppCtrl.$inject = ['$translate'];

export default function AppCtrl($translate) {
  let vm = this;

  vm.switchLang = (langCode) => {
  	$translate.use(langCode);
  }
}