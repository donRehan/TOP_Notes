 To be learned
> Aligning content within a flexbox container

### Alignment 

Consider the following html code 
```html
<div class="container">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

```css
.container {
  height: 140px;
  padding: 16px;
  background: plum;
  border: 4px solid indigo;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item {
  width: 60px;
  height: 60px;
  border: 4px solid darkslategray;
  background: skyblue;
}
```

This Code above should present the boxes center aligend side by side in
the middle of the container. If we add in the container flex-direction:
column; What happens is that the axis is rotated and then the boxes ap-
pear to be on top of each other "as now the axis is rotated".
> At least thats how I view it.

#### Cross & Main Axis

Main Axis is just a fancy word for the X-axiss , Cross axiss is the
y-axiss. 
justify-content: center; sets items in the middle of the x-axiss or the main
axiss. align-items: center, Makes items aligned middle fo the y-ax
iss. 

### Gap property

Example
gap: 8px This simply adds a gap between all elements in the container.
