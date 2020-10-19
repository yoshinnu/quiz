const express = require("express");
const app  = express();
//view engineをセット
app.set('view engine', 'html');
//js読み込み
app.use("/public", express.static(__dirname + "/public"));
//Quiz画面
app.use("/", require("./router.js"));
//QuizAPI
app.use("/qanda", require("./router.js"));

app.listen(3000);    