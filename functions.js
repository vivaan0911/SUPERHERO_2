var canvas= new fabric.Canvas("myCanvas");

player_x= 10;
player_y= 10;

image_height= 30;
image_width= 30;

var player_object="";
var block_images="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object= Img;
        player_object.scaleToWidth(50);
        player_object.scaleToHeight(100);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_images= Img;
        block_images.scaleToWidth(image_width);
        block_images.scaleToHeight(image_height);
        block_images.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_images);
    });
} 

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed= e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey==true&&keyPressed=='80'){
        console.log("p key and shift key is pressed together");
        image_width= image_width+15;
        image_height= image_height+15;
        document.getElementById("current_width").innerHTML= "Current Width  = "+image_width;
        document.getElementById("current_height").innerHTML= "Current Height  = "+image_height;
    }

    if(e.shiftKey==true&&keyPressed=='77'){
        console.log("m key and shift key is pressed together");
        image_width= image_width-10;
        image_height= image_height-10;
        document.getElementById("current_width").innerHTML= "Current Width = "+image_width;
        document.getElementById("current_height").innerHTML= "Current Height  = "+image_height;
    }

    if(keyPressed=='70'){
        console.log("f key for face");
        new_image('thor_face.png')
    }

    if(keyPressed=='66'){
        console.log("b key for body");
        new_image('ironman_body.png');
    }

    if(keyPressed=='76'){
        console.log("l key for legs");
        new_image('spiderman_legs.png');
    }

    if(keyPressed=='82'){
        console.log("r key for right hand");
        new_image('hulk_right_hand.png');
    }

    if(keyPressed=='72'){
        console.log("h key for left hand");
        new_image('captain_america_left_hand.png');
    }

    if(keyPressed=='38'){
        console.log("up key");
        up();
    }

    if(keyPressed='40'){
        console.log("down key");
        down();
    }

    if(keyPressed='37'){
        console.log("left key");
        left();
    }

    if(keyPressed='39'){
        console.log("right key");
        right();
    }
}