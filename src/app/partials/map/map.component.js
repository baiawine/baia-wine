import template from './map.tpl.html';

const MapComponent = {
  	bindings: {
  	},
    template: template,
    controller: MapController,
    controllerAs: 'map'
};

function MapController() {
	let vm = this;

	vm.directionToggle = false;
}

export default MapComponent;