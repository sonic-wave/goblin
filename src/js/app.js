const goblin = document.querySelectorAll(".cell");
// const goblinImage = document.createElement('img');

// goblinImage.src = '../img/goblin.png'

let numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let randomNum = 0;
let temp = 0;

const newInterval = setInterval(() => {
  if (!numArray.length) {
    numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  }
  goblin.forEach((item) => {
    if (item.classList.contains("field-item-img")) {
      item.classList.remove("field-item-img");
    }
  });
  randomNum = Math.floor(Math.random() * numArray.length);
  temp = numArray[randomNum];
  numArray = numArray.filter((element) => element !== temp);
  goblin[temp].classList.add("field-item-img");
}, 1000);
