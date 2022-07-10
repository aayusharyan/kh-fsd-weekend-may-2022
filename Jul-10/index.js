const btn1 = document.getElementById('btn1');

const fn1 = function() {
  console.log("Button 1 clicked");
}

const fn2 = function() {
  console.log("Button 1 is clicked, I am second tracker");
}

btn1.addEventListener('click', fn1);
btn1.addEventListener('click', fn2);

// btn1.removeEventListener('click', fn1);

// if(true) {
//   function fn3() {
//     console.log("Hi from function 3");
//   }
// }

// fn3();

// if(true) {
//   let fn4 = function() {
//     console.log("Hi from function 4");
//   }
// }

// fn4();



function fn5() {
  var my_name = "Aayush";  
  console.log(my_name);
}

fn5();

// console.log(my_name);

{
  //A block of code
  var my_last_name1 = "Sinha";
  let my_last_name2 = "Sinha";
}

// console.log(my_last_name1);
// console.log(my_last_name2);

let full_name = "Aayush Sinha";
full_name = "Ishmael Muhikira";

console.log(full_name);


const participants = ["Gurpreet", "Ismael", "Pawan"];
console.log(participants);
participants[3] = "Not Pawan";
participants.push("Ahmed");
console.log(participants);

// participants = [""];


let my_number = 10;
let my_number_copy = my_number;

console.log(my_number, my_number_copy);

my_number_copy = my_number_copy + 5;

console.log(my_number, my_number_copy);







let my_array = [1, 2, 3, 4];
let my_array_copy = my_array;

console.log(my_array, my_array_copy);
my_array_copy.push(5);
console.log(my_array, my_array_copy);
console.log(typeof my_array);


let participant_count = 4;

let fn6 = function(a) {
  a = a + 1;
  console.log("Inside function", a);
}

fn6(participant_count);
console.log("Outside function", participant_count);



let my_arr = [1, 2, 3, 4];

//Serealization (Convert array to string)
let my_str = JSON.stringify(my_arr);
// console.log(my_arr, my_str);

//Parsing (De-serialization) (Convert string to an array). This time, a NEW copy is created.
let my_arr_cp = JSON.parse(my_str);

let my_arrrr = ["gurpreet"];

console.log(participants);

// Object.freeze(participants);

Object.seal(participants);

// participants.push("Aayush");
participants[0] = "Not Gurpreet";
console.log(participants);

//Changes in ES12 (Allow _ in the number) | Numeric Separator
let cc_no = 1234_1234_1234_1234; //1234123412341234


let f_name = "Aayush";
let l_name = "Sinha";
let role = "Instructor";

//Hi, I am <first_name> <last_name> and I am a <role>.

let op  = "Hi, I am " + f_name + " " + l_name + " and I am a " + role;
let op1 = `Hi, I am ${f_name} ${l_name} and I am a ${role}`;

console.log(op, op1);

