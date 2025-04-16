const submitHandler = (event)=>{
    event.preventDefault();

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value 
    const mobile = document.getElementById("mobile").value 

    // let nameRegex = /[A-Z]{1}[a-z]+$/
    // let nameRegex = /[acde]+$/
    let nameRegex = /[a-cf-h]{1}[a-z]+$/
    let mobileRegex = /[6-9]{1}[0-9]{9}$/
    let emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]+$/


    if(email.match(emailRegex))
    {
        alert("Email is valid..")
    }else{
        alert("Not valid..")
    }


    // aashiqsingh56789@gmail.com


    // if(name.match(nameRegex))
    // {
    //     alert("Valid Name...")
    // }
    // else{
    //     alert("Name is not valid..")
    // }

    // if(!mobile.match(mobileRegex))
    // {
    //     alert("Number is not valid..")
    // }
    // else{
    //     alert("Number is valid..")
    // }


    // var user = {
    //     name:name,
    //     email:email,
    //     mobile:mobile
    // }
    // console.log(user);
    
}