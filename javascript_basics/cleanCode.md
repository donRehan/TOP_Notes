## Notes

Consider the following example !

```javascript
setTimeout(stopTimer, 3600000);
```

a clean code implementation would look something like such 👇

```javascript
const MILLISECONDS_PER_HOUR = 60 * 60 * 1000; // 3,600,000;

setTimeout(stopTimer, MILLISECONDS_PER_HOUR);
```

> Here we know how long is the timer going to take with the calculation 
> done for us alongside with a total of number of milliseconds as a
> comment , The all capitals variable name is a convention used when we
> store a variable that we know is going to be always a constant in our
> code 
