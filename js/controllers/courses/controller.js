'use strict';

angular.module('coursesPage').controller('CoursesPageController', ['$scope', function($scope) {
    $scope.courses = [
        {subject: 'CS', level: 1200, code: 'CS1200', courseName: 'CS/IS Overview 1', creditHours: 1, semesterTaken: 'Fall 2011', degreeLevel: 'B.S.'},
        {subject: 'CS', level: 1800, code: 'CS1800', courseName: 'Discrete Structures', creditHours: 4, semesterTaken: 'Fall 2011', degreeLevel: 'B.S.'},
        {subject: 'CS', level: 2500, code: 'CS2500', courseName: 'Fundamentals of Computer Science 1', creditHours: 4, semesterTaken: 'Fall 2011', degreeLevel: 'B.S.'},
        {subject: 'CS', level: 2501, code: 'CS2501', courseName: 'Lab for CS2500', creditHours: 1, semesterTaken: 'Fall 2011', degreeLevel: 'B.S.'},
        {subject: 'ENGL', level: 1111, code: 'ENGL1111', courseName: 'College Writing', creditHours: 4, semesterTaken: 'Fall 2011', degreeLevel: 'B.S.'},
        {subject: 'PSYC', level: 1101, code: 'PSYC1101', courseName: 'Foundations of Psychology', creditHours: 4, semesterTaken: 'Fall 2011', degreeLevel: 'B.S.'},
        {subject: 'CINE', level: 1230, code: 'CINE1230', courseName: 'American Film and Culture', creditHours: 4, semesterTaken: 'Spring 2012', degreeLevel: 'B.S.'},
        {subject: 'CS', level: 1210, code: 'CS1210', courseName: 'CS/IS Overview 2: Co-op Prep', creditHours: 1, semesterTaken: 'Spring 2012', degreeLevel: 'B.S.'},
        {subject: 'CS', level: 2510, code: 'CS2510', courseName: 'Fundamentals of Computer Science 2', creditHours: 4, semesterTaken: 'Spring 2012', degreeLevel: 'B.S.'},
        {subject: 'CS', level: 2511, code: 'CS2511', courseName: 'Lab for CS2510', creditHours: 1, semesterTaken: 'Spring 2012', degreeLevel: 'B.S.'},
        {subject: 'CS', level: 2800, code: 'CS2800', courseName: 'Logic and Computation', creditHours: 4, semesterTaken: 'Spring 2012', degreeLevel: 'B.S.'},
        {subject: 'CS', level: 2801, code: 'CS2801', courseName: 'Lab for CS2800', creditHours: 1, semesterTaken: 'Spring 2012', degreeLevel: 'B.S.'},
        {subject: 'ECON', level: 1116, code: 'ECON1116', courseName: 'Principles of Microeconomics', creditHours: 4, semesterTaken: 'Spring 2012', degreeLevel: 'B.S.'},
        {subject: 'CS', level: 2600, code: 'CS2600', courseName: 'Computer Organization', creditHours: 4, semesterTaken: 'Fall 2012', degreeLevel: 'B.S.'},
        {subject: 'CS', level: 3500, code: 'CS3500', courseName: 'Object-Oriented Design', creditHours: 4, semesterTaken: 'Fall 2012', degreeLevel: 'B.S.'},
        {subject: 'ECON', level: 2350, code: 'ECON2350', courseName: 'Statistics', creditHours: 4, semesterTaken: 'Fall 2012', degreeLevel: 'B.S.'},
        {subject: 'IS', level: 2000, code: 'IS2000', courseName: 'Principles of Information Science', creditHours: 4, semesterTaken: 'Fall 2012', degreeLevel: 'B.S.'},
        {subject: 'CS', level: 3200, code: 'CS3200', courseName: 'Database Design', creditHours: 4, semesterTaken: 'Fall 2013', degreeLevel: 'B.S.'},
        {subject: 'CS', level: 3800, code: 'CS3800', courseName: 'Theory of Computation', creditHours: 4, semesterTaken: 'Fall 2013', degreeLevel: 'B.S.'},
        {subject: 'IS', level: 1500, code: 'IS1500', courseName: 'Introduction to Web Development', creditHours: 4, semesterTaken: 'Fall 2013', degreeLevel: 'B.S.'},
        {subject: 'IS', level: 4300, code: 'IS4300', courseName: 'Human Computer Interaction', creditHours: 4, semesterTaken: 'Fall 2013', degreeLevel: 'B.S.'},
        {subject: 'MATH', level: 2331, code: 'MATH2331', courseName: 'Linear Algebra', creditHours: 4, semesterTaken: 'Summer 2 2014', degreeLevel: 'B.S.'},
        {subject: 'ORGB', level: 3201, code: 'ORGB3201', courseName: 'Organizational Behavior', creditHours: 4, semesterTaken: 'Summer 2 2014', degreeLevel: 'B.S.'},
        {subject: 'COMM', level: 2303, code: 'COMM2303', courseName: 'Global and Intercultural Communication', creditHours: 4, semesterTaken: 'Fall 2014', degreeLevel: 'B.S.'},
        {subject: 'CS', level: 3600, code: 'CS3600', courseName: 'Systems and Networks', creditHours: 4, semesterTaken: 'Fall 2014', degreeLevel: 'B.S.'},
        {subject: 'CS', level: 4800, code: 'CS4800', courseName: 'Algorithms and Data', creditHours: 4, semesterTaken: 'Fall 2014', degreeLevel: 'B.S.'},
        {subject: 'IS', level: 3500, code: 'IS3500', courseName: 'Information System Design and Development', creditHours: 4, semesterTaken: 'Fall 2014', degreeLevel: 'B.S.'},
        {subject: 'ENGW', level: 3302, code: 'ENGW3302', courseName: 'Advanced Writing in the Technical Professions', creditHours: 4, semesterTaken: 'Summer 2 2015', degreeLevel: 'B.S.'},
        {subject: 'ENVR', level: 1101, code: 'ENVR1101', courseName: 'Environmental Science', creditHours: 4, semesterTaken: 'Summer 2 2015', degreeLevel: 'B.S.'},
        {subject: 'CRIM', level: 1100, code: 'CRIM 1100', courseName: 'Introduction to Criminal Justice', creditHours: 4, semesterTaken: 'Fall 2015', degreeLevel: 'B.S.'},
        {subject: 'CS', level: 4400, code: 'CS4400', courseName: 'Programming Languages', creditHours: 4, semesterTaken: 'Fall 2015', degreeLevel: 'B.S.'},
        {subject: 'MISM', level: 3305, code: 'MISM3305', courseName: 'Information Resource Management', creditHours: 4, semesterTaken: 'Fall 2015', degreeLevel: 'B.S.'},
        {subject: 'SOCL', level: 4528, code: 'SOCL4528', courseName: 'Computers and Society', creditHours: 4, semesterTaken: 'Fall 2015', degreeLevel: 'B.S.'},
        {subject: 'CS', level: 4500, code: 'CS4500', courseName: 'Software Development', creditHours: 4, semesterTaken: 'Spring 2016', degreeLevel: 'B.S.'},
        {subject: 'IS', level: 4800, code: 'IS4800', courseName: 'Empirical Research Methods', creditHours: 4, semesterTaken: 'Spring 2016', degreeLevel: 'B.S.'},
        {subject: 'IS', level: 4900, code: 'IS4900', courseName: 'Information Science Senior Project', creditHours: 5, semesterTaken: 'Spring 2016', degreeLevel: 'B.S.'},
        {subject: 'IA', level: 5010, code: 'IA5010', coursename: 'Foundations of Information Assurance', creditHours: 4, semesterTaken: 'Fall 2016', degreeLevel: 'M.S.'},
        {subject: 'IA', level: 5150, code: 'IA5150', coursename: 'Network Security Practices', creditHours: 4, semesterTaken: 'Fall 2016', degreeLevel: 'M.S.'},
        {subject: 'IA', level: 5150, code: 'IA5151', coursename: 'Lab for Network Security Practices', creditHours: 0, semesterTaken: 'Fall 2016', degreeLevel: 'M.S.'},
        {subject: 'IA', level: 5130, code: 'IA5130', coursename: 'Computer System Security', creditHours: 4, semesterTaken: 'Spring 2017', degreeLevel: 'M.S.'},
        {subject: 'IA', level: 5131, code: 'IA5131', coursename: 'Lab for Computer System Security', creditHours: 0, semesterTaken: 'Spring 2017', degreeLevel: 'M.S.'},
        {subject: 'IA', level: 5210, code: 'IA5210', coursename: 'Information System Forensics', creditHours: 4, semesterTaken: 'Spring 2017', degreeLevel: 'M.S.'},
        {subject: 'IA', level: 5211, code: 'IA5211', coursename: 'Lab for Information System Forensics', creditHours: 0, semesterTaken: 'Spring 2017', degreeLevel: 'M.S.'}
    ];
    
    $scope.gridOptions = {
        enableSorting: false,
        enableColumnMenus: false,
        enableFiltering: true,
        data: 'courses',
        columnDefs: [
            {field: 'subject', displayName: 'Subject', width: '9.0%'},
            {field: 'level', displayName: 'Level', width: '7.2%'},
            {field: 'code', displayName: 'Code', width: '10.4%'},
            {field: 'degreeLevel', displayName: 'Degree', width: '7.2%'},
            {field: 'courseName', displayName: 'Course Name', width: '40.7%'},
            {field: 'creditHours', displayName: 'Credits', width: '8.3%'},
            {field: 'semesterTaken', displayName: 'Semester', width: '19.5%'}
        ],
        autoResize: true
    };
}]);