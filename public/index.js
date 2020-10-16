//tag要素の定義
const navi = document.getElementById("textline");
const title =document.getElementById("title");
const start =document.getElementById("startbutton");
const home =document.getElementById("gohome");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const answers =[answer1, answer2, answer3, answer4];
const genre  = document.getElementById("genre");
const level  = document.getElementById("level");
//変数の定義
const none = "none";
const appear = "block";
const quiztitle = "問題";
const stratbutton= "開始";
const fin = 10;
let miss_count = 0;
let correct_count = 0;
let quiz;
let count = 0;
//api設定の定義
const url = "http://localhost:3000/qanda";
/*-------------------------
startQuiz関数
引数    url
doQuiz関数へ
-------------------------*/
async function startQuiz(url){
  navi.textContent= "少々お待ちください。";
  title.textContent= "Now Loding......";
  start.style.display = none;
  await fetch(url)
  .then(res =>res.json())
  .then(body => {
    quiz = body;
    console.log(body[0]);
    doQuiz(quiz);
  });
};

//問題関数
function doQuiz(quiz){
  if(count == fin){
    //正答数表示へ
    console.log(fin);
    console.log(correct_count);
    console.log(miss_count);
    endview(correct_count);
  }else{
  //選択肢を定義
    let correct_answer = quiz[count].correct_answer;
    let selectanswer = quiz[count].incorrect_answers;
    console.log(selectanswer);
    console.log(correct_answer);
  //タグ表示
    title.textContent= quiztitle+(count+1);
    genre.style.display = appear;
    genre.textContent = "[ジャンル]" + quiz[count].category;
    level.style.display = appear;
    level.textContent = "[難易度]" + quiz[count].difficulty;
    navi.textContent = quiz[count].question;
  //選択肢作成
    for(let i = 0;i < answers.length; i++){
      answers[i].style.display = appear;
      answers[i].value = selectanswer[i];
      if(correct_answer == selectanswer[i]){
        answers[i].onclick = function (){correct_route(quiz);};
      }else{
        answers[i].onclick = function (){miss_route(quiz);};
      }
    }
  } 
};
//正解時に通る関数
function correct_route(quiz){
  count++;
  correct_count++;
  doQuiz(quiz);
};
//不正解時に通る関数
function miss_route(quiz){
  count++;
  miss_count++;
  doQuiz(quiz);
};
//結果発表関数
function endview(count){
  title.textContent= "あなたの正答数は"+count+"です。";
  navi.textContent= "再度チャレンジしたい場合は以下をクリック";
  genre.style.display = none;
  level.style.display = none;
  home.style.display = appear;
  home.onclick = function(){location.href='/';};
  for(let i = 0;i < answers.length; i++){
    answers[i].style.display = none;
  };
};