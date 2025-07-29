
app.factory('questionService', function () {

  var qa = [
    {
      id: 1,
      question: "Display top 3 students based on marks from a $scope.students array.",
      answer: `
$scope.topStudents = $scope.students
  .sort((a, b) => b.marks - a.marks)
  .slice(0, 3);
    `
    },
    {
      id: 2,
      question: "Filter and display students whose age is above 21.",
      answer: `
$scope.filteredStudents = $scope.students.filter(student => student.age > 21);
    `
    },
    {
      id: 3,
      question: "Count the number of students who scored above 90.",
      answer: `
$scope.highScorersCount = $scope.students.filter(student => student.marks > 90).length;
    `
    },
    {
      id: 4,
      question: "Group students by age and display them using ng-repeat.",
      answer: `
$scope.groupedByAge = {};
$scope.students.forEach(student => {
  if (!$scope.groupedByAge[student.age]) {
    $scope.groupedByAge[student.age] = [];
  }
  $scope.groupedByAge[student.age].push(student);
});
    `
    },
    {
      id: 5,
      question: "Calculate and display the average marks of all students.",
      answer: `
var total = $scope.students.reduce((sum, s) => sum + s.marks, 0);
$scope.averageMarks = total / $scope.students.length;
    `
    },
    {
      id: 6,
      question: "Display names of students who have the lowest 3 marks.",
      answer: `
$scope.lowestStudents = $scope.students
  .sort((a, b) => a.marks - b.marks)
  .slice(0, 3);
    `
    },
    {
      id: 7,
      question: "Sort students alphabetically by their name and display.",
      answer: `
$scope.sortedByName = $scope.students.sort((a, b) => a.Name.localeCompare(b.Name));
    `
    },
    {
      id: 8,
      question: "Find and display the student with the maximum marks.",
      answer: `
$scope.topper = $scope.students.reduce((top, s) => s.marks > top.marks ? s : top);
    `
    },
    {
      id: 9,
      question: "Find and display duplicate student names if present.",
      answer: `
var nameCount = {};
$scope.students.forEach(s => nameCount[s.Name] = (nameCount[s.Name] || 0) + 1);
$scope.duplicates = Object.keys(nameCount).filter(name => nameCount[name] > 1);
    `
    },
    {
      id: 10,
      question: "Display students whose name starts with 'V'.",
      answer: `
$scope.nameV = $scope.students.filter(s => s.Name.startsWith('V'));
    `
    },
    {
      id: 11,
      question: "Create a student form with fields: Name, Age, Marks, and validate that marks are between 0–100.",
      answer: `
<form name=\"studentForm\" ng-submit=\"addStudent()\">
  <input type=\"text\" ng-model=\"newStudent.Name\" required />
  <input type=\"number\" ng-model=\"newStudent.Age\" required />
  <input type=\"number\" ng-model=\"newStudent.Marks\" min=\"0\" max=\"100\" required />
  <button type=\"submit\">Add Student</button>
</form>
    `
    },
    {
      id: 12,
      question: "Add a new student to the $scope.students array via form and update the list dynamically.",
      answer: `
$scope.addStudent = function() {
  $scope.students.push(angular.copy($scope.newStudent));
  $scope.newStudent = {};
};
    `
    },
    {
      id: 13,
      question: "Create a form that disables the submit button if any input is empty or invalid.",
      answer: `
<button type=\"submit\" ng-disabled=\"studentForm.$invalid\">Submit</button>
    `
    },
    {
      id: 14,
      question: "Highlight the input field in red if the value is invalid using ng-class.",
      answer: `
<input ng-model=\"student.Name\" ng-class=\"{'error': studentForm.name.$invalid && studentForm.name.$touched}\" />
<style>.error { border: 1px solid red; }</style>
    `
    },
    {
      id: 15,
      question: "Make a search box that filters students by name as you type.",
      answer: `
<input type=\"text\" ng-model=\"searchText\" placeholder=\"Search...\" />
<li ng-repeat=\"s in students | filter: { Name: searchText }\">{{s.Name}}</li>
    `
    },
    {
      id: 16,
      question: "Use AngularJS built-in filter to display students sorted by age descending.",
      answer: `
<li ng-repeat=\"s in students | orderBy:'-age'\">{{s.Name}} - {{s.age}}</li>
    `
    },
    {
      id: 17,
      question: "Display the total number of students dynamically using AngularJS expression.",
      answer: `
<p>Total Students: {{students.length}}</p>
    `
    },
    {
      id: 18,
      question: "Show only the first 5 students in the list using a custom filter or limitTo.",
      answer: `
<li ng-repeat=\"s in students | limitTo:5\">{{s.Name}}</li>
    `
    },
    {
      id: 19,
      question: "Use a custom directive to render a student card with name, age, and marks.",
      answer: `
app.directive('studentCard', function() {
  return {
    restrict: 'E',
    scope: { student: '=' },
    template: '<div><h4>{{student.Name}}</h4><p>Age: {{student.age}}</p><p>Marks: {{student.marks}}</p></div>'
  };
});
    `
    },
    {
      id: 20,
      question: "Make a reusable directive that shows the grade (A/B/C) based on marks.",
      answer: `
app.directive('studentGrade', function() {
  return {
    restrict: 'E',
    scope: { marks: '=' },
    template: '<span>Grade: {{ getGrade(marks) }}</span>',
    controller: function($scope) {
      $scope.getGrade = function(marks) {
        return marks >= 90 ? 'A' : marks >= 75 ? 'B' : 'C';
      };
    }
  };
});
    `
    }
  ];


  return {
    getAllQA: function () {
      return qa.map(item => ({
        id: item.id,
        question: item.question,
        answer: item.answer
      }));
    }

  }
});