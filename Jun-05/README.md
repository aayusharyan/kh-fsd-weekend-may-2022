## Jun-05, 2022

-> Linux -> It is a kernel (Core)
--> Based on this, there are many operating systems available

--> CentOS (This is linux based, but used for servers)


--> Ubuntu has Graphical User Interface.
--> CentOS does not have any user interface.

GUI -> Graphical User Interface
CLI -> Command Line Interface


Virtualbox?
--> It makes a virtual machine.


# Commands:
## whoami
--> This tells who is the current logged in user.

# date
--> Tells you the current date and time in your local time zone.

# clear (cls for windows)
--> Clears everything that we wrote in the terminal.

# history
--> This shows the history of all the commands executed.

## ls
--> show the list of files & folders in that directory.

## cd <directory_name>
--> Change Directory (Folder) into that folder.
--> In order to go to parent directory, we do cd ..
--> Use Tab key for autofil.l

## pwd
--> print working directory. This prints the directory where we are currently in.
-> / is the Root in Linux.

--> [Helpful] Use arrow keys as auto suggest for commands from history.

## mkdir <directory_name>
--> This creates a new directory in the current working directory.
--> If we want to create multiple directories, then separate by space
--> If we want to include space in the directory name, then put that inside quotation marks.

## vi <file_name>
--> Default mode (no command)

-> Go to insert mode (By pressing i)

--> At any time, go back to default mode, by pressing Esc

-> Navigate using arrow keys or hjkl
H goes Left
J goes down
k goes up
l goes right

--> In order to save, we go to default mode, type :w
-> w means write
-> q means quit
-> q! means quit without saving. (Because if you have changed something and type :q, it say error.)
-> :wq to write and quit at the same time.


~ represents the home (/home/<usename>)

$ says that the terminal is present. (We are inside a Shell)



## cat <file_name>
--> Shows the last lines of a file (Useful for large files). Does not allow edit. 

## touch <file_name>
--> This creates an empty file with that name.


## ll
--> Used to show more descriptive list of all the files and folders. It shows the permission, the size, the owner, the last modified timestamp.


## chmod <permission> <file_name>
--> This allows us to set permissions for any specific file.

0, 1, 2, 3, 4, 5, 6, 7

     rwx
0 -> --- -> No access
1 -> --x -> Execute only
2 -> -w- -> Only write
3 -> -wx -> Write and execute
4 -> r-- -> Just read
5 -> r-x -> Read and execute
6 -> rw- -> Read and Write, no execute
7 -> rwx -> Full


## cp <source> <destination>
--> cp stands for copy
--> If the destination is ending with slash, it will treat as a folder and save the file inside that folder with same name. Or we can give our own file name so it will paste and rename.

## mv <source> <destination>
--> Move the file

## rm <file_name>
--> removes the file.
--> In order to remove a folder, use -Rf


### Flags
--> These are additional parameters/options we can pass to any command.


## man <command>
-- > This gives the manual for any command. Useful for checking the flags for a command.

## whatis <command>
--> It shows 1 line information about that command.

## find <starting_point> -name <file_name>
--> This returns the list of all the paths that match the file.


** NEVER RUN THIS COMMAND `rm -Rf /`

## apt-get
--> This is the package manager for ubuntu.
--> In order to install, we need to run `sudo apt-get install <package_name>`


## sudo 
--> Escalating priviledges
--> You are going into admin mode.
--> Every time we run sudo, it will ask for password.




-> nano
-> vim (vi improved)
-> grep / find / locate
-> apt-get install / apt-get update / apt-get remove
-> cal
-> sudo (Super User permissions)
-> Environment Variables
-> printenv
-> ps
-> kill


Assignment
Task 1 -> Check whether the given string is palindrome or not.
<- abcdcba
-> Yes
<- abcd
-> No
<- racecar
-> Yes
<- mother
-> No
<- mom
-> yes

Task 2 -> Take an array of strings. Print the string of maximum length
<- ["Gurpreet", "Aayush", "Sam", "Ishmael", "Pawan"]
-> "Gurpreet"

Task 3 -> You have to take a number and check whether it is an armstrong number or not.
-> sum of each digit raised to the power of n should be the number.

<- 153
-> Yes
<- 1634
-> Yes
<- 1
-> Yes
<- 3
-> Yes
