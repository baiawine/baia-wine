import template from './wine.tpl.html';

const WineComponent = {
  	bindings: {
  		name: '<',
  		imgSrc: '<',
  		description: '<',
  		isLeft: '<'
  	},
    template: template,
    controller: WineBox,
    controllerAs: 'wine'
};

function WineBox() {
	
}

export default WineComponent;