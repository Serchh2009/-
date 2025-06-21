const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Frases de amor
const phrases = [
  "Te Amo", "I Love You", "Je T’aime", "Ich liebe dich",
  "Ti Amo", "Eu Te Amo", "愛してる", "사랑해",
  "Я тебя люблю", "أنا أحبك", "Wo Ai Ni", "मैं तुमसे प्यार करता हूँ",
  "Σ' αγαπώ", "Ik hou van jou", "Jeg elsker dig", "Jeg elsker deg",
  "Jag älskar dig", "Aşıkım sana", "Mən səni sevirəm", "Mi amas vin"
];

const fontSize = 24;
ctx.font = `${fontSize}px monospace`;

let fallingPhrases = [];

function addPhrase() {
  const text = phrases[Math.floor(Math.random() * phrases.length)];
  const x = Math.random() * (canvas.width - ctx.measureText(text).width);
  fallingPhrases.push({ text, x, y: 0 });
}

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ff3399";
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < fallingPhrases.length; i++) {
    const p = fallingPhrases[i];
    ctx.fillText(p.text, p.x, p.y);
    p.y += 2; // Velocidad de caída

    // Quitar frases que salieron de pantalla
    if (p.y > canvas.height + fontSize) {
      fallingPhrases.splice(i, 1);
      i--;
    }
  }

  // Añadir nueva frase aleatoriamente
  if (Math.random() > 0.8) {
    addPhrase();
  }
}

setInterval(draw, 30);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
