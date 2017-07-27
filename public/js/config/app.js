var agularTest = angular.module('agularTest', ['ngMaterial', 'ngAnimate', 'ngMessages', 'ngAria', 'ui.router']);

(function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'partials/home-partial.html',
            controller: 'HomeController'
        })
            
            .state('emailsearch', {
                url: '/es',
                templateUrl: 'partials/Email-search.html',
                controller: 'HomeController'
            })

        
        ;
    }]);
})(agularTest);
