// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'homeController'
        })

        .when('/page1', {
            templateUrl : 'pages/page1.html',
            controller  : 'pageOneController'
        })

        // route for the about page
        .when('/page2', {
            templateUrl : 'pages/page2.html',
            controller  : 'pageTwoController'
        })

        // route for the contact page
        .when('/page3', {
            templateUrl : 'pages/page3.html',
            controller  : 'pageThreeController'
        })
        .when('/page4', {
            templateUrl: 'pages/page4.html',
            controller : 'pageFourController'
        })
        .when('/page5', {
            templateUrl: 'pages/page5.html',
            controller : 'pageFiveController'
        })
        .when('/page6', {
            templateUrl: 'pages/page6.html',
            controller : 'pageSixController'
        })
        .when('/page7', {
            templateUrl: 'pages/page7.html',
            controller : 'pageSevenController'
        })
});

scotchApp.controller('homeController', function($scope) {
    // create a message to display in our view
    $scope.h1 = 'This is home page';
    $scope.message = 'Everyone come and see how good I look!';
    $scope.connect = 'Connect with us';
    $scope.bannerone = 'Banner One Headline';
    $scope.bannertwo = 'Banner Two Headline';
});

scotchApp.controller('pageOneController', function($scope) {
    // create a message to display in our view
    $scope.h1 = 'This is page one';        
    $scope.message = 'Everyone come and see how good I look!';
});

scotchApp.controller('pageTwoController', function($scope) {
    $scope.h1 = 'This is page two';
    $scope.message = 'Look! I am an about page.';
});

scotchApp.controller('pageThreeController', function($scope) {
    $scope.h1 = 'This is page three';        
    $scope.message = 'Contact us! JK. This is just a demo.';
});

scotchApp.controller('pageFourController', function($scope) {
    $scope.h1 = 'This is page four';
    $scope.message = 'This is Page Four';
});

scotchApp.controller('pageFiveController', function($scope) {
    $scope.h1 = 'This is page five';
    $scope.message = 'This is Page Five';
});

scotchApp.controller('pageSixController', function($scope) {
    $scope.h1 = 'This is page six';
    $scope.message = 'This is Page Six';
});

scotchApp.controller('pageSevenController', function($scope) {
    $scope.h1 = 'This is page seven';
    $scope.message = 'This is Page Seven';
});

scotchApp.controller('FooterController', function($scope) {
    $scope.img = 'img/raleighco-logo.png';
    $scope.email = 'info@blank.com';
    $scope.phone = '(503) 502-6125';
    $scope.twitter = '@RobertGRaleigh';
    $scope.linkedin = 'RobertRaleigh';
    $scope.facebook = 'RobertRaleigh';
});