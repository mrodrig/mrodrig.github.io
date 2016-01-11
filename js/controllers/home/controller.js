'use strict';

angular.module('homePage').controller('HomePageController', ['$scope', function($scope) {
    $scope.graduation = {
        date: new Date('5/1/2016')
    };

    $scope.courses = [
        'Systems and Networks',
        'Algorithms and Data',
        'Information System Design and Development',
        'Object-Oriented Design',
        'Computer Organization',
        'Database Design',
        'Human-Computer Interaction',
        'Discrete Structures',
        'Logic and Computation',
        'Theory of Computation',
        'Introduction to Web Development'
    ];

    $scope.positions = [
        {
            index:    'First',
            title:    'System Integration Engineer Co-op',
            url:      'http://emc.com',
            company:  'EMC Corporation',
            location: 'Franklin, MA'
        },
        {
            index:    'Second',
            title:    'Java Web Applications Developer Co-op',
            url:      'http://mitre.org',
            company:  'MITRE Corporation',
            location: 'Bedford, MA'
        },
        {
            index:    'Third',
            title:    'Java Web Applications Developer Co-op',
            url:      'http://mitre.org',
            company:  'MITRE Corporation',
            location: 'Bedford, MA'
        }
    ];

    $scope.linkList = [
        {
            html: '<a title="GitHub" href="http://github.com/mrodrig"><img src="images/github.png" alt="GitHub Logo" height="132" width="132"/></a>'
        },
        {
            html: '<a title="LinkedIn" href="https://www.linkedin.com/in/rodriguesmichael"><img src="images/linkedin.png" alt="LinkedIn Logo" height="118" width="118"/></a>'
        },
        {
            html: '<a title="Northeastern University" href="http://www.northeastern.edu"><img src="images/neu.jpg" alt="Northeastern Husky Logo"/></a>'
        },
        {
            html: '<a title="Northeastern University College of Computer and Information Science" href="http://ccs.neu.edu"><img src="images/ccis.jpg" alt="Northeastern CCIS Logo"/></a>'
        }
    ];
}]);
