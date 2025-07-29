
app.controller('questionsController', function ($scope, questionService) {
    console.log('QuestionsController loaded');

    $scope.questions = questionService.getAllQA();
    $scope.visibleAnswers = {};

    $scope.sections = [
        { label: 'Array and Data Manipulation', range: [1, 10] },
        { label: 'Forms, Validation & Input', range: [11, 15] },
        { label: 'Filters, Directives & ng-repeat', range: [16, 20] }
    ];

    $scope.customRange = function (range) {
        return function (item) {
            return item.id >= range[0] && item.id <= range[1];
        };
    };

    $scope.toggleAnswer = function (id) {
        $scope.visibleAnswers[id] = !$scope.visibleAnswers[id];
    };

    $scope.isAnswerVisible = function (id) {
        return $scope.visibleAnswers[id];
    };

})