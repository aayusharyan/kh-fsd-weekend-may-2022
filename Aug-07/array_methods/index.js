//Array find
// const participants = [{ 
//   name: "Ishmael", 
//   role: "student"
// }, {
//   name: "Aayush",
//   role: "educator"
// }];

// const edu = participants.find((element, index) => {
//   if(element.role == "educator") {
//     return true;
//   }
//   return false;
// });

// console.log(edu);


// const isEducatorPresent = participants.some((e, i) => {
//   if(e.role == "educator") {
//     return true;
//   }
//   return false;
// })

// console.log(isEducatorPresent);



// const arr = ["a", "b", "c", "d", "e", "f", "g", "h"];
// console.log(arr);

// console.log(arr.slice(3)); //Starting at index 3. d, e, f, g, h
// console.log(arr.slice(3, 5)); //Start at 3, end before 5. d, e

// console.log(arr.slice(-3)); // Last 3 elements





// const participants = [{ 
//   name: "Ishmael", 
//   role: "student"
// }, {
//   name: "Aayush",
//   role: "educator"
// }, {
//   name: "Pawan",
//   role: "student"
// }];

// const studentList = participants.filter((e, i) => {
//   if(e.role == "student") {
//     return true;
//   }
//   return false;
// });

// console.log(studentList);


const items = [{
  name: "bread",
  price: 1,
  quantity: 2
}, {
  name: "Potato Chips",
  price: 0.75,
  quantity: 3
}, {
  name: "Cola",
  price: 1.50,
  quantity: 2
}];

// const totalPrice = items.reduce((cumulative, current_element, index) => {
//   const current_price = current_element.price;
//   const total = cumulative + current_price;
//   return total;
// }, 0);

// console.log(totalPrice);

// const sorted = items.sort((a, b) => {
//   return b.price - a.price;
// })

// const sorted1 = items.sort((a, b) => b.price - a.price);

// console.log(sorted)

//Array Destructuring
// const arr  = [1, 2, "abcd"];
// console.log(arr);

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// console.log(a, b, c);

// const [x, y, z] = arr;

// console.log(x, y, z);


//Object Destructuring
const obj = {
  first_name: "Ishmael",
  last_name: "Muhikira",
  role: "learner"
};

console.log(obj);

// const first_name = obj.first_name;
// const last_name = obj.last_name;
// const role = obj.role;

// console.log(first_name, last_name, role);


const {first_name, last_name, role} = obj;

console.log(first_name, last_name, role)