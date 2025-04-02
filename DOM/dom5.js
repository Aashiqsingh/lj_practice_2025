var a = 0;

var colors = ["red", "green", "blue", "yellow", "pink", "purple", "orange", "brown"];
// console.log(colors[0]);

const changeColor = ()=>{
    // console.log("color...");
    // console.log(a++);
    let mydiv = document.getElementById("mydiv");
    let randomIndex = Math.floor(Math.random() * colors.length)

    console.log(randomIndex);

    mydiv.style.backgroundColor = colors[randomIndex]
    
        
}