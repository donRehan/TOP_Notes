# This readme serves as note taking for the functions part

#### Functions

Passing Default parameters in functions 
for example invoking function hello(); without passing a name in between
brackets should return hello Chris !.
This is done by using the following syntax.

```js
function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}
```

#### Arrow functions

Two things if we have only one return statement, and if we only take 
one parameter
if we take one parameter only then we can omit the brackets around the 
parameter as such

```js 
textBox.addEventListener("keydown", event => {
  console.log(`You pressed "${event.key}".`);
});
```

if we only return one statement then we can omit this bracket '{' 
and write the expression only 
example:

```js
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]
```
