const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = 950;
const height = canvas.height = 550;



// gera um número aleatório

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// gera uma cor aleatória

function randomRGB() {
  return `rgb(${random(20, 50)},${random(60, 65)},${random(60, 255)})`;
}


//define um vetor de bolas
const bolas = [];

while (bolas.length < 19) {
   const size = random(10,10);
   const bola = new Bola(
      // posição de sempre uma bola de distância
      // fora das bordas para evitar erros de desenho
      random(0 + size,width -size),
      random(1 + size,height - size),
      random(20,20),
      random(20,20),
      randomRGB(),
      size
   );

   //atualiza o vetor
  bolas.push(bola);
}

//realiza um loop em todas as bolas geradas
function loop() {
   ctx.fillStyle = 'rgba(0, 0, 0,0.030)';
   ctx.fillRect(0, 0,  width, height);

   for (const bola of bolas) {
    bola.draw();
    bola.update();
    bola.collisionDetect(bolas);
   }

   requestAnimationFrame(loop);
}


loop();



// Música
var audio = new Audio('sounds/musica.mp3');
audio.play()
audio.volume = 0.05;

function mutarMusica(){
    if(audio.muted == true) {
    audio.muted = false;
}
else if(audio.muted == false) {
  audio.muted = true;
}

var btn = document.getElementById('mutarMusica');
  if (btn.value == "&#9654") {
  btn.value = "&#9616;&nbsp;&#9612;";
  btn.innerHTML = "&#9616;&nbsp;&#9612;";
}
else{
  btn.value = "&#9654";
  btn.innerHTML = "&#9654";
}
}