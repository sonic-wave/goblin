const goblin = document.querySelectorAll('.cell');
const goblinImage = document.createElement('img');

goblinImage.src = '/src/goblin.png';

let numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let randomNum = 0;
let temp = 0;

setInterval(() => {
  if (!numArray.length) {
    numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  }
  randomNum = Math.floor(Math.random() * numArray.length);
  temp = numArray[randomNum];
  numArray = numArray.filter((element) => element !== temp);
  console.log(`temp: ${temp}`);
  console.log(`numArray: ${randomNum}`);
  goblin[temp].appendChild(goblinImage);
}, 1000);
