# Jul-02, 2022


## switch case:
- This is an alternative to your if else ladder. The purpose of this is to compare for equality. It will check whether it is same or not. It does not care for less than, or greater than.

switch(<variable you want to check>) {
  case <condition>:
    //Logic to execute when the condition matches.
    break;
  case lgdklg:

  default:
    //Logic to execute when NONE of the cases match.
    break;
}

count the number of vowels in a string.

## alert
- This is a built in function. But this will show a popup.
- This popup can be seen even when the dev console is closed.
- Alert ONLY shows the String format.

## prompt
- Used to take input from the user.
- Inputs are ALWAYS in string.
- If we pass a string inside the prompt, it will be used as a hint. It will be show to the user.

## OR (||)
if(<condition1> || <condition2>) {

}
- This means if any ONE of the conditions are satisfied, then the if will be executed.

## AND (&&)
if(<condition1> && <condition2>) {

}
- This will be executed ONLY when ALL of the conditions are satistied.

## functions
- Write once, use multi times.

function <function_name> (<inputs/parameters optional>) {
  //Logic to execute.
  // return/output (optional)
}

<function_name>(<send_data optional>);


Assignment Task ->
You have been hired by a restro. and you need to develop their online order system.
- Have two buttons.
1. Order item.
-> It will display a prompt with menu (1. Sandwich, $1.5, 2. Buger $1.7, 3. Fries $0.8).
-> Whatever the user enters, 1, 2, 3. Add to the total. If user enters anything else, just display invalid choice.
2. Bring the bill
-> alert the total variable.