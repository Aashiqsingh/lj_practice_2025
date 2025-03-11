var users = ["ram","shyam","seeta","lakshman","hanuman","shaktiman","rahul","bhuwan"];


// var flag = true;

// for(let i=0;i<users.length;i++)
// {
//     if(users[i].length < 5)
//     {
//         flag = false;
//         break;
//     }
// }

// console.log(flag);

// some : boolean 

// var x = users.some((user)=>{
//     return user.length < 5;
// })

// console.log(x);

var x = users.some((user)=> user.startsWith("z"))
console.log(x);
