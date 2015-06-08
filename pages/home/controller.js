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
            html: '<a title="Northeastern University" href="http://www.northeastern.edu"><img src="images/neu.jpg" alt="Northeastern Husky Logo"/></a>'
        },
        {
            html: '<a title="Northeastern University College of Computer and Information Science" href="http://ccs.neu.edu"><img src="images/ccis.jpg" alt="Northeastern CCIS Logo"/></a>'
        },
        {
            html: '<object data="http://rk.revolvermaps.com/f/m.swf" type="application/x-shockwave-flash" width="118" height="118"><param name="movie" value="http://rk.revolvermaps.com/f/m.swf"><param name="allowNetworking" value="all"><param name="allowScriptAccess" value="always"><param name="wmode" value="window"><param name="flashvars" value="m=0&amp;i=aingywkh3b8&amp;c=ff0000&amp;s=118"></object>'
        }
    ];
}]);