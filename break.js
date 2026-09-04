const handi = document.getElementById('handi');
const brokenHandi = document.getElementById('brokenHandi');
const potPieces = document.querySelectorAll('.pot-piece');
const curdDrops = document.querySelectorAll('.curd-drop');
const janmashtamiText = document.getElementById('janmashtamiText');
const cursorArea = document.getElementById('cursor-area');

cursorArea.addEventListener('click', breakHandi);

function breakHandi() {
  const breakSound = document.getElementById('breakSound');
  const fluteSound = document.getElementById('fluteSound');

  // 1. Play pot breaking sound instantly
  if (breakSound) {
    breakSound.currentTime = 0;
    breakSound.play();
  }

  // 2. Play flute sound slightly after (as Krishna reveals)
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