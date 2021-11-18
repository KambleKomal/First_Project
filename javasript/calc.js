/*function add(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out = Number(a)+Number(b)
    document.getElementsByClassName('output')[0].innerText="Addition is "+out
}


function sub(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out = Number(a)-Number(b)
    document.getElementsByClassName('output')[0].innerText="Subtraction is "+out
}*/
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  // console.log(hexColor);

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}