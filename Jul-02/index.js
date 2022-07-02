// let nums = [1, 2, 3, 4, 5, 6, 7, 8];

// let max = nums[0];
// let second_max = nums[1];

// for(let i = 0; i < nums.length; i = i + 1) {
//   if(nums[i] > max) {
//     second_max = max;
//     max = nums[i];
//   }
// }

// console.log(second_max);


let str   = "kfksdkjfkjsdhfkjhooaoirunxe";
let count = 0;

for(let i = 0; i < str.length; i = i +1) {
  let single_character = str[i]; //str.charAt(i);

  // if(single_character == 'a') {
  //   count = count + 1;
  // } else if(single_character == 'e') {
  //   count = count + 1;
  // } else if (single_character == 'i') {
  //   count = count + 1;
  // } else if (single_character == 'o') {
  //   count = count + 1;
  // } else if (single_character == 'u') {
  //   count = count + 1;
  // }

  switch(single_character) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      count = count + 1;
      break;
    default:
      console.log("n");
      break;
  }
}

console.log(count);



// Task -> Assume a grade variable and print the marks range based on that.
// A -> "Marks between 90% to 100%";
// B -> "Marks between 80% to 89.99%";
// C -> "Marks between 65% to 79.99%";
// D -> "Marks between 45%" to 64.99%";
// F -> "Failed";
// zzz -> "Invalid input";

// let grade = "K";
// switch(grade) {
// 	case "A":
//   	console.log("Marks between 90% and 100%");
//     break;
//   case "B":
//   	console.log("Marks between 80% and 89.99%");
//     break;
//   case "C":
//   	console.log("Marks between 65% and 79.99%");
//     break;
//   case "D":
//   	console.log("Marks between 45% and 64.99%");
//     break;
//   default:
// 		console.log("Invalid Input");
//     break;
// }

// let my_name = "Aayush";
// alert(my_name);

// let my_name = prompt("Enter your name");
// console.log(my_name);

// Take a number from the user, and check whether it is odd or even.

// let num = prompt("Enter the number to check");
// let remainder = num % 2;
// if(remainder == 0) {
//   alert("Number is even");
// } else {
//   alert("Number is odd");
// }

// Task, write this in a LOOP.

// ASK, do you want to check for odd or even?
// IF user enters y then ask again for even odd function.
// Give output.
// ASK, do you want to check for odd or even?

// Function Definition
function check_odd_even() {
  let num = prompt("Enter the number to check");
  let remainder = num % 2;
  if(remainder == 0) {
    alert("Number is even");
  } else {
    alert("Number is odd");
  }
}

// Function call / function invocation
// check_odd_even();


// let user_choice = prompt("Do you want to check for odd or even");
// while(user_choice == "y" || user_choice == "yes") {
  
//   check_odd_even();
//   user_choice = prompt("Do you want to check again?");
// }

// Function definition. - Created a function that takes 2 numbers as parameters and returns their sum. (Formal Parameters)
function add_2_numbers(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

// Function invocation. I am passing 10 and 25 as arguments. (Actual Parameter)
// let addition = add_2_numbers(10, 25);
// console.log(addition);

//Task -> Same function, but this time, take the numbers from the user as a prompt.

// let number1 = prompt("Enter first number");
// let number2 = prompt("Enter second number");

// number1 = Number(number1);
// number2 = Number(number2);

// let addition = add_2_numbers(number1, number2);
// console.log(addition);

// console.log("100" + "200"); // "100200"
// console.log( 100  +  200 ); // 300


// console.log("200" - "100"); // 100
// console.log( 200  -  100 ); // 100


// console.log("2" + 2); // "22"

// console.log( 10 + 10 + "10"); 

console.log("2" + "5" - "4" + 10 + 3 - 5 + "1");
// console.log("25" - "4" + 10 + 3 - 5 + "1");
// console.log(21 + 10 + 3 - 5 + "1"); 
// console.log(31 + 3 - 5 + "1"); 
// console.log(34 - 5 + "1"); 
// console.log(29 + "1"); 
console.log("291"); 


//291 - Pawan, 2181 - Ahmed, 2111 - Sam (291)
