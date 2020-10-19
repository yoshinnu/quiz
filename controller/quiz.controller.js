const fetch = require("node-fetch");
const Quizclass = require("../source/quiz_class.js");
const quiz     = new Quizclass();
const url = "https://opentdb.com/api.php?amount=10&type=multiple";

const getquiz =
  function getQuizbody(url, res){ 
    return fetch(url)
    .then( res => res.json())
    .then(body => {
      let quizbody = quiz.formatQuizbody(body);
      console.log(quizbody);
      return quizbody;
    }).then((body)=>{
      res.json(body);
      }).catch((error) =>{
        throw error;
    });
  };
    
  
module.exports = getquiz;