var language = ["hindi","gujarati","marathi","french","telgu","tamil","urdu"];

const deleteLang = (langName)=> language.filter((lang)=> lang!== langName)


var x = deleteLang("hindi")

console.log(x);





// const deleteLang = (langName)=>{

//     return language.filter((lang)=> lang!== langName)
// }

// var x = deleteLang("tamil")

// console.log(x);







// const deleteLang = (langName)=>{

//     return language.filter((lang)=>{
//         return lang!== langName
//     })
// }

// var x = deleteLang("urdu")

// console.log(x);




// const deleteLang = (langName)=>{

//     var ans = language.filter((lang)=>{
//         return lang!== langName
//     })


//     return ans
// }

// var x = deleteLang("telgu")

// console.log(x);
