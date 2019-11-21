var font;
var pass;
var advice;
var myImg;
var show = false;

function preload(){
  font = loadFont("./assets/Cygnito Mono.ttf");
  myImg = loadImage("./assets/password.png");
}

var timeLeft = function(){
    var currentDate = new Date();
    currentDate = currentDate.getTime();
    var endDate = new Date("2019-11-29T00:00:00");
    if (parseInt((endDate-currentDate)/1000)<0){return 0};
    return parseInt((endDate-currentDate)/1000);
}

var timerText = function(){
    var h = String(parseInt(timer / 3600));
    var m = String(parseInt(timer / 60)%60);
    var s = String(timer - 3600*h - 60*m);

    if (h.length == 1){h="0"+h;};
    if (m.length == 1){m="0"+m;};
    if (s.length == 1){s="0"+s;};


    return h+":"+m+":"+s;

}

function countDown(){
    textAlign(CENTER, CENTER);
    textSize(100);
    textFont(font);
    fill(255, 0, 0);
    text(timerText(), width/2, height/2 - 150);
}


function fireshow(){
    background(0);
}

var timer = timeLeft();

function setup(){
    createCanvas (innerWidth, innerHeight);

// crea pulsante che porta a indizio
    advice = createButton("Ferro");
    advice.style("font-size: 50px");
    advice.position(width/2 + 90, height/2 - 15);
    advice.mousePressed(showImg);

//crea area dove inserire password
    pass = createInput("Enter password");
    pass.position(width/2, height/2 + 400);
    pass.mousePressed(changeValue);

//crea pulsante per validare password
    buttonSub = createButton("submit");
    buttonSub.style("border-color: red");
    buttonSub.position(width/2, height/2 + 470);
    buttonSub.mousePressed(goToPage);
}

function changeValue(){
  pass.value("");
}

//funzione che mostra l'indizio quando si clicca il pulsante advice
function showImg(){
  show = true;
}

//funzione che va alla pagina finale se si inserisce la password giusta
function goToPage(){
  if(pass.value() == ("amuleto")){
    window.open('index_2.html', "_self");
  }
}

function draw() {
    background (0);

    if (frameCount % 60 == 0 && timer > 0) {
        timer --;
    }

    if (timer == 0) {
        fireshow();
    } else {
        countDown();
    }

    textFont(font);
    textSize(50);
    fill(255, 0, 0);
    text("Tocca", width/2 - 80, height/2);

    if(show == true){
      imageMode(CENTER);
      image(myImg, width/2, height/2 - 400, myImg.width, myImg.height);
    }
}
