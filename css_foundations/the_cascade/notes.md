#### Specificity 

Rules in ranked according to their importance is as follows 

    ID selectors (most specific selector)
    Class selectors
    Type selectors

consider the following examples
```html
<!-- index.html -->

<div class="main">
  <div class="list subsection">Red text</div>
</div>
```

```css
/* rule 1 */
.subsection {
  color: blue;
}

/* rule 2 */
.main .list {
  color: red;
}
```

Which color is going to be applied to the Red text ??

> Rule 2 as its using more class selectors than 1.

Consider this example tho 

```html
<!-- index.html -->

<div class="main">
  <div class="list" id="subsection">Blue text</div>
</div>
```

```css
/* rule 1 */
#subsection {
  color: blue;
}

/* rule 2 */
.main .list {
  color: red;
}
```

Which in the above example is going to be applied ??

> Here because the rule one uses an id then it beats the classes selectors in rule 2

```html
<!-- index.html -->

<div class="main">
  <div class="list" id="subsection">Red text on yellow background</div>
</div>
```

```css
/* rule 1 */
#subsection {
  background-color: yellow;
  color: blue;
}

/* rule 2 */
.main #subsection {
 color: red;
}
```
Which one here is going to be applied ?

> certainly rule 2 as it uses a class and an id and hence the color is going to be red
> However the background color in subsection would still be applied as it has no conflicts in the rule 2 area

#### Inheritance 

```html
<!-- index.html -->

<div id="parent">
  <div class="child"></div>
</div>
```
```css
/* styles.css */

#parent {
  color: red;
}

.child {
  color: blue;
}
```

In the example above 
Since parent is the parent of the child class , Child should inherit 
the red text from its parent however since child is more specific then
logically it gets the color blue from that


Finally we reach to the end of this which is rule order
#### Rule order

```css
/* styles.css */
.alert {
  color: red;
}

.warning {
  color: yellow;
}
```

In this example if a class has both alert and warning , it is then up 
to their order in the css file. In this case it will be color yellow 
that will be applied simply because it was the rule added for that 
( Since there is no specificity )
