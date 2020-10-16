const express = require("express");
const app  = express();
const url = "https://opentdb.com/api.php?amount=10&type=multiple";
const Quizclass = require("./source/quiz_class.js");
const quiz     = new Quizclass();

app.set('view engine', 'html');
app.use("/public", express.static(__dirname + "/public"));
app.get("/",(req, res) => {
  res.sendFile(__dirname + "/views" +"/index.html");
});
app.get("/qanda",(req, res) =>{
  quiz.getQuizbody(url)
  .then((body)=>{
    res.json(body);
  }).catch((error) =>{
    throw error;
  });
});
app.listen(3000);



    