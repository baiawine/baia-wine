import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularTranslate from 'angular-translate';

import MainController from './controllers/main.controller'
import config from './app.config'
import '../style/main.scss';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uiRouter, angularTranslate])
  .controller('AppCtrl', MainController)
  .config(config);

export default MODULE_NAME;