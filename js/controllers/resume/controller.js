'use strict';

angular.module('resumePage').controller('ResumePageController', ['$scope', function($scope) {
    $scope.certificates = [
        {
            name: 'Cyber Aces Online Training Program (Fall 2013)',
            description: '3rd in Rhode Island, Top 14% overall',
            attachment: 'attachments/certificates/CyberAces13.pdf'
        },
        {
            name: '10gen MongoDB M101J Completion Certificate',
            description: 'MongoDB for Java Developers',
            attachment: 'attachments/certificates/M101J.pdf'
        },
        {
            name: '10gen MongoDB M101JS Completion Certificate',
            description: 'MongoDB for Node.JS Developers',
            attachment: 'attachments/certificates/M101JS.pdf'
        }
    ];
}]);
