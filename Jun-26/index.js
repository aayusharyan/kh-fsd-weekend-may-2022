// console.log("ABCD"); //console.log("Hi hi hi hi");
// console.log("Another one");

/*
console.log("Line 1");
console.log("Line 2");
console.log("Line 3");
*/


// let number1 = 10;
// let number2 = 20;
// let sum = number1 + number2;
// console.log(sum);

// let aayush = false;

// if (aayush == true) {
//   console.log("Join the session");
// } else {
//   console.log("Enjoy the week");
// }



// Task - Assume a number and check whether it is true or false.
// let number = 5;
// let remainder = number % 2;
// if(remainder == 0) {
//   console.log("Number is even");
// } else {
//   console.log("Number is odd");
// }

// Task - Assume 3 numbers and print the largest of them.
// let num1 = 2;
// let num2 = 3;
// let num3 = 4;

// if(num1 > num2) {
//   if(num1 > num3) {
//     console.log(num1);
//   } else {
//     console.log(num3);
//   }
// } else if(num2 > num3) {
//   console.log(num2);
// } else {
//   console.log(num3);
// }

// if(<condition1> &&  <condition2>)
// if(num1 > num2 && num1 > num3) {
//   console.log(num1);
// } else if(num2 > num1 && num2 > num3) {
//   console.log(num2);
// } else if(num3 > num2 && num3 > num1) {
//   console.log(num3);
// }

// Task -> Assume a number and print FizzBuzz Accordingly.
// If number is divisible by both 3 and 5. Then fizzbuzz
// % 3 -> fizz
// % 5 -> Buzz
// Nothing -> Number

// let number = 72;
// let remainder3 = number % 3;
// let remainder5 = number % 5;

// if(remainder3 == 0 && remainder5 == 0) {
//   console.log("FizzBuzz");
// } else if(remainder3 == 0) {
//   console.log("Fizz");
// } else if (remainder5 == 0) {
//   console.log("Buzz");
// } else {
//   console.log(number);
// }


// Task - Print first 10 numbers.
// let number = 1;
// while (number < 10) {
//   console.log(number);
//   number = number + 1;
// }

//Task Print the first 10 numbers in REVERSE!.
//10, 9, 8, 7 ...
// let number = 10;
// while(number >= 0) {
//   console.log(number);
//   number = number - 1;
// }

//Task Print even numbers between 1 and 45;
// let number = 1;
// while (number <= 45) {
//   if(number % 2 == 0) {
//     console.log(number);
//   }
//   number = number + 1;
// }

// let index = 7;

// let participants = ["aayush", "gurpreet", "ismael", "sam", "pawan"];
// // console.log(participants[index]);

// let index = 0;
// while(index < 5) {
//   console.log(participants[index]);
//   index = index + 1;
// }


//Task -> Assume an array and print all positive numbers.

// let number_array = [10, -8, 7, 4, -10, -5, 0, 3, -1.5];

// let index = 0;
// while(index < 9) {
//   if(number_array[index] > 0) {
//     console.log(number_array[index]);
//   }

//   index = index + 1;
// }

//Easy
// let number_array = [10, -8, 7, 4, -10, -5, 0, 3, -1.5];
// let index = 0;

// while(index < number_array.length) {
//   let single_number = number_array[index];
  
//   if(single_number > 0) {
//     console.log(single_number);
//   }

//   index = index + 1;
// }


//Task -> Assume an array of numbers and print from that only EVEN numbers.

// console.log(number_array.length);

//For loop

// let arr =  [5, 8, 9, 10, -2, 4, 7, 14, 100, 123];
// for(let index = 0; index < arr.length; index = index + 1) {
//   let single_element = arr[index];

//   if(single_element % 2 == 0) {
//     console.log(single_element);
//   }
// }


//Task -> Assume an array and print the SUM of all elements of that array.
// let nums = [1, 2, 3, 4, 5, 67, 7, 8, 10];
// let sum = 0;
// for(let i = 0; i < nums.length; i = i + 1) {
//   sum = sum + nums[i];
// }
// console.log(sum);

// let my_name = "2468";
// for(let i = 0; i < my_name.length; i = i + 1) {
//   console.log(my_name[i]);
// }

// console.log(1 + 2);
// console.log("1" + "2");

// let first_name = "Aayush";
// let last_name = "Sinha";
// console.log(first_name + " " + last_name);

console.log(1 + "2");