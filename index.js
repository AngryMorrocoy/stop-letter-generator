let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const getRandomLetter = () => {
  if (letters.length === 0) return;
  // Get a random index between 0 and the length of the letters variable
  const randomindex = Math.ceil( ( letters.length * Math.random() ) ) - 1;
  const random_letter = letters[randomindex];

  // Remove the letter from the letters variable
  letters = letters.replace(random_letter, "");

  return random_letter;
};

const createAppearedLetter_tag = (letterValue) => {
  let newLetter_tag = document.createElement("li");
  newLetter_tag.classList.add('generated-letters-list__li');
  newLetter_tag.textContent = letterValue;

  return newLetter_tag;
};

const triggerBopAnimation = (element) => {
  element.classList.toggle("bop");
}


document.addEventListener('DOMContentLoaded', (event) => {

  const generateRandomLetter_btn = document.getElementById("generate-random-letter-button");
  const currentLetter_displayer = document.getElementById("current-letter");
  const appearedLetters_list = document.getElementById("appeared-letters");

  const addLetterToList = (letter) => {
    const newLetter_li = createAppearedLetter_tag(letter);
    appearedLetters_list.appendChild(newLetter_li);
  };

  currentLetter_displayer.addEventListener('animationend', (event) => {
    currentLetter_displayer.classList.toggle("bop");
  });

  generateRandomLetter_btn.addEventListener('click', (event) => {
    const newRandomLetter = getRandomLetter()
    currentLetter_displayer.textContent = newRandomLetter || "No more letters!";
    if (newRandomLetter) addLetterToList(newRandomLetter);

    triggerBopAnimation(currentLetter_displayer);

  });

  generateRandomLetter_btn.dispatchEvent(new Event('click'));

});
