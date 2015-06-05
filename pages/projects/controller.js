'use strict';

angular.module('projectsPage').controller('ProjectsCtrl', ['$scope', function($scope) {
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
                },
                {
                    name: 'Node Module: tag-cloud',
                    date: 'January 2015 - Present',
                    desc: 'I wrote a node module that can generate the necessary HTML to create tag clouds which have become increasingly popular.  At the time of creation, there were very few other modules, if any, that provide the same functionality and even fewer which provide the same options.  I developed this module after work in order to fulfill a need for a project I was working on during my third Co-op.',
                    url : 'https://github.com/mrodrig/tag-cloud',
                    html: '<img src="https://david-dm.org/mrodrig/tag-cloud.png" style="margin-bottom: 0em; padding-left: 10px;"/><img src="http://img.shields.io/npm/v/tag-cloud.svg" style="margin-bottom: 0em; padding-left: 5px;"/><img src="http://img.shields.io/npm/dm/tag-cloud.svg" style="margin-bottom: 0em; padding-left: 5px;"/>'
                },
                {
                    name: 'Node Module: memo-cache',
                    date: 'March 2015 - Present',
                    desc: 'After hearing and experiencing some of the pain points of the current caching modules for NodeJS, I decided to create my own.  This module combines both caching and memoization into one module, which is surprisingly rare considering memoization relies heavily on a caching implementation.  When programming this, I decided to complete the caching library first, which would allow me to base my memoization functionality off of the caching library that I implemented.  This library also implements a least recently used (LRU) algorithm and allows for multiple \'named\' caches inside the same module.',
                    url : 'https://github.com/mrodrig/memo-cache',
                    html: '<img src="https://david-dm.org/mrodrig/memo-cache.png" style="margin-bottom: 0em; padding-left: 10px;"/><img src="http://img.shields.io/npm/v/memo-cache.svg" style="margin-bottom: 0em; padding-left: 5px;"/><img src="http://img.shields.io/npm/dm/memo-cache.svg" style="margin-bottom: 0em; padding-left: 5px;"/>'
                },
                {
                    name: 'Node Module: doc-path',
                    date: 'April 2015 - Present',
                    desc: 'I abstracted this part of my json-2-csv module out and eventually decided to spin it off as a separate node module since it was something that I found I was re-writing multiple times.',
                    url : 'https://github.com/mrodrig/doc-path',
                    html: '<img src="https://david-dm.org/mrodrig/doc-path.png" style="margin-bottom: 0em; padding-left: 10px;"/><img src="http://img.shields.io/npm/v/doc-path.svg" style="margin-bottom: 0em; padding-left: 5px;"/><img src="http://img.shields.io/npm/dm/doc-path.svg" style="margin-bottom: 0em; padding-left: 5px;"/>'
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
                    name: 'CS3600 - Systems and Networks',
                    date: '2014',
                    desc: 'This is the GitHub repository that my partner and I used to complete the four programming projects for our CS3600 class.',
                    url:  'https://github.com/mrodrig/cs3600'
                },
                {
                    name: 'CS4800 - Algorithms and Data',
                    date: '2014',
                    desc: 'This Programming Assignment basically required us to determine the optimal employees to influence in a company hierarchy such that the overall influence obtained is maximized.  I received a 92/100 on this assignment, while the class average was 76.44/100 and the median was 87/100.',
                    url:  'http://github.com/mrodrig/cs4800'
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
