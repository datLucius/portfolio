(function() {
  'use strict';
  angular
  .module('portfolio')
  .controller('MainController', function ($scope, $document){
    $(document).scroll(function() {
            if ($(this).scrollTop() <= 400) {
                $("#floating-nav-content").slideUp(400);
            } else {
                $("#floating-nav-content").slideDown(600);
            }

        });
  });
}());
