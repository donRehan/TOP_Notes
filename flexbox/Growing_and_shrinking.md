```css
div{
  flex: 1;
}
```

this equates to flex-grow 1 flex-shrink 1 and flex-basis 0

    We have three flex parameters 
flex-grow, flex-shrink and flex-basis.

#### Flex Grow

> flex-grow expects a single number as its value, and that number is used 
> as the flex-item’s “growth factor”.
> When we applied flex: 1 to every div inside our container, we were 
> telling every div to grow the same amount.
> The result of this is that every div ends up the exact same size.
> If we instead add flex: 2 to just one of the divs, then that div would
> grow to 2x the size of the others.
