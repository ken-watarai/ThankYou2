const target_l = document.getElementById("msg_form_l");
const target_r = document.getElementById("msg_form_r");
let flag_l = false;
let flag_r = false;

// element.classList.contains("item")
function OnButtonClick1() {
  target_l.classList.add("appear");
}
function OnButtonClick11() {
  target_l.classList.remove("appear");
}
function OnButtonClick2() {
  target_r.classList.add("appear_r");
}
function OnButtonClick21() {
  target_r.classList.remove("appear_r");
}

