ccisApp.controller('ProjectsCtrl', ['$scope', function($scope) {
    $scope.projects = [
        {
            index: 'Current',
            desc:  'Some of the current projects that I am working on include the following:',
            list:  [
                {
                    name: 'Signature Limousine Company Website (Desktop & Mobile) and Linux System Administration',
                    date: 'January 2014 - Present',
                    url : 'http://signaturelimocompany.com'

                },
                {
                    name: 'Node Module: json-2-csv',
                    date: 'April 2014 - Present',
                    desc: 'I wrote a node module that can convert JSON documents into CSV as well as CSV back to an array of JSON documents. I was inspired to write this due to a project requirement at MITRE that I could not find a good solution for. One of the key features that we needed was to be able to convert JSON documents that had nested documents. Existing modules did not support that functionality, and I wanted to avoid changing our data schema. In my spare time, I developed this module which allows us to easily convert our existing schema into a nicely formatted CSV output. I am hoping to continue to add more functionality to this module and possibly create additional node modules in the future.',
                    url : 'https://github.com/mrodrig/json-2-csv',
                    html: '<img src="https://david-dm.org/mrodrig/json-2-csv.png" style="margin-bottom: 0em; padding-left: 10px;"/><img src="http://img.shields.io/npm/v/json-2-csv.svg" style="margin-bottom: 0em; padding-left: 5px;"/><img src="http://img.shields.io/npm/dm/json-2-csv.svg" style="margin-bottom: 0em; padding-left: 5px;"/>'
                }
            ]
        },
        {
            index: 'Completed',
            desc:  'Projects that I have completed include the following:',
            list:  [
                {
                    name: 'IS3500 - Information System Design and Development',
                    date: '2014',
                    desc: 'I was the Project Manager of a group of myself and two other students in the class. We performed as Business Analysts, elicited requirements, determined use cases, and ultimately created a complete System Requirement Specification. At the end of the project, we were under budget for both analysis costs and for the actual project implementation with a large annual and lifetime return on the investment.',
                    url:  'http://is3500termproject.wiki.zoho.com'
                },
                {
                    name: 'IS4300 - Human-Computer Interaction',
                    date: '2013',
                    desc: 'Human-Computer Interaction Course Assignments and Projects',
                    url:  'attachments/projects/IS4300'
                },
                {
                    name: 'Frogger as a Java Applet',
                    date: '2012',
                    desc: 'Fundamentals of Computer Science II Final Project',
                    url:  'attachments/projects/Frogger/FroggerApplet.html'
                },
                {
                    name: 'Java Class Maker in Racket',
                    date: '2012',
                    desc: '.rkt File - No Documentation',
                    url:  'attachments/projects/classmaker.rkt'
                },
                {
                    name: 'PyFactor (A memoized Python factoring program)',
                    date: '2012-2013',
                    desc: 'A Python script that memoizes numbers as you factor them so that subsequent computations will be faster.',
                    url:  'attachments/projects/PyFactor'
                },
                {
                    name: 'MFactor',
                    date: '2012',
                    desc: 'A Java Factoring Program. (Not Memoized)',
                    url:  'attachments/projects/MFactor.java'
                },
                {
                    name: 'Falling Apples Game in Java',
                    date: '2012',
                    desc: 'This was a homework assignment for my Fundamentals of Computer Science II class. (Documentation Included)',
                    url:  'attachments/projects/AppleGame.zip'
                }
            ]
        }
    ];
}]);
