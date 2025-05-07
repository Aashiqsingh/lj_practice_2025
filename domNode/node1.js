const dataPrint = ()=>{
    let mydiv = document.getElementById("mydiv")


    let h1 = document.createElement("h1")
    h1.innerHTML = "Royal technsooft p ltd."


    let link = document.createElement("a")
    link.innerHTML = "Google"
    // link.href = "https://google.com"
    link.setAttribute("href","https://google.com")
    link.target = "_blank"


    let img = document.createElement("img")
    img.src = "https://m.economictimes.com/thumb/msid-102726945,width-1200,height-900,resizemode-4,imgsize-11438/har-ghar-tiranga-abhiyan-2-0-commences-tricolour-available-at-post-offices-and-online-at-rs-25.jpg"
    img.style.height = "300px"
    img.style.width = "300px"


    let br = document.createElement("br")




    mydiv.append(link)
    mydiv.appendChild(h1)
    mydiv.appendChild(img)
    mydiv.appendChild(br)
    
}