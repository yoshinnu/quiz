const fetch = require("node-fetch");
module.exports = 
class Quiz {

   getQuizbody(url){ 
    return fetch(url)
    .then( res => res.json());
  };
  async  getQuiz(url){
     let body = await this.getQuizbody(url);
      console.log("getquizcount:",body.results.length);
      return body;
    };
};