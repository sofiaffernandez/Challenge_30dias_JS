"use strict;"
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('tocando');
  }

  function playSound(e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('tocando');
    audio.currentTime = 0;
    audio.play();
  }

  let keys = Array.from(document.querySelectorAll('.tecla'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
