let bullets = []
let bulletnr = 0
let aliensLine1 = []
let aliensLine2 = []


function preload(){
    ship_0 = loadImage("ressources/ship_0.png");
    ship_1 = loadImage("ressources/ship_1.png");
    ship_2 = loadImage("ressources/ship_2.png");
    alien_0 = loadImage("ressources/alien_0.png");
    alien_1 = loadImage("ressources/alien_1.png");

   
}

let ship
let ship_0, ship_1, ship_2

function setup() {
    
    createCanvas(400, 400);
    background(0)
    ship = new Ship(width/2-10,height-100);
   
    ship.draw();

    for (i=0; i<5; i++){
        aliensLine1[i]=new Alien(90+50*i,20)
        aliensLine2[i]=new Alien(90+50*i,70)

        
            
    }
    

    alien = new Alien(width/2-10,20)
  


	
}

function draw()
{
    background(0)
    ship.draw()
    alien.draw()
    alien.update()
    for (i=0; i< bullets.length; i++){
        bullets[i].draw();
        bullets[i].update();
    }
    for (i=0;i<5;i++){
        aliensLine1[i].draw()
        aliensLine1[i].update()
        aliensLine2[i].draw()
        aliensLine2[i].update()
        
    }
}

class Alien{
    constructor(x,y){
        this.x = x
        this.y = y
        this.alienStage=0;
        this.changeStage = 0;
       
    }

    draw(){
        
        if (this.alienStage == 0){
            image(alien_0,this.x,this.y);
            
        }
        else {
            image(alien_1,this.x,this.y);
           // this.changeStage++
           
        }
        

        
        if (this.changeStage==0){
            this.alienStage++;
            if (this.alienStage > 1)
                this.alienStage = 0

            
        
            
        }
        this.changeStage++
        if (this.changeStage >5)
            this.changeStage = 0
        
   
    }
    update(){
        
        this.y++
    }



}



function keyPressed() {
    if (keyCode === LEFT_ARROW) {
      ship.moveLeft();
    } else if (keyCode === RIGHT_ARROW) {
      ship.moveRight();
    } else if (keyCode === 32) {
        ship.fire()
    }

}


class Ship{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.shipStage=0;
        this.changeStage = 0;
    }

    moveRight(){
        this.x+=5;

    }
    moveLeft(){
        this.x-=5;
    }
    

    draw(){
        if (this.shipStage == 0){
            image(ship_0,this.x,this.y);
           // this.changeStage++
        }
        else if (this.shipStage == 1){
            image(ship_1,this.x,this.y);
           // this.changeStage++
        }
        else {
            image(ship_2,this.x,this.y);
            
        }

        
        if (this.changeStage==0){
            this.shipStage++;
            if (this.shipStage > 2)
                this.shipStage = 0

            
        
            
        }
        this.changeStage++
        if (this.changeStage >5)
            this.changeStage = 0
      
        



       

    }

    fire(){
        bullets[bulletnr]= new Bullet(this.x+22,this.y)
        bulletnr++;
    }
}

class Bullet{
    constructor(x,y){
        this.x = x
        this.y = y
    }

    draw(){
        fill(255,0,0)
        circle(this.x,this.y,7)
    }

    update(){
        this.y--
    }



}












