## CSS Intro !
CSS consists of the following 

Selector , Inside has a property and a Value.

## Selectors

#### Universal selector "*"

```css
* {
    color : purple;
}
```
> This one selects all elements and apply the desired style to them.

#### Type selectors 

```css
div {
    color: white;
}
```

> This is the normal approach.

#### Class selectors 

```css 
.class {
    color : purple;
}
```

> a class can be given to mupltiple elements and an element can have multiple classes as in the below html code 

```html
<div class="alert-text">Please agree to our terms of service.</div>
<div class="alert-text severe-alert"">Please agree to our terms of service.</div>
```
#### ID selector

```css
#id {
    color : red;
}
```

> An id is a unique identifier and cannot be given to more than one element.

#### Grouping selector

Motivation : Suppose you have to classes that have some similar attributes but then different attributes.

example 
```css
.read {
  color: white;
  background-color: black;
  /* several unique declarations */
}

.unread {
  color: white;
  background-color: black;
  /* several unique declarations */
}
```
in this case we can do the following , Group Selections.

```css
.read ,
.unread {
  color: white;
  background-color: black;
}

.unread {
  /* several unique declarations */
}

.read {
  /* several unique declarations */
}
```

##### Chaining Selectors 

Suppose we have the following html 

```html 
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection preview">This is where a preview for a post might go.</p>
</div>
```
if we want to reach subsection >> header only without affecting the rest of subsection we would do what is known as
Chaining selectors as given in the code below

```css
.subsection.header {
  color: red;
}
```

Can also be used to chain with an id.
```html
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection" id="preview">
    This is where a preview for a post might go.
  </p>
</div>
```
If we want to access subsection that has id preview then what we would do is we will do something like this

```css
.subsection#preview {
  color: blue;
}
```

##### Descendant Combinators

In the given example 
```html
<!-- index.html -->

<div class="ancestor">
  <!-- A -->
  <div class="contents">
    <!-- B -->
    <div class="contents"><!-- C --></div>
  </div>
</div>

<div class="contents"></div>
<!-- D -->
```

Suppose we want to only affect the elements with the class contents that are children of the class ancestor !

Then we do something like this 

```css
/* styles.css */

.ancestor .contents {
  /* some declarations */
}
```

#### Color and Background Properties

This page contains some nice information regardling that 
The following css contains different ways of changing the color of an element in css 

```css
p {
  /* hex example: */
  color: #1100ff;
}

p {
  /* rgb example: */
  color: rgb(100, 0, 127);
}

p {
  /* hsl example: */
  color: hsl(15, 82%, 56%);
}
```

#### Fonts

for fonts its best practices to include multiple fonts for fall back incase they are not working / included

#### Image Sizes

If you want to change the size of an image without casuing it to lose its properties then we can use the auto key word
Example

```css
img {
  height: auto;
  width: 500px;
}
```
It is best practice to always state the width and height , as according to the Odin project 
"
Explicitly stating a height and width prevents this from happening,
as space will be “reserved” on the page and will just appear as a blank space until the image loads.
"

## Adding CSS to html 

We have three ways of adding css to html 
1. External

```html
<head>
  <link rel="stylesheet" href="styles.css" />
</head>
```

2. Internal 

```html
<head>
  <style>
    div {
      color: white;
      background-color: black;
    }

    p {
      color: red;
    }
  </style>
</head>
<body>
  ...
</body>
```
3. Inline

```html
<div style="css - goes here;"></div>
```
