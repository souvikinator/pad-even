# pad-even

simple package to pad strings evenly

## Install

`npm install pad-even`

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

/*
output:

abcd= 1234
def= 123
verylongword= evenly padded

*/
```
- with pad-even

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

/*
output:

abcd                = 1234
def                 = 123
verylongword        = evenly paddedd
*/
```

## API

`padeven(str,n,c)`

- **str**: string that needs to be padded
- **n**: padding value. Use positive value for padding to the right of the string, negative value for padding to the left of the string
- **c**: padding string, default is " "
