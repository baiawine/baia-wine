import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularTranslate from 'angular-translate';

import MainController from './controllers/main.controller';
import headerTpl from './partials/header/header.directive';
import config from './app.config';
import '../style/main.scss';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uiRouter, angularTranslate])
  .controller('AppCtrl', MainController)
  .directive('headerTemplate', headerTpl)
  .config(config);

export default MODULE_NAME;