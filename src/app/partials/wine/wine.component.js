import template from './wine.tpl.html';

function WineBox() {

}

const WineComponent = {
  bindings: {
    name: '<',
    imgName: '<',
    description: '<',
    isLeft: '<',
  },
  template: template,
  controller: WineBox,
  controllerAs: 'wine',
};

export default WineComponent;
