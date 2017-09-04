import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularTranslate from 'angular-translate';

import {THUMBNAILS} from './constants/thumbnails.constant';
import MainController from './controllers/main.controller';
import attachLang from './directives/language-attach.directive';
import headerTpl from './partials/header/header.directive';
import wine from './partials/wine/wine.component';
import map from './partials/map/map.component';
import config from './app.config';
import '../style/main.scss';

function importAll(r) {
  return r.keys().map(r);
}

/**
 * Import all images for webpack loaders to process
 */
importAll(require.context('../public/img', false, /\.(png|jpg|jpe?g|gif|svg)$/));
/**
 * Import all fonts for webpack loaders to process
 */
importAll(require.context('../public/fonts', false, /\.(woff|woff2|ttf|eot|otf)$/));

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uiRouter, angularTranslate])
  .config(config)
  .constant('THUMBNAILS', THUMBNAILS)
  .controller('AppCtrl', MainController)
  .directive('attachLang', attachLang)
  .directive('headerTemplate', headerTpl)
  .component('wine', wine)
  .component('map', map);

export default MODULE_NAME;