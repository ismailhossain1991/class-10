//Create an email pattern 

let txt = 'ismail-017456@gmail.com';

let pattern = /^[a-z0-9-\._]*@[a-z0-9.]*$/;

console.log(pattern.test(txt));

