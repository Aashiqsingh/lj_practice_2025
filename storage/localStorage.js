const submitHandler = (event)=>{
    event.preventDefault();
    
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    
    
    // console.log("email..",email.value,"name...",name.value);

    localStorage.setItem("name",name.value)
    localStorage.setItem("email",email.value)

    
}


function getData(){
    var name = localStorage.getItem("name")
    var email = localStorage.getItem("email")


    console.log("name...",name);
    console.log("emamil...",email);
    
    
}

function clearData(){
    // localStorage.clear()
    localStorage.removeItem("name")
}