const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const fortuneCookie = document.querySelector('#fortuneCookie');
const tryAgain = document.querySelector('#tryAgain');

const fortune = [
  'Learning is like the horizon: there are no limits.',
  'Strength lies not in being strong, but in being flexible.',
  'Limitations are borders created only by our minds.',
  'A dog doesn’t bark out of bravery but out of fear.',
  'Try to light a candle instead of cursing the darkness.',
  'Speech is silver, silence is golden.',
  'Remember that great achievements and great loves involve great risks.',
  'A little perfume always clings to the hands that offer flowers.',
  'Man only ages when regrets replace his dreams.',
  'Persistence makes the impossible possible.',
  'If someone is so tired that they can’t give you a smile, give them yours.',
];

fortuneCookie.addEventListener('click', handleTryClick);
tryAgain.addEventListener('click', handleResetClick);
document.addEventListener('keydown', function (e) {
  if (e.key == 'Enter' && screen2.classList.contains('hide')) {
    handleTryClick();
  } else if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick();
  }
});

function handleTryClick(event) {
  toggleScreen();
  pickFortune();
}

function handleResetClick() {
  toggleScreen();
}

function pickFortune() {
  let allFortunes = fortune.length;
  let randomNumber = Math.floor(Math.random() * allFortunes);
  screen2.querySelector('h2').innerText = `${fortune[randomNumber]}`;
}

function toggleScreen() {
  screen2.classList.toggle('hide');
  screen1.classList.toggle('hide');
}
