## Create elements in the DOM using javascript ! 

Consider the following 

```html
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
```

    div.display
    .display
    #container > .display
    div#container > div.display

Based on that 

```javascript
const container = document.querySelector('#container');
//This would simply select container id

console.dir(container.firstElementChild);                      
// Here this would select from the container its first child
//IE .display

const controls = document.querySelector('.controls');   
// Here we select all the class controls element

console.dir(controls.previousElementSibling);
//Here we select previous element sibiling 
//IE display , based on the above html code 
```

#### Query Selectors

element.querySelector(selector)
> Selects one instance 
element.querySelectorAll(selectors)
> Selects all instances

If I want to create an element of some type I use the following method
```javascript
const div = document.createElement('div');
```

Note that this element is not yet added to the html page rather is
stored in memory until it is added using the command below

#### Appending elements

> ParentNode.appendChild(childNode);
Appends a child to the parent node as its last node in the DOM

> parentNode.insertBefore(newNode, referenceNode);
Appends a child node to a parent node before a child noded in the DOM

#### Removing elements

>parentNode.removeChild(child);
Removes a child node from then parent node

#### Adding inline style in js

Given we have div variable in js, we can add style to it using the 
following three different methods.

```javascript
div.style.color = 'blue';                                      
// adds the indicated style rule

div.style.cssText = 'color: blue; background: white;';          
// adds several style rules

div.setAttribute('style', 'color: blue; background: white;');    
// adds several style rules
```

Regarding kebab cases css style rules ie something-like-this 
You can use either camel case like somethingLikeThis
or also
element.style["background-color"]; Incase of background-color rule
or something like element.style.cssText = "your css rules goes here"
