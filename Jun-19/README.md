# Jun-19, 2022


### lang attribute
- This defines the language in which we are delivering the content.
- This is NOT the language of the code. Your html is written in english.
- All the CONTENT that is delivered, we use lang to specify the language of that.

### sup
- This is a superscript tag.
- Makes the text go up.

### sub
- This is a subscript tag.
- Makes the text go below.

href is used to refer to a page. For example, navigation, or loading CSS. 

src is used just for loading something on the page. image, audio, video, script. Basically, attach a source.

### rowspan + colspan Attributes
- This is used to merge cells, rowspan will merge in rows and colspan will merge in columns.

### Video
- Used to show a video.
- We use it as a coupled tag. (Having a separate closing)
- Attribute
    - autoplay -> Automatically play (only works if the video is muted.).
    - muted -> Mute the video
    - controls -> Show the controls.
    - loop -> Play the video in a loop.

### source
- Defines the source for a video. We use src attribute and a type attribute to tell the type of the video.

### Audio
- Used to play an audio on the webpage.
- It's a coupled tag.
- needs source tag inside.
- controls attribute to show the controls.


### Meta
- Metadata
- Additional Data about something (some other data).

- UTF-8 -> Unicode Transformation Format


## CSS
- Cascading Style Sheet

- 3 ways to add CSS to your webpage.
1. External -> Adding the CSS as a separate file.
2. Internal -> Adding a style tag to your html.
3. Inline   -> Adding the CSS as a style attribute.

CSS basically is a set of rules.
Any element that satisfies that rule, will have the style applied.

selector {
  color: red; 
  background-color: green;
}


### Tag Name / Tag Type
- Selects the elements matching by the tag name.
- For example, table, body, p, h3, button, a, ...


### Attribute
- This selects based on the attribute name and value.
- This is denoted by square brackets. []
- The typical syntax is [attribute_name=attribute_value]
- If you don't have a value and just want to check by name, you can just use [attribute_name]
- [required] -> This will apply style to all elements that have the required attributed. Helpful for forms.


### Class
- These are special attributes.
- 1 element CAN have multiple classes. class="class1 class2"
- 1 class CAN be applied to multiple elements.
- Give meaningful class names.


## Id
- It is an identifier used to identify and SPECIFIC element from the document.
- 1 element can have maximum of one id.
- 1 id can be given to 1 element only. (it HAS to be unique).
- This is Also an attribute.

## Universal Selector
- It is denoted by *
- The style we write here will be applied to all the elements.


Specificity -> How specific we are writing the CSS.
1. id
2. class
3. attribute
4. Tag Name
5. Universal


### Casing
- snake_case -> Everything lower and words separated by _. (Used for file name)
- kebab-case -> Everything lower and words separated by - (Use for class names in CSS)
- camelCase ->  Everything lower but next word first letter is Capital.
- PascalCase -> First letter of EVERY word is capital, other small.
- UPPERCASE / lowercase.

Comments in CSS are written 
/*
between 
Also, multi-line.
*/


- text-align
- border
- display



-> CSS
- selectors
- colors (RGB, HEX)
- display
- border
- fonts

- Some tasks


Task 1:
-> Create Calculator HTML & CSS.

Task 2:
-> Create a cart page (Screenshot on Discord)

Task 3:
- Create the login page (Screenshot on Discord)