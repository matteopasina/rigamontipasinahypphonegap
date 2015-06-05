var app=angular.module('RoutingApp', ['ngRoute','ui.bootstrap','smoothScroll']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/www/views/Home.html'
        })
        .when('/CourseHome/', {
            controller: 'CourseHomeController',
            templateUrl: '/www/views/CourseHome.html'
        })
        .when('/course/:id', {
            controller: 'CoursesJoinInstructor',
            templateUrl: '/www/views/Course.html'
        })
        .when('/courseByLevel/', {
            controller: 'CourseLevelController',
            templateUrl: '/www/views/CourseLevel.html'
        })
        .when('/coursesByCategory/', {
            controller: 'CourseByCourseCategoryController',
            templateUrl: '/www/views/CourseLevel.html'
        })
        .when('/instructor/:id', {
            controller: 'InstructorController',
            templateUrl: '/www/views/Instructor.html'
        })
        .when('/Location', {
            templateUrl: '/www/views/Location.html'
        })
        .when('/Categories/', {
            controller: 'CategoriesController',
            templateUrl: '/www/views/Categories.html'
        })
        .when('/form/:id', {
            controller: 'CourseController',
            templateUrl: '/www/views/Form.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
