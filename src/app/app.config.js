config.$inject = ['$stateProvider', '$translateProvider'];


import { default as strings } from './strings/strings'

export default function config($stateProvider, $translateProvider) {
  $stateProvider
    .state('home', {
      url: '',
      template: require('./app.html'),
      controller: 'AppCtrl',
      controllerAs: 'app'
    });

  $translateProvider
    .translations('en', strings.EN)
    .translations('zz', strings.ZZ)
    .preferredLanguage('en');
}