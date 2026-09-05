const handi = document.getElementById('handi');
const brokenHandi = document.getElementById('brokenHandi');
const potPieces = document.querySelectorAll('.pot-piece');
const curdDrops = document.querySelectorAll('.curd-drop');
const janmashtamiText = document.getElementById('janmashtamiText');
const cursorArea = document.getElementById('cursor-area');


cursorArea.addEventListener('click', breakHandi);
handi.addEventListener('click', breakHandi);

let isBroken = false;

function breakHandi() {
  if (isBroken) return; 
  isBroken = true;

  const breakSound = document.getElementById('breakSound');
  const fluteSound = document.getElementById('fluteSound');
  const tapInstruction = document.querySelector('.tap-instruction');

  
  if (tapInstruction) {
    tapInstruction.style.display = 'none';
  }

  
  if (breakSound) {
    breakSound.currentTime = 0;
    breakSound.play();
  }


if (fluteSound) {
  
  fluteSound.muted = true;
  fluteSound.play().then(() => {
    fluteSound.pause();
    fluteSound.muted = false;
  }).catch(() => {});
}

setTimeout(() => {
  if (fluteSound) {
    fluteSound.currentTime = 0;
    fluteSound.play();
  }
}, 600);

  
  handi.classList.add('handi-break');
  brokenHandi.classList.add('show-broken-handi');
  potPieces.forEach((piece) => piece.classList.add('piecefall'));
  curdDrops.forEach((drop) => drop.classList.add('curdfall'));

  setTimeout(function () {
    cursorArea.style.display = 'none';
  }, 1000);

  janmashtamiText.classList.add('textAnimate');
}
