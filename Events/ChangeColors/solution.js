const startbtn = document.getElementById('start');
const stopbtn = document.getElementById('stop');

const arrayOfColorFunctions = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
];

let MyInterval;

startbtn.addEventListener('click', function () {
    if (!MyInterval) {
        MyInterval = setInterval(newColorFind, 1000);
    }
});

stopbtn.addEventListener('click', function () {
    clearInterval(MyInterval);
    MyInterval = null;
});

function newColorFind() {
  let randomColorString = '#';

  for (let x = 0; x < 6; x++) {
    let index = Math.floor(Math.random() * 16);
    let value = arrayOfColorFunctions[index];

    randomColorString += value;
  }
  document.body.style.backgroundColor = randomColorString;
}
