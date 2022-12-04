const submit = document.querySelector(".enter");

function enter() {
  submit.style.backgroundColor = "green";
  //   submit.appendChild();
}

const answer1 = document.getElementById("a1");
const answer2 = document.getElementById("a2");
const answer3 = document.getElementById("a3");

function selectAnswer(id) {
  console.log(id);
  if (id === "a1") {
    answer1.style.backgroundColor = "red";
  } else if (id === "a2") {
  } else if (id === "a3") {
  }
}

// const card = document.querySelector(".card");

// // the array of review questions:
// const questions = [
//   { q: document.querySelector(".q1"), viewed: false },
//   { q: document.querySelector(".q2"), viewed: false },
// ];

// // start out with all questions hidden:
// questions.forEach((question) => {
//   //   question.style.visibility = "hidden";
//   question.q.style.display = "none";
// });

// // randomly select one question not yet viewed:
// if (!questions[Math.floor(Math.random() * questions.length)].viewed) {
//   questions[Math.floor(Math.random() * questions.length)].q.style.display =
//     "block";
// }

// questions[Math.floor(Math.random() * questions.length)].style.visibility =
//   "visible";

// const correct = document.getElementById("correct");
// correct.style.display = "none";
// const incorrect = document.getElementById("incorrect");
// incorrect.style.display = "none";

// if (document.getElementById("a").checked) {
//   incorrect.style.display = "block";
//   correct.style.display = "none";
// } else if (document.getElementById("b").checked) {
//   incorrect.style.display = "block";
//   correct.style.display = "none";
// } else if (document.getElementById("c").checked) {
//   // correct
//   correct.style.display = "block";
//   incorrect.style.display = "none";
// }

// card.style.visibility = "hidden"; //

// card.style.border = "thick solid #000";

// const card_values = ["hello", "bye", "farewell", "goodday"];

// const value = card_values[Math.floor(Math.random() * card_values.length)];
// console.log(value);

// const par = document.createElement("p");
// par.innerText = value;

// card.appendChild(par);

// let buttons = [];
// const numButtons = 3;
// let buttonValues = ["a", "b", "c"];

// for (let i = 0; i < numButtons; i++) {
//   buttons.push(document.createElement("input"));
//   buttons[i].setAttribute("type", "radio");
//   buttons[i].setAttribute(
//     "value",
//     buttonValues[Math.floor(Math.random() * buttonValues.length)]
//   );
//   card.appendChild(buttons[i]);
// }
