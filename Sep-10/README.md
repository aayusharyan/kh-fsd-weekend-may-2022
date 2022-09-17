# Sep-10, 2022

# NodeJS
- It is a software which allows execution of JS outside of browser.
- Alternatives of NodeJS
  - Deno
  - Bun
- To check the version, we run node -v.
- Latest is v18.

- When we were doing ReactJS.
- We will the code inside components in JSX Format.
- NodeJS will convert and check for errors and bundle into HTML, JS, CSS files.
- These files then can be executed by the browser.


## To Create a new Project
- Create the directory for the project.
- Open terminal inside that directory.
- Run npm init
- Press Enter to Skip the questions.
- It will complete and generate a file called as package.json.

## Taking input 
- To take an input, we can use built in readline functionality.
- However, it is kind of difficult to write, therefore we use a third party package called prompt-sync.

### Using Readline Approach
- When using this approach, we DO NOT need to install anything else.
- const readline = require('readline');
- Need to require. Then need to create an interface.
- const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
- Once the interface is generated, we can ask question.
- rl.question("What is ...?", (answer) => { console.l0g(`Welcome ${answer}`); });
- in the question method, we pass 2 things, first is the string that we want to print to get the data. Second is the callback function, this callback function will be trigerred when the user has answered the question. Pressed enter.
- In this callback method, we will get a parameter containing the actual answer.
- Once everything is done, we need to close the stream.
- rl.close();

### Using promt-sync package
- Since this is a third party package, we need to install it.
- npm install prompt-sync
- NPMJS Link - https://www.npmjs.com/package/prompt-sync
- Once installed, we need to require it.
- const prompt_fn = requrie('prompt-sync');
- For majority of packages, we need to call their functions.
- const prompt = prompt_fn();
- After this, just use prompt as regular method as we would use.
- const my_name = prompt("What is your Name?");
- It would first print the question and wait for the answer, as soon as the user enters the data, it will save it in the variable.

**Note: All user Inputs are of String Datatype, so if we are expcting a number, we need to Convert the Datatype.**

### Explicit Type Conversion
- We as a programmer as explicitly writing the convert logic.

### Implicit Type Conversion
- The datatype conversion is being automatically done by the compiler.

*In NodeJS, packages and Modules are same.*

## FS (File System)
- This is the access of files in the system.
- Using FS module, we can perform operations on the files and folders of the computer.
- Computer on which the nodeJS code is running.
- This is a built in part of NodeJS.
- We do not need to install any third party package.

- There are many methods that we can run on the filesystem
### readdir
- This is used to read the contents of a directory.
- This gives the list of all the files and folders in a given directory.
- This method takes 3 arguments:
  - Path of the directory.
  - Configuration Object.
  - Callback method when the task is completed. This callback method takes 2 parameters.
    - Error - This will have information if the reading fails.
    - Success (Data) - This will contain the array of files. The data.

### readFile
- This is used to read the data from a particular file.
- This is an alternative to fs.read() method.
- This method takes 3 arguments:
  - Path of the file, including the file extension.
  - Encoding of the file. This is a string, commonly we give "utf-8"
  - Callback method when the task is completed. This callback takes 2 parameters.
    - Error - Not able to read, maybe because file is corrupt or no permission.
    - Success (Data) - This will contain the contents of the file.

### writeFile
- This is used to write data to a file.
- This is an alternative to the fs.write() method.
- If the file already exists, this will override.
- If the file does NOT exist, it will create that file.
- This method takes 3 arguments:
  - Path of the file, including it's extension.
  - Data to be written in the file in String format. If we do not give a string, JS will try to convert it.
  - Callback method to be executed when the writing is complete or failed. This callback takes 1 parameter.
    - Error - Not able to write the file.

### appendFile
- This is used to append data to the file.
- Whatever existing data is there, it will NOT remove that, instead it will write the new data just after it, on the same line.
- For a new line, we use \n 
- This method takes 3 arguments:
  - Path of the file, including it's extension.
  - Data to be appended, this will be in String format. If it is not a String, JS will try to convert it into a string.
  - Callback method to be executed when the task is completed. This callback takes 1 parameter.
    - Error - Not able to append to the file.

### unlink
- This is used to delete.
- This method can delete a file or even a folder.
- This method takes 2 arguments:
  - Path of the file/folder.
  - Call method to be executed when the task is completed. This callback takes 1 parameter.
    - Error - Not able to delete the file, maybe no permission, or file already deleted.

*To check whether the error exists or not, check the err variable. Typically it is null when it is successful.*

### Further Reading
- There are many more methods and functionalities of the fs module.
- They can be found at - https://nodejs.dev/en/learn/the-nodejs-fs-module/


### Noodemon
- This is a third party package. Not part of built in NodeJS.
- This tool will re-run the code if there is any change in the file.
- This is very very very helpful for DEVELOPMENT.
- We really don't need it in production.
- It is like a Live Server but for backend.
- Since this is installed for only development purposes, we install it with a --save-dev flag.
- Command - npm install nodemon --save-dev
- The advantage is that we do not need to run the script again and again after every change. Nodemon will automatically do that for us. As soon as there is a change in file (as soon as we SAVE the file), nodemon will re-execute that file.
- When using nodemon, we don't start the script using node <filename>. Instead we use nodemon <filename>

**If we are using nodemon for the first time, we need to install it globally using the command - npm install nodemon --global.**

## Express
- This is a package which gives some functionalities to our node application.
- With those functionalities, the node application can act as a SERVER.


# Task:
## Task 1
- Create a nodejs code to take input from the user for comma separated string. From that string, return the maximum number.
- Example:
  - Inpuput : 1,2,10,15,25,100,530,-10,4
  - Output : 530

