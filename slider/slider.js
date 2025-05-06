let prev = document.getElementById("prev")
var images = ["img1.png","img2.webp","img3.jpg","img4.jpg","img5.jpg"]
var currentIndex = 0;

var img = document.getElementById("img")

prev.addEventListener("click",()=>{

                        (3 - 1 + 5)%5
    currentIndex = (currentIndex  - 1 + images.length)%images.length
    console.log(currentIndex);

    img.src = "../Image/" + images[currentIndex]
    
})

let next = document.getElementById("next")
next.addEventListener("click",()=>{

    currentIndex = (currentIndex + 1)% images.length
    console.log(currentIndex);

    img.src = "../Image/" + images[currentIndex]    
    
})