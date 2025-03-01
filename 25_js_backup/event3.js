
var colors = ["red", "green", "yellow", "blue", "magenta", "violet", "orange"];
function changeColor(){

    var randomIndex = Math.floor(Math.random() * colors.length)

    // console.log(randomIndex);
    var mydiv = document.getElementById("mydiv")

    mydiv.style.backgroundColor = colors[randomIndex]
    // mydiv.style.transition = "0.1s"
    
}