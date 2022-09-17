// console.log("Hello World");


// const num1 = 10;
// const num2 = 20;
// console.log(num1 + num2);



// const prompt_fn = require('prompt-sync');
// const prompt = prompt_fn();

// const my_name = prompt("What is your name?")
// console.log(`Welcome ${my_name}`);

// Task - Take 2 numbers from the user and print sum (addition) of that numbers.


// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("What is your Name?", (answer) => {
//   console.l0g(`Welcome ${answer}`);

//   rl.close();
// });

// Task - Take a string from user and calculate the number of vowels it contains.


const fs = require('fs');


// fs.readdir("./", {}, (err, data) => {
//   console.log(data);
// });

//Task: Read the contets of parent of parent directory.
// -> ../../

// fs.readFile("./data.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

//Task: Create a new file call it as password.txt. Store like ABCD or some word as password.
//Then, take the user input and compare whether it is same at the stored password or different.
//If it is same, show Successful, otherwise, show failed.

// const data = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a feugiat nulla, sed vehicula massa. Maecenas varius accumsan tortor interdum porttitor. In non imperdiet nisi. Suspendisse ut nibh finibus quam commodo porta. Pellentesque dignissim, sem eget gravida finibus, arcu metus euismod leo, at porttitor arcu ex et libero. Nunc eu rutrum urna, ac porttitor neque. Duis laoreet sodales suscipit. Morbi scelerisque quam a odio maximus, non volutpat dolor dapibus. Morbi vel nisl in odio ultricies semper a eu velit. Mauris et consectetur felis. Quisque vel erat et quam pretium semper vel sed risus. Nullam id tincidunt augue. Aliquam aliquet metus id dui tristique, sed dictum arcu malesuada.

// Aenean ultricies tincidunt ipsum, non tempus arcu consectetur laoreet. Nulla maximus enim eu ipsum iaculis sodales. Aliquam volutpat lobortis laoreet. Aliquam at molestie erat. Sed commodo tincidunt leo a feugiat. Nullam bibendum ultrices neque, a consequat odio commodo at. Proin pellentesque placerat augue. Integer sagittis volutpat lorem malesuada vulputate. Etiam hendrerit mi finibus dignissim commodo.

// Suspendisse pharetra eros mi, non placerat justo finibus et. Sed vel aliquam lorem. Morbi porttitor iaculis convallis. Nunc nibh nunc, dignissim fermentum mattis ac, semper eget massa. Nam varius magna vitae dictum elementum. In et ipsum at nibh blandit scelerisque. Sed ut purus molestie, bibendum massa ut, pharetra ligula. Fusce sit amet libero non neque bibendum viverra.

// Ut sagittis ornare tellus, sit amet efficitur massa semper sit amet. Proin sit amet varius ligula, non varius eros. Curabitur in orci consectetur, condimentum mi in, vulputate mi. Ut egestas facilisis sem sit amet vulputate. Aliquam arcu orci, fermentum at massa nec, tempus sodales orci. Vestibulum tincidunt nibh tellus. In a turpis quis ipsum blandit faucibus sit amet quis leo. Donec iaculis nec magna sed vulputate. Donec sed tincidunt mi. Donec sit amet lacus vel ex aliquam porttitor tempus sed lacus.

// Cras interdum erat vitae velit luctus dictum. Maecenas eget bibendum ante. Aliquam dignissim dolor non dolor consectetur mattis. Vivamus eget tortor vel lectus viverra tempus at in tortor. Morbi volutpat sit amet dolor a varius. Etiam nec dolor in diam faucibus placerat vel ut libero. Cras vulputate viverra est. Vivamus sollicitudin nibh ut porta pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vitae dolor pulvinar, blandit massa quis, auctor enim. Nulla pretium a sapien vel eleifend. Vivamus ullamcorper nisl orci.`;


// fs.writeFile("./data.txt", data, (err) => {
//   console.log("Write Successful");
// });

//Task: Continuing on the Previous password task.
//This time, comment the reading logic, instead of that, when asking for the password. Write that in the password file.


// fs.appendFile("./data.txt", "1234", (err) => {
//   console.log("Appending Successful");
// });

// fs.unlink("./data.txt", (err) => {
//   console.log(err);
//   console.log("Deletion successful");
// })

const data = "AB\nCD\n12\n34"
fs.writeFile("./data.txt", data, _ => {
  console.log("Written successfully");
})