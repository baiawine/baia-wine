import templateUrl from 'ngtemplate-loader!./header.tpl.html';

const headerTpl = () => {
  return {
    restrict: 'E',
    templateUrl: templateUrl
  }
};

export default headerTpl;