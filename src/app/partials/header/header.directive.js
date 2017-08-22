import template from './header.tpl.html';

const headerTpl = () => {
  return {
    restrict: 'A',
    template: template
  }
};

export default headerTpl;