var ballh;
var database;
var position;

function setup(){
    database = firebase.database();
    console.log(database);

    createCanvas(500,500);
    ballh = createSprite(250,250,10,10);
    ballh.shapeColor = "red";
    var positionh = database.ref('ball/position');
    positionh.on("value",readposition,showerror)

}

function draw(){
    background("white");
    if(position !== undefined){

    
    if(keyDown(LEFT_ARROW)){
        writeposition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeposition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writeposition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writeposition(0,+1);
    }
    drawSprites();
}
}
// function changePosition(x,y){
//     ballh.x = ballh.x + x;
//     ballh.y = ballh.y + y;
// }

function readposition(data){
position = data.val()
console.log(position);
ballh.x = position.x;
ballh.y = position.y;
}

function showerror(){
    console.log("showerror function triggered")
}

function writeposition(x,y){
database.ref('ball/position').set({
    'x': position.x+x,
    'y': position.y+y
})
}