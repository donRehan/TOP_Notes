## Conditional Operator '?'

So we have on the left the variable to change its value , we then after 
the ? we have the value 1 and value 2.

> let result = condition ? value1 : value2;

We can also have mutliple question mark operators as such

```js
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );
```

This above functions like switch statement. If age is larger than 3 
then move to the next condition. Finally if nothing is met then what an 
unsual age.

Hence this can be expressed as such

> let result = condition ? (value if condition is true) : (value if condition is not true);

Hence we can nest conditions in the value is not true part 

#### Non-traditional use of ? operator

```js
let company = prompt('Which company created JavaScript?', '');

(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');
```

The following is a non traditional method of using an if statement and 
replacing it with the ? operator.
