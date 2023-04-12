const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

function start() { 
 const introImage = new Image();
 introImage.src = "./images.intro.jpg"
 x: 0;
 speed: -1
 ctx.save();
 this.interval = setTimeout(startText, 10);
}

function startText() {
 ctx.font = '56px fantasy';
 ctx.fillStyle = 'gold';
 ctx.fillText("Nini's Lunch Advcntrue", 50, 100);
 button 
 this.interval = setTimeout(updateGame, 30);    
}    

function clear() {
 ctx.clearRect(0, 0, 600, 300);}

function updateGame() { 
 const nextImage -
  new Image();
mainPlayer.src = './images/ninini.png';

class player {
    constructor(img, width, height, x, y) {
        this.img = img;
        this.width = width;
        this.height = height;
        this.x = 0;
        this.y = 0;
    }

    move() {
        let dice = 1 + Math.floor(6 * Math.random());
        this.position = (this.position + dice) % map.length;
        }
    }

let player1 = {};
player1.name = 'Nini';
player1.img = new Image;
img.src = "./images/ninini.png"








    document.addEventListener('keydown', (e) => {
      
        switch (e.keycode) {
        case 38:
         player.speedY -= 1;
          break;
        case 40:
            player.sppedY += 1;
          break;
        case 37:
            player.speedX -= 1;
          break;
        case 39:
            player.speedX += 1;
          break;
        }
       });

updateNiniGame() {
const ctx = ninisGame.context;
const background = new Image();
background.src = 
ctx.fillStyle = this.color;
ctx.fillRect(this.x, this.y, this.width, this.height);
 };
      


 function updateGame() {
    ninisGame.clear();
    player.newPos();
    player.update();
 }

 ninisGame.start();
