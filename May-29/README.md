## May-29, 2022

Task:
Calculate the total balance in the wallet.

1. Take out all money from wallet.
2. Mentally think of total balance as 0.
3. Pick a note/coin.
4. Add the face value of that note/coin to the total balance.
5. Do I have more coin/note?
  a. If yes, then go to step 3.
  b. If no, then end.


1. Variable (Container)
-> Variable because we can Variate (Change the data).

Assume you are a teacher and you want to calculate how many students are in your session.

1. Initially, assume total count as 0.
2. Pick a roll number (exclude already picked up).
3. Ask if that roll number is present or not?
  a. If yes (present), then increase the total count by 1.
  b. If no, then do nothing. 
4. Check if more roll numbers are pending?
    i. If yes (more students are pending), then go to step 2.
    ii. If no, then roll count is done, total number of students in the session are the total count I get.


[Pseudocode] - Calculate the total hours you have worked in the current month.

[Main Logic]
1. Assume hours worked this month as 0.
2. Pick a date.
3. Is it a holiday/leave that day?
  a. If yes, do nothing.
  b. If no, then add the day's work hours to the total hours.
4. Do I have more days in the calendar?
  a. If yes, pick next day and go to step 3.
  b. If no, then return the total hours.

[Function]
calculate the day's hours
1. Get check in time.
2. Get check out time.
3. Get lunch hours.
4. Calculate hours as checkout - check in
5. subtract lunch hours from hours.
6. Return hours for the day.


2. Constant:
-> Just like a variable, but the value is NEVER CHANGED.

Guideline to use (Proposed by Stanford University):
1. Get Ready and dressed.
2. IF it is raining outside:
  a. Take Raincoat.
3. ELSE:
  b. Take Sunglasses.
4. Start the car and go to the park.

[Main]
1. Assume hours worked this month as 0.
2. Pick a date.
3. IF today is holiday:
  a. Do nothing, enjoy!
4. ELSE:
  a. Add the day's work hours to the total hours.
5. IF I have more days in the calendar?
  a. Pick next day and go to step 3.
6. ELSE:	
  a. Return the total hours.

[Function]
Calculate the day's hours
1. Get check in time.
2. Get check out time.
3. Get lunch time.
4. Calculate hours as checkout - check in
5. subtract lunch hours from hours.
6. return hours for the day.

Take an Input -> GET the data from the user.
To show an Output -> SHOW/DISPLAY/PRINT the data.


Take a number and check if it is positive or negative.
I am assuming 0 is positive.

GET the number.
IF number is greater than or equal to 0:
    DISPLAY You have entered a positive number
ELSE:
    DISPLAY You have entered a negative number.


[Pseudocode]
Check whether the given number is even or odd.

1. GET the number
2. Divide the number by 2 and store the remainder.
3. IF remainder is 0:
    a. DISPLAY Entered number is even.
4. ELSE:
    a. DISPLAY Entered number is odd.

Syntax:  FUNCTION <function name>
Example: FUNCTION check if even


ENDFUNCTION


Syntax:  CALL <function name>
Example: CALL check if even


To loop through first 15 numbers and print if odd or even.
1, 2, 3, 4..... 15

Syntax for assuming a variable.
LET/SET <variable name> as <variable value>

Example: LET counter as 1


1. START
2. LET counter as 1
3. CALL Check if even for counter
4. Increment the counter by 1.
5. IF counter < 15:
    a. Go to Step 3.
6. ELSE:
    a. END


FUNCTION Check if even
    1. Divide the number by 2 and store the remainder.
    2. IF remainder is 0:
        a. DISPLAY Entered number is even.
    3. ELSE:
        a. DISPLAY Entered number is odd.
ENDFUNCTION


1. FizzBuzz Game [Pseudocode]
Start with 1 and go to 20. 
For each number:
If the number is divisible by 3, then display Fizz, 
if the number is divisible by 5, then display Buzz, 
if the number is divisible by 3 and 5, then display FizzBuzz.
If not divisibile by any of them, then display the number.


1. START
2. LET counter as 1
3. IF counter < 20:
    CALL print Fizz Buzz with counter
    INCREMENT counter by 1
    GOTO step 3.
4. ELSE
    END

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

Nesting -> 1 if inside another if condition.

Print first 10 numbers (1, 2,3..... 10)

LET count as 1
IF count is less than or equal to 10:
   DISPLAY count
   INCREMENT count by 1
   GOTO step 2
ELSE
   END

LET count as 1
DISPLAY COUNT
INCREMENT count by 1
IF count is <=10:
    GOTO Step 2
ELSE
    END


[Concept]
WHILE Loop

LET count as 1
WHILE count <= 10
    DISPLAY count
    INCREMENT count by 1
ENDWHILE
END

[Pseudocode]
Print all the even numbers from 1 to <=25.

START
LET count as 1
WHILE count <= 25
    IF count is divisible by 2:
        DISPLAY count
    INCREMENT count BY 1
ENDWHILE
END 

It is possible for if condition to NOT have any else.

```
ELSE:
    Do nothing
```
^ We don't need it anymore.


[Pseudocode]
Take a number from the user and check if that number is a prime number or not.
A prime number is a number which cannot be divided by another number from 1 to n (except 1 and n).
7 -> 7/1, 7/2, 7/3, 7/4, 7/5, 7/6, 7/7 -> Prime Number
4 -> 4/1, 4/2, 4/3, 4/4  -> Not a Prime Number

START
GET number
LET count as 2
WHILE count < number:
    LET remainder as remainder of number divided by count
    IF remainder is 0:
        DISPLAY Not a Prime
        END
    INCREMENT count by 1
ENDWHILE
DISPLAY Prime Number
END


[Tasks - Pseudocode]
[1]. Write a function to print all the prime numbers between 1 and 100.
[2]. Write a function to calculate the sum of all the odd numbers between 1 and 35.
[3]. Take 2 numbers from the user. m and n. Then write a program to give the power of m^n. (m*m*m*m..... n times)
Example:
m = 4
n = 7
-> 4*4*4*4*4*4*4 = 16384

m and n.
3 and 4

3*3*3*3 = 81

2 and 5
2*2*2*2*2 = 32


5 divided by 2

2.5
2 times 2 + 1 as remainder.


Soln (Q3).

GET m
GET n
LET counter as 1
LET product as 1
WHILE counter <= n
    LET product as product * m
    INCREMENT counter by 1
ENDWHILE
DISPLAY product
END