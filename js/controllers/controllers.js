var app = angular.module('myApp', ['ngRoute']);

app.controller('homeCtr', ['$scope', '$location', function($scope, $location) {

    'use strict';

    $scope.welcome = 'Hello, User!';
    $scope.next = function(){
        $location.path('/gallery');
    };


}]);

app.controller('photoGallery', ['$scope', 'redditService', function($scope, redditService) {

    'use strict';

     $scope.array = [];

    redditService.then(function(response){
        var i,
            picture,
            title,
            link,
            description,
            author;

        for(i = 0; i < 6; i++) {

            picture = response.data.data.children[i].data.thumbnail;
            title = response.data.data.children[i].data.media.oembed.title;
            link = response.data.data.children[i].data.media.oembed.url;
            description = response.data.data.children[i].data.media.oembed.description;
            author = response.data.data.children[i].data.author;

            $scope.array.push({title: title, link: link, picture: picture, description: description, author: author });

        }

    });


}]);



