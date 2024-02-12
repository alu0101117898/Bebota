document.getElementById('yes-btn').addEventListener('click', function() {
  document.querySelector('.intro-container').classList.add('hidden');
  document.querySelector('.question-container').classList.add('hidden');
  document.getElementById('result-container').classList.remove('hidden');
  document.getElementById('gif-img').src = 'stefanieshank.gif';
  document.getElementById('result-container').innerHTML = '<p>Menos mal bebé, pensé que dirías que no. Te amo muchito <3</p>';
  var audio = document.getElementById('background-music');
  audio.play();
});

document.getElementById('no-btn').addEventListener('click', function() {
  let button = document.getElementById('no-btn');
  let maxX = window.innerWidth - button.clientWidth;
  let maxY = window.innerHeight - button.clientHeight;

  let randomX = Math.floor(Math.random() * maxX);
  let randomY = Math.floor(Math.random() * maxY);

  button.style.position = 'absolute';
  button.style.left = randomX + 'px';
  button.style.top = randomY + 'px';

  let messages = ["No bebé", "No es verdad", "No lo intentes", "En serio, no lo intentes", "No seas pesada", "¿No te va molestando el ruido?",
"Tozuda", "Muuuy tozuda", "Oli se va a poner triste", "¿De verdad que no quieres?", "Es mentira jiji"];
  let currentIndex = parseInt(button.getAttribute('data-index')) || 0;
  button.textContent = messages[currentIndex];
  currentIndex = (currentIndex + 1) % messages.length;

  
  button.setAttribute('data-index', currentIndex);
  var audio = document.getElementById('oi');
  audio.play();
});

