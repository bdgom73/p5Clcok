let w
function setup(){
    w = createCanvas(400,400);
    w.parent("watch");   
    angleMode(DEGREES);   
}
function draw(){
    clockDraw();
}
function clockDraw(){
    background(255);
    translate(200,200);
    rotate(-90);
    strokeWeight(2);
  
    // 테두리
    push();
        stroke(255)
        strokeWeight(4);
        fill(30)
        ellipse(0,0,280,280);
        stroke(20)
        ellipse(0,0,270,270);
    pop()

    // 눈금표시
    for(let i = 1 ; i < 60 ; i++){
        minLiner(i);
    }
    for(let i = 1 ; i < 13 ; i++){
        hourLiner(i);
    }

    // 시계동작
    watch();
   
}

function watch(){
    let hr = hour();
    let mn = minute();
    let sc = second();
    let appm = hr >= 12 ? "오후" : "오전";

    // 초침
    stroke(255,100,150);
    noFill();
    let secAngle = map(sc,0,60,0,360) 
    push();
        rotate(secAngle);
        strokeWeight(2);
        stroke(255,100,150);
        line(-20,0,130,0);
    pop();

    // 분침
    stroke(255,255,150);
    let minAngle = map(mn,0,59,0,360)
    push();
        strokeWeight(6);
        rotate(minAngle);
        stroke(255,255,150);
        line(-20,0,100,0); 
    pop();

    // 시침
    stroke(150,100,255); 
    let hourAngle = map(hr % 12 , 0 , 12 ,0, 360);
    push();
        strokeWeight(8);
        rotate(hourAngle + (0.5 * mn));
        stroke(150,100,255); 
        line(-20,0,70,0);
    pop();

    // 가운데표시
    push();
        strokeWeight(8);
        stroke(255);
        point(0,0);
    pop();

    // 시간텍스트
    push();
        rotate(90)
        noStroke();
        fill(255);
        textSize(10);
        text(appm+" "+hr%12+":"+mn+":"+sc,-80,0);   
    pop();

}

// 시간 표시
function hourLiner(hr){
    let d = 90;
    d = hr === 12 ? 90 : 90 + (hr*30);
    push();
        stroke(255,255,255)
        rotate(d);
        fill(255); 
        strokeWeight(1)
        line(0,-110,0,-130);
    pop();
}

// 분 표시
function minLiner(mn){
    let d = 90;
    d = mn === 60 ? 90 : 90 + (mn*6);
    push();
        rotate(d); 
        strokeWeight(1)
        stroke(125,125,125)
        line(0,-120,0,-130);
    pop();
}
