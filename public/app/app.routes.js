
app.config(function($routeProvider) {

    $routeProvider
    .when('/questions', {
        templateUrl : 'app/views/questions.html',
        controller : 'questionsController'
    })
    .when('/answers', {
        templateUrl : 'app/views/answers.html',
        controller : 'answersController'
    })
    .otherwise({
        redirectTo: '/questions'
    });
})