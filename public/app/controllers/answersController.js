
app.controller('answersController', function ($scope, questionService) {

    console.log("Answers Controller Loaded");

    $scope.questions = questionService.getQuestions();
    $scope.answers = questionService.getAnswers();

    $scope.answers = [
        { id: 1, answer: "AngularJS is a structural framework for dynamic web apps." },
        { id: 2, answer: "A controller handles UI logic, while a service holds reusable business logic." },
        { id: 3, answer: "You can create a custom directive using the `.directive()` method." }
    ];

    $scope.getQuestionText = function (id) {

        console.log(id);

        var q = $scope.questions.find(q => q.id === id);

        return q ? q.text : "Question not found !!";
    }
})