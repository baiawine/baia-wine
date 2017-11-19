import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularTranslate from 'angular-translate';
import duScroll from 'angular-scroll';
import animate from 'angular-animate';

import { THUMBNAILS } from './constants/thumbnails.constant';
import { LANGUAGES } from './constants/languages.constant';
import MainController from './controllers/main.controller';
import attachLang from './directives/language-attach.directive';
import navigation from './partials/navigation/navigation.component';
import headerTpl from './partials/header/header.directive';
import wine from './partials/wine/wine.component';
import map from './partials/map/map.component';
import social from './partials/social/social.component';
import contact from './partials/contact/contact.component';
import scroller from './partials/scroller/scroller.component';
import config from './app.config';
import '../style/main.scss';

function importAll(r) {
  return r.keys().map(r);
}

/**
 * Import all images for webpack loaders to process
 */
importAll(require.context('../assets/img', false, /\.(png|jpg|jpe?g|gif|svg)$/));
/**
 * Import all fonts for webpack loaders to process
 */
importAll(require.context('../assets/fonts', false, /\.(woff|woff2|ttf|eot|otf)$/));

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uiRouter, angularTranslate, duScroll, animate])
  .config(config)
  .constant('THUMBNAILS', THUMBNAILS)
  .constant('LANGUAGES', LANGUAGES)
  .controller('MainCtrl', MainController)
  .component('navigation', navigation)
  .directive('attachLang', attachLang)
  .directive('headerTemplate', headerTpl)
  .component('wine', wine)
  .component('map', map)
  .component('social', social)
  .component('contact', contact)
  .component('scroller', scroller);

export default MODULE_NAME;
