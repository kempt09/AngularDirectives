var app = angular.module('myApp');

app.config(['$routeProvider', function($routeProvider){

    'use strict';

    $routeProvider
        .when('/', {

            templateUrl: './views/home.html',
            controller: 'homeCtr'

        })
        .when('/gallery', {

            templateUrl: './views/gallery.html',
            controller: 'photoGallery'

        })
        .otherwise({

            redirectTo: '/'

        });

}]);