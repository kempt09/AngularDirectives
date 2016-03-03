var app = angular.module('myApp');

app.directive('photoView', function(){

    'use strict';

    return {

        templateUrl: './views/partial.html',
        link: function(scope, elem, attr){

            elem.bind('mouseover', function(){

                elem.css('cursor', 'crosshair');

            });


        }

    };

});
