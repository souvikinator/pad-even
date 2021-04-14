const padeven = require('./index');

const obj = {
    'abcd': 1234,
    'def': 123,
    'verylongword': 'evenly padded'
}

console.log('\nwithout pad-even\n----------')
for (let key in obj) {
    console.log(`${key}= ${obj[key]}`);
}

console.log('\nwith pad-even\n---------');
for (let key in obj) {
    console.log(`${padeven(key, 20)}= ${obj[key]}`);
}
