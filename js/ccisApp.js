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

        //disable IE ajax request caching
        $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';

        //The routes that our angular app will handle
        $routeProvider
            .when('/', {templateUrl: 'partials/pages/homePage.html', controller: 'HomePageController', controllerAs: 'pageCtrl', caseInsensitiveMatch: true })
            .when('/index.html', {templateUrl: 'partials/pages/homePage.html', controller: 'HomePageController', controllerAs: 'pageCtrl', caseInsensitiveMatch: true})
            .when('/courses.html', {templateUrl: 'partials/pages/coursesPage.html', controller: 'CoursesPageController', controllerAs: 'pageCtrl', caseInsensitiveMatch: true})
            .when('/resume.html', {templateUrl: 'partials/pages/resumePage.html', controller: 'ResumePageController', controllerAs: 'pageCtrl', caseInsensitiveMatch: true })
            .when('/projects.html', {templateUrl: 'partials/pages/projectsPage.html', controller: 'ProjectsPageController', controllerAs: 'pageCtrl', caseInsensitiveMatch: true })
            .when('/photography.html', {templateUrl: 'partials/pages/photographyPage.html', controller: 'PhotographyPageController', controllerAs: 'pageCtrl', caseInsensitiveMatch: true})
            .when('/about.html', {templateUrl: 'partials/pages/aboutPage.html', controller: 'AboutPageController', controllerAs: 'pageCtrl', caseInsensitiveMatch: true })
            .when('/contact.html', {templateUrl: 'partials/pages/contactPage.html', controller: 'ContactPageController', controllerAs: 'pageCtrl', caseInsensitiveMatch: true })
            .when('/notfound.html', { templateUrl: 'partials/404.html'})
            .otherwise({redirectTo: '/notfound.html'});
    }
    
    //declare app level module and hook in config and run blocks
    angular.module('ccisApp', ['ngRoute', 'ui.grid', 'homePage', 'coursesPage', 'resumePage', 'projectsPage', 'photographyPage', 'aboutPage', 'contactPage'])
        .config(Config);

})();
