function changeTxt(){


    // alert("Hello....");

    // document.getElementById("txt").innerHTML = "Royal technosoft pvt ltd."

    var txt = document.getElementById("txt")
    txt.innerHTML = "Royal technosoft pvt ltd."
    txt.style.backgroundColor = "red"
    txt.style.color = "white"
    txt.style.height = "200px";
    txt.style.width = "200px";


}


function changeHref(){

    var anchor = document.getElementById("anchor")
    anchor.href = "https://netflix.com"
    anchor.innerHTML = "Netflix"
    anchor.target = "_blank"
}