let btn = document.querySelector('.btn');
let body = document.querySelector('body');
let audio = document.querySelector('#audio');

btn.onclick = () => {
  body.classList.toggle('on');
  audio.play();
}