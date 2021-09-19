var button1 = document.querySelector(".button1");
var tab1 = document.querySelector(".tab1");
var button2 = document.querySelector(".button2");
var tab2 = document.querySelector(".tab2");
var button3 = document.querySelector(".button3");
var tab3 = document.querySelector(".tab3");
var button4 = document.querySelector(".button4");
var tab4 = document.querySelector(".tab4");

button1.addEventListener('click', function clickButton1(){
  tab1.style.display = "block";
  tab2.style.display = "none";
  tab3.style.display = "none";
  tab4.style.display = "none";
});

button2.addEventListener('click', function clickButton2(){
  tab2.style.display = "block";
  tab1.style.display = "none";
  tab3.style.display = "none";
  tab4.style.display = "none";
});

button3.addEventListener('click', function clickButton3(){
  tab3.style.display = "block";
  tab1.style.display = "none";
  tab2.style.display = "none";
  tab4.style.display = "none";
});

button4.addEventListener('click', function clickButton4(){
  tab4.style.display = "block";
  tab1.style.display = "none";
  tab2.style.display = "none";
  tab3.style.display = "none";
});


var tab1checkBtn = document.querySelector("#tab1checkBtn");
tab1checkBtn.addEventListener('click', function tab1Calculate(){
  var angel1 = document.querySelector("#angel1");
  var angel2 = document.querySelector("#angel2");
  var angel3 = document.querySelector("#angel3");
  var outputArea = document.querySelector("#tab1outputArea");

  var sum = Number(angel1.value) + Number(angel2.value) + Number(angel3.value);
  if(sum === 180){
    outputArea.innerHTML = "Badhai ho!! Triangle paida hua h"
  }else{
    outputArea.innerHTML = "Not Triangle"
  }
});


var tab3checkBtn = document.querySelector("#tab3checkBtn");
tab3checkBtn.addEventListener('click', function tab3Calculate(){
  var base = document.querySelector("#base");
  var height = document.querySelector("#height");
  var tab3outputArea = document.querySelector("#tab3outputArea");

  var hypotenuse = Math.sqrt(Math.pow(Number(base.value), 2) + Math.pow(Number(height.value), 2));
  tab3outputArea.innerHTML = "Length of Hypotenuse is "+hypotenuse+ " !!";
});


var tab3checkBtn = document.querySelector("#tab3checkBtn");
tab4checkBtn.addEventListener('click', function tab4Calculate(){
  var base = document.querySelector("#baseA");
  var height = document.querySelector("#heightA");
  var tab4outputArea = document.querySelector("#tab4outputArea");
  var area = (Number(base.value)*Number(height.value))/2
  tab4outputArea.innerHTML = "Area of triangle is "+area+" !!";
});


var quizForm = document.querySelector(".quiz-form");
var submitBtn = document.querySelector(".submit-btn");
var result = document.querySelector(".result")

const answerList = ["90°","right angled", "one right angle", "12, 16, 20", "Equilateral triangle"];

submitBtn.addEventListener("click",()=>{
    var score = 0;
    var index = 0;
    var userAns = new FormData(quizForm);
    for(var i of userAns.values()){
        if(i===answerList[index]){
            score += 1;
        }
        index += 1;  
    }
    result.innerText = "The score is "+score;
})