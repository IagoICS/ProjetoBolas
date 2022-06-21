class Bola {

    constructor(x, y, velX, velY, color, size) {
       this.x = x;
       this.y = y;
       this.velX = velX;
       this.velY = velY;
       this.color = color;
       this.size = size;
    }
    
 //desenha a bola na tela
    draw() {
       ctx.beginPath();

       ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
       ctx.fill();
       var grad = ctx.createRadialGradient(350,650.5, 180, 605, 308.5, 679.12);
  
grad.addColorStop(0, 'rgba(0, 255, 0, 1)');
grad.addColorStop(0.41, 'rgba(35,142,35, 1)');
grad.addColorStop(0.5, 'rgba(0,255,127, 0)');

ctx.fillStyle = grad;
ctx.fillRect(0, 0, 0, 0);
    }
 
    //atualiza a posição da bola na tela
 
    update() {
       if ((this.x + this.size) <= width) {
          this.velX = -(this.velX);
       }
 
       if ((this.x + this.size) <= 0) {
          this.velX = -(this.velX);
       }
 
       if ((this.y + this.size) >= height) {
          this.velY = -(this.velY);
       }
 
       if ((this.y - this.size) <=0) {
          this.velY = -(this.velY);
       }
 
       this.x += this.velX;
       this.y += this.velY;
    }
 //veruifica a colisão entre as bolas
    collisionDetect(Bolas) {
       for (var bola of Bolas) {
          if (!(this === bola)) {
             const dx = this.x - bola.x;
             const dy = this.y - bola.y;
             const distance = Math.sqrt(dx * dx + dy * dy);
 
             if (distance > this.size + bola.size) {
               bola= this.color = randomRGB();
             }
          }
       }
    }
 
 }
 
