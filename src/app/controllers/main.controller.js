AppCtrl.$inject = ['$translate', 'THUMBNAILS'];

export default function AppCtrl($translate, THUMBNAILS) {
  let vm = this;

  vm.thumbnails = THUMBNAILS;

  vm.switchLang = (langCode) => {
  	$translate.use(langCode);
  }
}