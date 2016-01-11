'use strict';

angular.module('photographyPage').controller('PhotographyPageController', ['$scope', function($scope) {
    $scope.socialMediaPages = [
        {
            name: 'Flickr Page',
            url:  'https://www.flickr.com/photos/hotrodzphotography'
        },
        {
            name: 'Facebook Page',
            url:  'http://facebook.com/HotRodzPhotography'
        },
        {
            name: 'Instagram Page',
            url:  'http://instagram.com/HotRodzPhotography'
        }
    ];
    
    $scope.equipment = [
        {value: 'DSLR', bold: true},
        {value: 'Camera: Canon EOS Rebel T5i', bold: false},
        {value: 'Canon 18-55mm Lens (& Canon Lens Hood)', bold: false},
        {value: 'Canon 50mm/1.4 Lens (& Canon Lens Hood)', bold: false},
        {value: 'Canon 75-300mm Lens', bold: false},
        {value: 'B+W UV Filter', bold: false},
        {value: 'B+W F-Pro Kaesemann High Transmission Circular Polarizer Filter', bold: false},
        {value: 'Lens Pen', bold: false},
        {value: 'Action Camera', bold: true},
        {value: 'Sony AS200V Action Camera with integrated GPS', bold: false},
        {value: 'Sony Proforma Suction Cup Mount', bold: false},
        {value: 'GoPro Hero 4 Silver', bold: false},
        {value: 'GoPro Suction Cup Mount', bold: false},
        {value: 'GoPro "The Frame" and Lens Protector', bold: false},
        {value: 'Editing Software', bold: true},
        {value: 'Adobe Photoshop Lightroom 6', bold: false},
        {value: 'GIMP', bold: false},
        {value: 'Sony Action Cam Movie Creator', bold: false}
    ];
}]);