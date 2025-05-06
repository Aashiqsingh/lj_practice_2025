var box = document.getElementsByClassName("box")
console.log(box);


box[0].addEventListener("mouseenter",()=>{
    box[2].style.backgroundColor = "blue";
    box[2].style.borderRadius = "50%"
})

box[1].addEventListener("click",()=>{
    box[3].style.backgroundColor = "green"
})

var colors = ["red","green","blue","orange","yellow","purple","pink","black"]

box[3].addEventListener("mousemove",()=>{
    var randomIndex = Math.floor(Math.random() * colors.length)
    box[2].style.backgroundColor = colors[randomIndex]
})