import template from './header.tpl.html';

const headerTpl = () => {
  return {
    restrict: 'E',
    template: template
  }
};

export default headerTpl;