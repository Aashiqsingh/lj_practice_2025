const submitHandler = (event) =>{
    event.preventDefault()

    const name = document.getElementById("name")
    const age = document.getElementById("age")
    const email = document.getElementById("email")
    const pass = document.getElementById("pass")
    const mobile = document.getElementById("mobile")

    var data ={
        name:name.value,
        age:age.value,
        email:email.value,
        password:pass.value,
        mobile:mobile.value
    }

    // console.log(data);
    localStorage.setItem("email",email.value)
    localStorage.setItem("pass",pass.value)
    

    alert("Signup successfully...");

    location.href = "./login.html"


}

function login(){
    const email = document.getElementById("email")
    const password = document.getElementById("password")

    // console.log("email...",email.value);
    // console.log("password....",password.value);
    const email2 = localStorage.getItem("email")
    const pass = localStorage.getItem("pass")

    if(email.value === email2 && pass === password.value)
    {
        alert("Login successfully...")
    }
    else{
        alert("Invalid credential")
    }
    
    
}