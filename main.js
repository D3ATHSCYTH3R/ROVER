canvas=document.getElementById("c")
ctx= canvas.getContext("2d");

NI=["1.jpeg","2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg", "10.jpeg"];
r=Math.floor(Math.random()*10);
console.log(r);

background_image=NI[r];
rover_image="rover.png";
roverX= 25;
roverY= 32;
roverwidth= 100;
roverheight= 100;
function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_imgTag, roverX, roverY, roverwidth, roverheight);
}
window.addEventListener("keydown", mykeydown);

function mykeydown(e){
    keys = e.keyCode;
    console.log(keys);
    if(keys=='38'){
        up();
        console.log("up");
    }
    
    if(keys=='39'){
        right();
        console.log("right");
    }
    
    if(keys=='40'){
        down();
        console.log("down");
    }
    
    if(keys=='37'){
        left();
        console.log("left");
    }
    
}
function up(){
    if (roverY >= 0){
        roverY = roverY - 10;
        console.log("roverX = "+roverX+"roverY ="+roverY);
        uploadBackground();
        uploadRover();

    }
}
function down(){
    if (roverY <= 500){
        roverY=roverY +10;
        console.log("roverX = "+roverX+"roverY ="+roverY);
        uploadBackground();
        uploadRover();
    }
}
function left(){
    if(roverX >= 0){
        roverX = roverX - 10;
        console.log("roverX = "+roverX+"roverY ="+roverY);
        uploadBackground();
        uploadRover();
    }
}
function right(){
    if(roverX <= 700){
        roverX = roverX + 10;
        console.log("roverX = "+roverX+"roverY ="+roverY);
        uploadBackground();
        uploadRover();
    }
}