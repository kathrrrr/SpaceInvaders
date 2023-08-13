function preload(){
    ship_0 = loadImage("ressources/ship_0.png")
   // bluefishImg = loadImage("Bluefish.jpg")
}

let ship
let ship_0

function setup() {
    createCanvas(400, 400);
    background(0)
    ship = new Ship(width/2-10,height-100);
   
   ship.draw();


	
}

function draw()
{
    background(0)
    ship.draw()
    

}

class Ship{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    draw(){
        image(ship_0,this.x,this.y)
       

    }
}

