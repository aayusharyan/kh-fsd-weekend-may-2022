## Jun-04, 2022

1. IF[Advanced]

1. Task: check number is odd or even.

1. GET number
2. IF number is divisible by 2 THEN
    a. DISPLAY Even
3. ELSE
    a. DISPLAY Odd
4. ENDIF
5. DISPLAY Task Completed


1. ENDIF
2. IF <condition> THEN

IF <condition>
   a. Whatever steps
ELSE
   a. If not satisfied...
ENDIF


## ELSEIF

-> Divisible by 3, Display Fizz
-> Divisible by 5, Display Buzz
-> Divisible by 3 and 5, Display FizzBuzz
-> Display number if others are not satisfied.


FUNCTION print fizz buzz
    1. LET remainder1 as remainder of counter divided by 3.
    2. LET remainder2 as remainder of counter divided by 5.
    5. IF remainder1 is 0 and remainder2 is 0:
        a. DISPLAY FizzBuzz
    6. ELSE:
        a. IF remainder1 is 0:
            i. DISPLAY Fizz
        b. ELSE:
            i. IF remainder2 is 0:
                1. DISPLAY Buzz
            ii. ELSE:
                1. DISPLAY counter
ENDFUNCTION


1. LET remainder1 as remainder of counter divided by 3.
2. LET remainder2 as remainder of counter divided by 5.
3. IF remainder1 is 0 and remainder 2 is 0 THEN
    a. DISPLAY FizzBuzz
4. ELSEIF remainder1 is 0 THEN
    a. DISPLAY Fizz
5. ELSEIF remainder2 is 0 THEN
    a. DISPLAY Buzz
6. ELSE
    a. DISPLAY counter
7. ENDIF

[Task] -> Pseudocode
-> You are managing a college and you have to award grades based on the marks. (Use elseif ladder)


marks >= 80 -> Outstanding
marks >= 70 -> Grade A
marks >= 60 -> Grade B
marks >= 50 -> Grade C
marks >= 40 -> Grade D
marks >= 35 -> Pass
marks >= -> Fail

1. GET marks
2. IF marks >= 80 THEN
    a. DISPLAY Outstanding
3. ELSEIF marks >= 70 THEN
    a. DISPLAY Grade A
4. ELSEIF marks >= 60 THEN
    a. DISPLAY Grade B
5. ELSEIF marks >= 50 THEN
    a. DISPLAY Grade C
4. ELSEIF marks >= 40 THEN
    a. DISPLAY Grade D
5. ELSEIF marks >= 35 THEN
    a. DISPLAY Pass
6. ELSE
    a. DISPLAY Fail
7. ENDIF
8. DISPLAY Task Completed


Task 2[Pseudocode] -> Get a letter from the user and check whether it is a volwel or a consonant?

1. GET character
2. IF character is a THEN
    a. DISPLAY It is a vowel
3. ELSEIF character is e THEN
    a. DISPLAY It is a vowel
4. ELSEIF character is i THEN
    a. DISPLAY It is a vowel
5. ELSEIF character is o THEN
    a. DISPLAY It is a vowel
6. ELSEIF character is u THEN
    a. DISPLAY It is a vowel
7. ELSE
    a. DISPLAY It is a consonant
8. ENDIF
9. DISPLAY Task Completed


## Type of the Data (Datatype)

-> Number (0, 1, 2, 3, ..., -5, -8, .....)
--> Integers (1, 2, 4, 5, ....., -9, -10...)
--> Decimals (1.5, 2.3, 7.8, 3.14) -> In technical terms, these are called as Floats (Floating Point Numbers)

-> String
--> Letter (Alpabets) -> a, b, c, d, e, ...... -> These are called as Character
--> Paragraphs/Words -> Pawan, Sam, Ishmael, Aayush
** Strings are ALWAYS represented inside quotation marks "" / ''.
--> DISPLAY "Task Completed"

1. GET character
2. IF character is "a" THEN
    a. DISPLAY "It is a vowel"
3. ELSEIF character is "e" THEN
    a. DISPLAY "It is a vowel"
4. ELSEIF character is "i" THEN
    a. DISPLAY "It is a vowel"
5. ELSEIF character is "o" THEN
    a. DISPLAY "It is a vowel"
6. ELSEIF character is "u" THEN
    a. DISPLAY "It is a vowel"
7. ELSE
    a. DISPLAY "It is a consonant"
8. ENDIF
9. DISPLAY "Task Completed"

Task: [Pseudocode] -> Take 2 inputs (password and confirm_password) and check if they match or not. If they match, display "Password Match", otherwise, display "Passwords don't match".

1. GET password
2. GET confirm_password
3. IF password is same as confirm_password THEN
    a. DISPLAY "Passwords Match"
4. ELSE
    a. DISPLAY "Passwords don't match"
5. ENDIF
6. DISPLAY "Task Completed"





1. GET password
2. GET confirm_password
3. IF password is same as "confirm_password" THEN
    a. DISPLAY "Passwords Match"
4. ELSE
    a. DISPLAY "Passwords don't match"
5. ENDIF
6. DISPLAY "Task Completed"

<- abcd1234
<- abcd1234

## Important
-> If we want to use a variable, we directly write it.
-> If we use quotation marks, it becomes a string.


1. GET character
2. IF character is a THEN
    a. DISPLAY "It is a vowel"
3. ELSEIF character is e THEN
    a. DISPLAY "It is a vowel"
4. ELSEIF character is i THEN
    a. DISPLAY "It is a vowel"
5. ELSEIF character is o THEN
    a. DISPLAY "It is a vowel"
6. ELSEIF character is u THEN
    a. DISPLAY "It is a vowel"
7. ELSE
    a. DISPLAY "It is a consonant"
8. ENDIF
9. DISPLAY "Task Completed"


<- i


Pseudocode -> Get a number m and print all even numbers from 2 to m,
<- 17
-> 2, 4, 6, 8, 10, 12, 14, 16

## FOR Loop
> Print number from 1 to 10

FOR num as every number between 1 and 10
    DISPLAY num
ENDFOR


1. GET m
2. FOR num as every even number between 2 and m
    a. DISPLAY num
3. ENDFOR
4. DISPLAY "Task Completed"


1. FOR time from 1000 to 1400:
   a. Study
2. ENDFOR
3. Enjoy Weekend

1. WHILE class is going on
   a. STUDY
2. ENDWHILE
3. Enjoy Weekend


Task -> Print all the characters from a to z. [Use for loop]

1. FOR letter as every character between "a" to "z"
    a. DISPLAY letter
2. ENDFOR
3. DISPLAY "Task Completed"

Task <- Take numbers from the user and print the sum.
-> "Enter the number"
<- 5
-> 5
-> "Do you want to enter another number?"
<- Yes
-> "Enter the number"
<- 7
-> 12
-> "Do you want to enter another number?"
<- Yes
-> "Enter the number"
<- 10
-> 22
-> "Do you want to enter another number?"
<- No
-> "Task Completed"


1. LET sum as 0
2. DISPLAY "Enter the number"
3. Get num
4. LET sum as sum + num
5. DISPLAY sum
6. DISPLAY "Do you want to enter another number?"
7. WHILE user enters "Yes"
    a. DISPLAY "Enter the number"
    b. GET num
    c. LET sum as sum + num
    d. DISPLAY sum
    e. DISPLAY "Do you want to enter another number?"
8. ENDWHILE
9. DISPLAY "Task Completed"


## Boolean
True or False
Yes or No

1. LET num as 1
2. WHILE True
    a. DISPLAY num
    b. INCREMENT num by 1
3. ENDWHILE
4. DISPLAY "Task Completed"

-> 1, 2, 3, 4, 5, 6, 7, 8, 9, 10...........


## Array
-> It is a collection of same datatypes.
[1, 2, 3, 0.4, 7, 9, 0, 1, 2] <- Array

Index -> Are the indentifiers of each element. Index starts from 0.

LET <variable name> as [1, 2, 3, 4, -8, -17, ....]

List of participants of today's session
LET participants as ["Aayush", "Ishmael", "Sam", "Pawan"]

Tell the whole array at once.

1. DISPLAY "Enter the numbers together"
2. GET num_array
3. LET sum as 0
4. FOR elem as every element of the num_array
    a. LET sum as sum + elem
5. ENDFOR
6. DISPLAY sum
7. DISPLAY "Task Completed"

LET count as element count of num_array
LET count as size of num_array
LET count as length of num_array



Task -> Take some numbers from the user and display the average. [Use array]
1. DISPLAY "Enter the numbers"
2. GET num_array
3. LET sum as 0
4. FOR elem as every element of the num_array
    a. LET sum as sum + elem
5. ENDFOR
6. LET count as size of num_array
7. LET avg as sum / count
8. DISPLAY avg
9. DISPLAY "Task Completed" 


Task -> Take some numbers from the user and display only even numbers from that list. [use array]
<- [2, 3, 7, 9, 10, 11, 100, 8, 81, 99]
-> 2
-> 10
-> 100
-> 8
-> "Task Completed"

Task -> Take a string from the user and display the number of volwels in that string:
<- "ishmael"
-> 3
HINT -> Strings are arrays of single charters.
"ishmael" -> ["i", "s", "h", "m", "a", "e", "l"]

1. DISPLAY "Enter the String"
2. GET st
3. LET count as 0.
3. FOR ch as every character of st
    a. IF ch is 'a' or ch is 'e' or ch is 'i' or ch is 'o' or ch is 'u' THEN
        i. INCREMENT count by 1
    b. ENDIF
4. ENDFOR
5. DISPLAY count
6. DISPLAY "Task Completed"


Assignment:
Task -> Take some numbers from the user and output the maximum number.
<- [1, 3, 5, 7, -15, 20, 0]
-> 20
<- [-1, -5, -7, -20]
-> -1