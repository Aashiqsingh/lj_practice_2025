// for(let i=0;i<=5;i++)
// {
//     console.log(i);
    
// }



// for(let i=1;i<=5;i++)
// {
//     console.log("*");
    
// }


// var num = 365;
// var rev = 0;
// for(;num>0;)
// {
//     let rem = num % 10;
//     rev = (rev * 10) + rem;
//     num = Math.floor(num / 10);
// }

// console.log("Reverse = ",rev);


var num = 365;
var temp = num;
var rev = 0;
for(;num>0;)
{
    let rem = num % 10;
    rev = (rev * 10) + rem;
    num = Math.floor(num / 10);
}

// console.log("Reverse = ",rev);

// if(temp == rev)
// {
//     console.log("Number is palindrome");
// }
// else{
//     console.log("Number is not palindrome");
// }