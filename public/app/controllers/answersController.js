
app.controller('answersController', function ($scope, questionService) {

    console.log("Answers Controller Loaded");
    $scope.qaList = questionService.getAllQA();

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

})