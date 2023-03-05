const temp = 'Proszę o usprawiedliwienie nieobecności z powodu ';

const usp = [
  'wyjazdu',
  'szczepienia',
  'złego samopoczucia',
  'wizyty u lekarza',
  'choroby',
  'jazd na prawo jazdy',
  'ważnej uroczystości rodzinnej',
  'nagłego zdarzenia losowego',
  'katastrofy lotniczej',
  'pogorszenia się stanu psychicznego',
  'wizyty u dentysty',
  'wizyty u okulisty',
  'wizyty u dermatologa',
];

const button = document.querySelector('.genButton');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

button.addEventListener('click', () => {
  navigator.clipboard.writeText(temp + usp[getRandomInt(usp.length)] + '.');
});
