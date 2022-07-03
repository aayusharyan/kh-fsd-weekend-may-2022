console.log(typeof document);

let about_me = {
  "first_name": "Aayush",
  "last_name": "Sinha",
  "country": "India"
};

// console.log(about_me);

// console.log(about_me["last_name"]); //Don't do this generally.
// console.log(about_me.last_name); //Recommended, more clean and easy to understand;




// let key = "first_name";
// console.log(about_me[key]); //Here, access the index stored inside key variable.
// console.log(about_me.key); //Here, access the "key" property (that doesn't exist).

// about_me.role = "Educator";

// console.log(about_me);


// let participants = ["Aayush"];

// participants[1] = "Pawan"; //Add by index, if we know it.
// participants.push("Ismael"); //Always push at the last.
// console.log(participants);

let session_information = {};

session_information.date = "Jul-03, 2022";
session_information.participant_count = 5;
session_information.is_live = true;
session_information.participants = ["Ahmed", "Sam", "Ismael", "Pawan", "Aayush"];

session_information.hello = function () {
  console.log("Hello from the session");
}

// session_information.hello();
// console.log();

// console.log(typeof console);

// console.log(document);
// console.log(document.body);

// let doc_keys = Object.values(session_information);
// console.log(doc_keys);

// function helloEveryone () {
//   console.log("Hello everyont");
// }

// let helloEveryone = function() {
//   console.log("Hello Everyone");
// }
// console.log(typeof helloEveryone);
// helloEveryone();

// I want to get the elemtn by it's id.
// From my document, I Want to get element by id.
// From my document, I want to getElementById
// document.getElementById("<id of the element>");

// let button_2 = document.getElementById("some_btn");
// // console.log(button_2);
// button_2.innerText = "Updated button 2";
// button_2.style.backgroundColor = "#00FFFF";
// console.log(button_2.innerText);

// let some_elements = document.getElementsByClassName("text");
// console.log(some_elements);

// let all_buttons = document.getElementsByTagName("button");
// console.log(all_buttons);

// document.getElementsByName("");

// document.querySelector("[att=name]");
// document.querySelectorAll("")

// let elements = document.querySelectorAll("*");
// console.log(elements);

function check_password() {
  let pass_inputs = document.getElementsByName("password");
  // console.log(pass_inputs[0]);
  let pass = pass_inputs[0].value;
  console.log(pass);
}