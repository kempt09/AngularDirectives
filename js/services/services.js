var app = angular.module('myApp');

app.factory('redditService', ['$http', function($http){

    'use strict';

    return $http({
        method: 'GET',
        url: 'https://www.reddit.com/r/PoliticalVideo.json'
    });

}]);