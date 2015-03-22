ccisApp.directive('copyrightDate', [function() {
    function link(scope, element, attrs) {
        element.text(new Date().getFullYear());
    }
    return {
        link: link
    };
}]);