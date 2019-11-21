var font;
var pass;
var advice;

function preload(){
  font = loadFont("./assets/Cygnito Mono.ttf");
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
    text(timerText(), width/2, height/2 - 300);
}


function fireshow(){
    background(0);
}

var timer = timeLeft();

function setup(){
    createCanvas (innerWidth, innerHeight);

//crea pulsante che porta a pagina di testo
    advice = createButton("fra.txt");
    advice.style("background-color: black");
    advice.style("font-size: 15px");
    advice.style("color: red");
    advice.style("border: black");
    advice.position(width/2 + 260, height/2 + 35);

    advice.mousePressed(showText);

//crea area dove inserire password
    pass = createInput("Enter password");
    pass.style("font-size: 30px");
    pass.style("font-family: Cygnito Mono");
    pass.position(width/2, height/2 + 400);

//crea pulsante per validare password
    buttonSub = createButton("submit");
    buttonSub.style("font-size: 30px");
    buttonSub.style("font-family: Cygnito Mono");
    buttonSub.style("translate: -50%, -50%");
    buttonSub.position(width/2 - 50, height/2 + 500);

    buttonSub.mousePressed(goToPage);
}

//funzione che mostra il testo quando si clicca il pulsante advice
function showText(){
  window.open('text.html');
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
}
