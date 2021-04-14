# pad-even

simple package to pad strings evenly

## example:

- without padeven

```js
const obj = {
    'abcd': 1234,
    'def': 123,
    'verylongword': 'evenly padded'
};

for (let key in obj) {
    console.log(`${key}= ${obj[key]}`);
}

// output
/*
abcd= 1234
def= 123
verylongword= evenly padded
*/
```
- with padeven

```js
const padeven=require('pad-even');
const obj = {
    'abcd': 1234,
    'def': 123,
    'verylongword': 'evenly padded'
};

for (let key in obj) {
    console.log(`${padeven(key,20)}= ${obj[key]}`);
}

// output
/*
abcd                = 1234
def                 = 123
verylongword        = evenly paddedd
*/
```