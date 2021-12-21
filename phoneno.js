// Create a Bangladeshi phone number pattern

let txt = "+8801745677717";

let pattern = /^(01|8801|\+8801)[0-9]{9}$/;

console.log(pattern.test(txt));



