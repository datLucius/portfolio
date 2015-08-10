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
        $scope.showDetail = function () {
          $(".detailTxt").toggleClass('hideThis');
          $(".hiphop").toggleClass('hideThis');
        }
        $scope.hideDetail = function () {
          $(".detailTxt").toggleClass('hideThis');
          $(".hiphop").toggleClass('hideThis');
        }
        $scope.showIKDetail = function () {
          $(".imKDetail").removeClass('hideThis');
          $(".hiphop").toggleClass('hideThis');
        }
        $scope.hideIKDetail = function () {
          $(".imKDetail").toggleClass('hideThis');
          $(".hiphop").toggleClass('hideThis');
        }
        $scope.showBDDetail = function () {
          $(".bigDDetail").removeClass('hideThis');
        }
        $scope.hideBDDetail = function () {
          $(".bigDDetail").addClass('hideThis');
        }
        $scope.showdatArtDetail = function () {
          $(".datArtDetail").removeClass('hideThis');
        }
        $scope.hidedatArtDetail = function () {
          $(".datArtDetail").addClass('hideThis');
        }
  });
}());
