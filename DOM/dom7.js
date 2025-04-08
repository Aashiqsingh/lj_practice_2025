function readTxt(){
    const txt = document.getElementById("txt");

    var output = document.getElementById("output")


    if(txt.value.length < 4)
    {
        // alert("Name is too short")
        output.innerHTML = "Name is too short";
        output.style.color = "red"
        txt.style.outline = "2px solid red"
    }
    else{
        output.innerHTML = txt.value
        txt.style.outline = "2px solid green";
        output.style.color = "green"
    }


    // console.log(txt.value);
    
}