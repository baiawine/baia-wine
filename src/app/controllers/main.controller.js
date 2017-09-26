AppCtrl.$inject = ['$translate', '$scope', '$document', 'THUMBNAILS', 'LANGUAGES'];

export default function AppCtrl($translate, $scope, $document, THUMBNAILS, LANGUAGES) {
  let vm = this;

  vm.thumbnails = THUMBNAILS;
  vm.languages = LANGUAGES;
  vm.selectLangHover = false;
  vm.currentLang = $translate.use();

  vm.switchLang = (language) => {
  	$translate.use(language.SHORT_CODE)
  	.then(function(shortCode) {
  		vm.currentLang = shortCode;
  		vm.selectLangHover = false;
  		// Put the selected language as the first entry in the language menu
  		vm.languages.unshift(vm.languages.splice(vm.languages.findIndex(lang => lang.SHORT_CODE === shortCode), 1)[0]);
  	});
  }
}