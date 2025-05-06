

let btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
    var txt = document.getElementById("txt")

    txt.innerHTML = "Royal technosoft p ltd."
})

btn.addEventListener("mouseenter",()=>{
    txt.style.backgroundColor= "green"
})
btn.addEventListener("mouseleave",()=>{
    txt.style.backgroundColor = "blue"
})