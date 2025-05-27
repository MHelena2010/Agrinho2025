function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(135, 206, 235); // céu azul

  // Divisão da tela: metade cidade, metade campo
  stroke(0);
  line(width / 2, 0, width / 2, height);

  // --- Lado esquerdo: Cidade ---
  drawCity();

  // --- Lado direito: Campo ---
  drawField();
}

function drawCity() {
  // chão cinza para cidade
  noStroke();
  fill(100);
  rect(0, height * 0.75, width / 2, height / 4);

  // prédios simples
  fill(150);
  rect(50, height * 0.5, 50, height * 0.25);
  rect(120, height * 0.4, 40, height * 0.35);
  rect(180, height * 0.55, 30, height * 0.20);
  rect(230, height * 0.45, 60, height * 0.30);

  // janelas dos prédios
  fill(255, 255, 100);
  for (let x = 55; x < 95; x += 15) {
    for (let y = height * 0.55; y < height * 0.75; y += 20) {
      rect(x, y, 10, 10);
    }
  }
  for (let x = 125; x < 155; x += 15) {
    for (let y = height * 0.45; y < height * 0.75; y += 20) {
      rect(x, y, 10, 10);
    }
  }
}

function drawField() {
  // chão verde para campo
  noStroke();
  fill(60, 180, 75);
  rect(width / 2, height * 0.75, width / 2, height / 4);

  // sol simples
  fill(255, 204, 0);
  ellipse(width * 0.75, height * 0.2, 80);

  // árvore simples
  fill(101, 67, 33);
  rect(width * 0.6, height * 0.6, 20, 60);
  fill(34, 139, 34);
  ellipse(width * 0.61, height * 0.55, 70, 70);

  // planta/folhas
  fill(0, 100, 0);
  ellipse(width * 0.7, height * 0.75, 40, 30);
  ellipse(width * 0.68, height * 0.7, 30, 20);
}