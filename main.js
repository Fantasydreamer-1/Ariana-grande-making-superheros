var canvas= new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
block_width=30;
block_hieght=30;
player_object="";
block_object="";

function player_update(){
fabric.Image.fromURL("player.png", function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
    top:player_y,
    left: player_x
    });
    canvas.add(player_object);
})
}

function block_update(new_image){
    fabric.Image.fromURL(new_image, function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_hieght);
        block_object.set({
        top:player_y,
        left: player_x
        });
        canvas.add(block_object);
    })
    }

    window.addEventListener("keydown", my_keydown);
    function my_keydown(e){
    keyPressed=e.keyCode;
    console.log (keyPressed);
    if(e.shiftKey==true && keyPressed=="80"  ) { 
    console.log("shift and P pressed together");
    block_width=block_width+10;
    block_hieght=block_hieght+10;
    document.getElementById("width").innerHTML=block_width;
    document.getElementById("hieght").innerHTML=block_hieght;
    }

    if(e.shiftKey==true && keyPressed=="77"  ) {
        console.log("shift and M pressed together");
        block_width=block_width-10;
        block_hieght=block_hieght-10;
        document.getElementById("width").innerHTML=block_width;
        document.getElementById("hieght").innerHTML=block_hieght;
        }

    if(keyPressed=="38") {
        console.log("up");
        up();
    }  

    if(keyPressed=="40") {
        console.log("down");
        down();
    }  

    if(keyPressed=="37") {
        console.log("left");
        left();
    }  
   

    if(keyPressed=="39") {
        console.log("right");
        right();
    }  

    if(keyPressed=="70") {
        console.log("f");
        block_update("spiderman_face.png")
    } 


    if(keyPressed=="66") {
        console.log("b");
        block_update("spiderman_body.png")
    } 
    if(keyPressed=="76") {
        console.log("L");
        block_update("spiderman_legs.png")
    } 

    if(keyPressed=="82") {
        console.log("r");
        block_update("spiderman_right_hand.png")
    } 

 
    if(keyPressed=="72") {
        console.log("H");
        block_update("spiderman_left_hand.png")
    } 

    


 }

function up (){
    if(player_y>0){
        player_y= player_y- block_hieght;
    console.log("current block height ="+block_hieght);
    console.log("when up arrow is pressed,x="+player_x+"| y="+player_y);
    canvas.remove(player_object);
    player_update();
    }
}

function down (){
    if(player_y<=500){
        player_y= player_y+ block_hieght;
    console.log("current block height ="+block_hieght);
    console.log ("when down arrow is pressed,x="+player_x+"| y="+player_y);
    canvas.remove(player_object);
    player_update();
    }
}

function right (){
    if(player_x<=850){
        player_x= player_x+ block_width;
    console.log("current block width ="+block_width);
    console.log ("when right arrow is pressed,x="+player_x+"| y="+player_y);
    canvas.remove(player_object);
    player_update();
    }
}

function left (){
    if(player_x>0){
        player_x= player_x- block_width;
    console.log("current block_width="+block_width);
    console.log ("when left arrow is pressed,x="+player_x+"| y="+player_y);
    canvas.remove(player_object);
    player_update();
    }
}