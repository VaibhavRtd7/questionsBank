
app.factory('questionService', function() {
   
    var qa = [
    { id: 1,
      question: "What is AngularJS?",
      answer:   "AngularJS is a structural framework for dynamic web apps."
    },
    { id: 2,
      question: "What is the difference between a controller and a service?",
      answer:   "A controller handles UI logic, while a service holds reusable business logic."
    },
    { id: 3,
      question: "How do you create a custom directive?",
      answer:   "You can create a custom directive using the `.directive()` method."
    }
  ];

    return {
        getQuestions : function() {
            return qa.map(item => ({ id : item.id, text : item.question}));
        },

        getAnswers : function() {
            return qa.map(item => ({ id : item.id, text : item.answer}));
        },

        getAnswerById : function(id) {
          
          console.log('getANswerById is called');
          
          var found = qa.find(item => item.id === id);
          return found ? found.answer : "Answer not found";
        }
    }
});