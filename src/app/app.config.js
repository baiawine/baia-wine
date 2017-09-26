config.$inject = ['$stateProvider', '$translateProvider'];


import { default as strings } from './strings/strings'

export default function config($stateProvider, $translateProvider) {
  $stateProvider
    .state('home', {
      url: '',
      template: require('./app.html'),
      controller: 'MainCtrl',
      controllerAs: 'main'
    });

  $translateProvider
    .translations('en', strings.EN)
    .translations('ge', strings.GE)
    .translations('ru', strings.RU)
    .preferredLanguage('en');
}