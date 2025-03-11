var users = ["ram","shyam","seeta","lakshman","hanuman","shaktiman","rahul","bhuwan"];

// Every : boolean value

// var x = users.every((user)=>{
//     return user.length > 2;
// })

// console.log(x);


var x = users.every((user)=> user.startsWith("s"))
console.log(x);
