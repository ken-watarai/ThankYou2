const target_l = document.getElementById("msg_form_l");
const target_r = document.getElementById("msg_form_r");
const circle_oldsis = document.getElementById("circle_oldsis");
const circle_youngsis = document.getElementById("circle_youngsis");
let flag_l = false;
let flag_r = false;

// element.classList.contains("item")
function OnButtonClick1() {
  target_l.classList.add("appear");
  circle_oldsis.classList.add("disappear");
}
function OnButtonClick11() {
  target_l.classList.remove("appear");
  circle_oldsis.classList.remove("disappear");
}
function OnButtonClick2() {
  target_r.classList.add("appear_r");
  circle_youngsis.classList.add("disappear");
}
function OnButtonClick21() {
  target_r.classList.remove("appear_r");
  circle_youngsis.classList.remove("disappear");
}


const text = document.querySelector(".text p");
text.innerHTML = text.innerText.split("").map(
  (char, i) => 
  `<span style="transform:rotate(${i * 9}deg)">${char}</span>`
).join("")
