const handi = document.getElementById('handi');
const brokenHandi = document.getElementById('brokenHandi');
const potPieces = document.querySelectorAll('.pot-piece');
const curdDrops = document.querySelectorAll('.curd-drop');
const janmashtamiText = document.getElementById('janmashtamiText');
const cursorArea = document.getElementById('cursor-area');

// Listen to clicks on both the cursor area and the matki directly for mobile taps
cursorArea.addEventListener('click', breakHandi);
handi.addEventListener('click', breakHandi);

let isBroken = false;

function breakHandi() {
  if (isBroken) return; // Prevents triggering multiple times
  isBroken = true;

  const breakSound = document.getElementById('breakSound');
  const fluteSound = document.getElementById('fluteSound');
  const tapInstruction = document.querySelector('.tap-instruction');

  // Hide tap instruction text
  if (tapInstruction) {
    tapInstruction.style.display = 'none';
  }

  // 1. Play pot breaking sound instantly
  if (breakSound) {
    breakSound.currentTime = 0;
    breakSound.play();
  }

  // 2. Play festive audio track shortly after
  setTimeout(() => {
    if (fluteSound) {
      fluteSound.currentTime = 0;
      fluteSound.play();
    }
  }, 600);

  // 3. Trigger CSS keyframe animations
  handi.classList.add('handi-break');
  brokenHandi.classList.add('show-broken-handi');
  potPieces.forEach((piece) => piece.classList.add('piecefall'));
  curdDrops.forEach((drop) => drop.classList.add('curdfall'));

  setTimeout(function () {
    cursorArea.style.display = 'none';
  }, 1000);

  janmashtamiText.classList.add('textAnimate');
}
