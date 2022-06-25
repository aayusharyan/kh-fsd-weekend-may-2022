# Jun-25, 2022

## text-align
- Align the text according to the need. (left, right, center, justify).

## RTL and LTR languages
- Right to Left
- Left to Right
- Because of this, instead of using left and right. We should use start and end properties.
LTR -> Start is left and end is right
RTL -> Start is right and end if left

## inheritance
- Inherit the property from it's closest ancestor which has that property.

## display: none;
- This will hide the element. The element will NOT be removed from the HTML, but it will be removed (not shown) on the viewport.

## display: block;
- It will by default, take the whole width.
- It will BLOCK the line, that means, next element will go to the next line. That means, even if we change the width, it will still be blocking, next element goes in the next line.

## display: inline;
- It will take width of the content inside. That means, we CANNOT customize the width.
- It will ALLOW other elements to be on the same line.

         items in the same line, Custom width
inline: ✔️, ❌
block: ❌, ✔️
inline-block: ✔️, ✔️

## dispaly: inline-block;
- This allows items to be in the same line. (good thing from inline).
- This allows customization of width and height. (good thing from block).

## Colors
CMYK - Cyan, Magenta, Yellow, Key (Black)
RGB - Red, Green, Blue

8-bit color: 2 ^ 8 -> 256 [0-255]
RGB [0-255], [0-255], [0-255]

- RGB we write using rgb(100, 150, 200);
- HEX is the decimal red, green and blue, converted into hexadecimal.
- Hex is made up to 6 characters. [2-red][2-green][2-blue].
- To use hex, we use #<6 character hex code>.

## fonts
- font-family -> A family of multiple styles of a font.
- We can import from google fonts (fonts.google.com).
- Difference between serif font family and sans-serif font family
- In serif, we have (sharp) edges around the letters whereas in sans-serif, we don't have those.

## font-size -
- Change the size of any text.

## Units of measurement
- These are used to measure distance, size, spacing, etc etc. Absolute unit is pixel.

## pixel
- 1 single dot that can be individually controlled by a screen.

## em
- This is a relative unit of measurement, this is defined by setting from the computer (system).
- It allows cuatomization and we can set what 1em is equal to. em will pick the value from it's nearest ancestor that have the font-size set.

## rem 
- This is also a relative unit of measurement. This allows us to relate to root em.
- em on the other hand will relate to the nearest element with the font-size property.


## Box Model
- Any element is made up of a box.
- That box is made up of 4 things.
- content -> The actual content.
- padding -> The space between your border and the content (space INSDE the element).
- border -> Boundary of the element.
- margin -> The space OUTSIDE of the element.


## output
- cosole.log("Data");

## Creating a variable
- let <variable_name> = <variable_value>;

## Task 1:
-> Take 2 variables, say 10 and 25.
Assign their sum to another variable.
 Print the sum

## Task 2:
-> Take 3 variables, and print average of that.






- positon (+ z-index)
- HTML Entities
- display: flex
- opacity (rgba)
- visibility
- text-decoration
- Some more units
- intro to JS


Google Home Page copy.

