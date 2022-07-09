let count = 0;

function buttonClicked(secret_code, e) {
  count = count + 1;
  console.log(secret_code);
  console.log("Button clicked");
  console.log(e);
  let btn = e.target; //This is basically the button.
  // btn.innerText = "Clicked " + count + " times";
  // btn.innerText = "Clicked";
  // btn.remove();
  btn.style.backgroundColor = "black";

  // e.target.style.backgroundColor = "black";
}

function form_submitted(e) {
  e.preventDefault(); //Prevents from execution of DEFAULT functionality.
  console.log(e);
}


function calculate_sum() {
  let number1 = document.getElementById('ip1').value;
  let number2 = document.getElementById('ip2').value;

  number1 = Number(number1);
  number2 = Number(number2);

  let sum = number1 + number2;

  document.getElementById('op').innerText = sum;
}

// let btn1 = document.getElementById('btn1');
// btn1.onclick = function() {
//   console.log("Button clicked");
// }


let btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function() {
  console.log("Button clicked");
});

let id = setInterval(function() {
  console.log("Function called");
  console.log("Wait 1 second");
}, 1000);
console.log(id);

let btn2 = document.getElementById('stop');
btn2.addEventListener('click', function() {
  clearInterval(id);
})