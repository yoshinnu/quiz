const express = require("express");
const router = express.Router();
const url = "https://opentdb.com/api.php?amount=10&type=multiple";
const quizcontrol = require("./controller/quiz.controller.js");
//quiz画面遷移
router.get("/", (req, res)=>{
  res.sendFile('/views/index.html', { root: __dirname });
});
//GET API
router.get("/qanda", (req, res)=>{
  quizcontrol(url).then((body)=>{
    res.json(body);
    }).catch((error) =>{
      throw error;
  });
});

module.exports = router;