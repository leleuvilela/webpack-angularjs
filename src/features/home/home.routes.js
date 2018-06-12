routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./home.html'),
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .state('teste', {
      url: '/teste',
      template: require('./home.html'),
      controller: 'HomeController',
      controllerAs: 'home'
    });
}