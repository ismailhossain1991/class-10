//Create a password pattern 

let txt = 'ismail$@#%';

let pattern = /[a-zA-Z0-9#@%$]/;

console.log(pattern.test(txt));

