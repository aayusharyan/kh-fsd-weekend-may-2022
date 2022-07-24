// Number.prototype.isEven = function() {
//   if(this % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const num = 28;
// console.log(num.isEven());

// class Animal {
// }

// class Human extends Animal {
//   static type="Human";
//   constructor(person_name, birth_year) {
//     super();
//     this.my_name = person_name;
//     this.year_of_birth = birth_year;
//   }

//   sayHello() {
//     console.log(`Hi, I am ${this.my_name} and I am ${this.#getAge()} years old`);
//   }

//   #getAge() {
//     return 2022 - this.year_of_birth;
//   }

//   consoleMyself() {
//     console.log(this);
//   }

//   static whatAmI() {
//     console.log("I am human");
//   }
// }

// Human.whatAmI();
// console.log(Human.type);

// class Student extends Human {
//   constructor(name, birth_year, batch) {
//     super(name, birth_year);
//     this.my_batch = batch;
//   }

//   attendSession() {
//     console.log(`I will attend the session for ${this.my_batch}`);
//   }
// }

// class Educator extends Human {
//   sayHello() {
//     console.log("Hi, I am an educator");
//   }
// }

// const educator_obj = new Educator("Aayush", 1990);
// educator_obj.sayHello();


// const me = new Human("Aayush", 1990);
// me.sayHello();
// console.log(me.#getAge());
// console.log(me);

// const me = new Student("Aayush", 1990, "fsdi-09");
// me.sayHello();
// me.attendSession();

// const btn1 = document.getElementById("btn1");
// const btn2 = document.getElementById("btn2");

// btn1.addEventListener('click', _ => {
//   console.log("Button 1 clicked");
// })

// btn2.addEventListener('click', _ => {
//   console.log("Button 2 clicked");
// })

// console.log("Step 1");
// console.log("Step 2");
// setTimeout(_ => console.log("Step 3"), 0);
// console.log("Step 4");

const fetch_promise = fetch("https://reqres.in/api/users");
console.log("Continuing my work...");


fetch_promise.then(response => {
  // console.log(response);
  const json_promise = response.json();
  json_promise.then(json_data => {
    display(json_data);
  })
});


const display = data => {
  const parent = document.getElementById("user_list");
  for (let i = 0; i < data.data.length; i = i + 1) {
    const single_data = data.data[i];
    const email = single_data.email;
    const new_li = document.createElement("li");
    new_li.innerText = email;
    parent.appendChild(new_li);
  }
}

//Task A
//Show a list of all the users.