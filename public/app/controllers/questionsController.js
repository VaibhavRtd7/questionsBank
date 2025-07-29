
app.controller('questionsController', function ($scope, questionService) {
    console.log('QuestionsController loaded');

    $scope.questions = questionService.getQuestions();
    $scope.getAnswer = questionService.getAnswerById;
    $scope.visibleAnswers = {};

    $scope.toggleAnswer = function (id) {
        $scope.visibleAnswers[id] = !$scope.visibleAnswers[id];
    };

    $scope.isAnswerVisible = function (id) {
        return $scope.visibleAnswers[id];
    };

})