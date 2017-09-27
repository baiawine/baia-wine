import template from './navigation.tpl.html';

const NavComponent = {
  	bindings: {
  	},
    template: template,
    controller: NavController,
    controllerAs: 'nav'
};

NavController.$inject = ['$translate', 'LANGUAGES'];

function NavController($translate, LANGUAGES) {
	let vm = this;

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

export default NavComponent;