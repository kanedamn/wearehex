var font;

function preload(){
  font = loadFont("./assets/Cygnito Mono.ttf");
}

var timeLeft = function(){
    var currentDate = new Date();
    currentDate = currentDate.getTime();
    var endDate = new Date("2020-03-13T00:00:00");
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
    textSize(50);
    textFont(font);
    fill(255, 0, 0);
    text(timerText(), width/2, height/2);
}


function fireshow(){
    textAlign(CENTER, CENTER);
    textSize(50);
    textFont(font);
    fill(255);
    text("OPEN YOUR EYES", width/2, height/2);
}

var timer = timeLeft();

function setup(){
    createCanvas (innerWidth, innerHeight);
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
