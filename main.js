canvas=document.getElementById("mycanvas");

ctx=canvas.getContext("2d");

rover_width=100;

rover_height=90;

roverX=10;

roverY=10;

background_image="mars.jpg";

rover_image="rover.png";

function add(){
    background_tag=new Image();

    background_tag.onload=upload_background;

    background_tag.src=background_image;

    rover_tag=new Image();

    rover_tag.onload=upload_rover;

    rover_tag.src=rover_image;
}

function upload_background()
{
ctx.drawImage(background_tag, 0, 0, canvas.width, canvas.height);
}

function upload_rover()
{
    ctx.drawImage(rover_tag, roverX, roverY, rover_width, rover_height);
}

window.addEventListener("keydown", rover_move);

function rover_move(e)
{
    keypressed=e.keyCode;

    console.log(keypressed);

    if (keypressed==38) {
     console.log("up is pressed");
     up();
    }

    if (keypressed==40) {
        console.log("down is pressed");
        down();
       }

    if (keypressed==37) {
        console.log("left is pressed");
        left();
       }

    if (keypressed==39) {
        console.log("right is pressed");
        right();
       }
}

function up()
{
if (roverY>=0) {
   roverY=roverY-10;
   upload_background();
   upload_rover();
}
}

function down()
{
if (roverY<=500) {
    rover=roverY+10;
    upload_background();
    upload_rover();
}
}

function right()
{
if (roverX<=700) {
  roverX=roverX+10;
  upload_rover();
  upload_background();
}
}

function left()
{
    if (roverX>=0) {
        roverX=roverX-10;
        upload_rover();
        upload_background();
    }
}