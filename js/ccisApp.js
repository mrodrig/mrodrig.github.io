(function () {
    'use strict';

    /**
     * Configuration Function for Main App Module
     * @ngInject
     */
    function Config($routeProvider, $locationProvider, $httpProvider) {

        //gets rid of the # in urls
        $locationProvider.html5Mode(true);

        //Disable all caching for HTTP get requests
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }

        //TODO: See if we can remove this
        //disable IE ajax request caching
        $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';

        //The routes that our angular app will handle
        $routeProvider
            .when('/', {templateUrl: 'pages/home/homePage.html', controller: 'HomePageController', controllerAs: 'pageCtrl', caseInsensitiveMatch: true })
            .when('/home', {templateUrl: 'pages/home/homePage.html', controller: 'HomePageController', controllerAs: 'pageCtrl', caseInsensitiveMatch: true })
            .when('/resume', {templateUrl: 'pages/resume/resumePage.html', controller: 'ResumePageController', controllerAs: 'pageCtrl', caseInsensitiveMatch: true })
            .when('/projects', {templateUrl: 'pages/projects/projectsPage.html', controller: 'ProjectsPageController', controllerAs: 'pageCtrl', caseInsensitiveMatch: true })
            .when('/interests', {templateUrl: 'pages/interests/interestsPage.html', controller: 'InterestsPageController', controllerAs: 'pageCtrl', caseInsensitiveMatch: true })
            .when('/contact', {templateUrl: 'pages/contact/contactPage.html', controller: 'ContactPageController', controllerAs: 'pageCtrl', caseInsensitiveMatch: true })
            .when('/notfound', { templateUrl: 'partials/404.html'})
            .otherwise({redirectTo: '/notfound'});
    }

    //declare app level module and hook in config and run blocks
    angular.module('ccisApp', ['ngRoute', 'homePage', 'resumePage', 'projectsPage', 'interestsPage', 'contactPage'])
        .config(Config);

})();