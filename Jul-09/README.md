# Jul-09

# event 
- Any thing that happends on a webpage, happens via an event.
- Any action I take, (click, type, playing video, changing volume).
- Events in HTML attribure start with the "on" name.

# for attribute
- Used to link html elements with other html elements. For uses ID.

**In JS, everything is an object.**

# e.target
- This is the HTML element reference of the event that has taken place.
- We can use this to manupulate the DOM element on which we had connected the listener.

# e.preventDefault()
- This is a function on the event. This prevents from default functionality execution.
- Simple example, form submission.

## Event Handler
- This is the function that we write to add logic on the event.
- What to do when an event takes place. We write that logic inside event handler.


# Like / Dislike counter

let counter = parseInt(<str_variable>);

+ operator
-> Mathematical addition -> 1 + 1 = 2
-> String Concatenation -> "abc" + "def" = "abcdef"


parseInt -> Convert into integer.
Number -> Converts into number data type (decimal or integer).


## Event Listener (Event Handler)
- addEventListener -> Used to attach any event handler to the DOM element. We give 2 arguments, first one is the event type and second is the function (what to do when that event is triggered).

## Callback
- A function that is passed as an argument to another function is called as a callback function.
- The purpose is, then the time is ready, the callback function will be called from the main function.

# Task - Create a stopwatch application.
Have 2 buttons
button 1 -> Have Start/Pause functionality.
button 2 -> Have reset functionality.

Starting will start the stopwatch and clicking that button again will pause. Clicking again will resume.

On pause, if I click on the reset button, it will reset the timer back to 00:00:00.