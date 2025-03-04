function submitHandler(event){

        event.preventDefault();
    // alert("Form submitted...");

    var name = document.getElementById("name").value
    var email = document.getElementById("email").value


    var emails = ["raj@gmail.com","dhiraj@gmail.com","tanvi@gmail.com"
    ];

    if(emails.includes(email))
    {
        alert("Email is already exists..")
    }
    else{
        alert("Email is uniqui...")
    }






    // var nameErr = document.getElementById("nameErr")

    // if(name.length === 0)
    // {
    //     // console.log("Name is required..");
    //     nameErr.innerHTML = "Name is required**"
    //     nameErr.style.color = "red";
        
    // }
    // else if(name.length < 4)
    // {
    //     // console.log("name is too short..");
    //     nameErr.innerHTML = "Name must be at least 4 characters"
    // }
    // else{
    //     nameErr.innerHTML = name
    // }




    // console.log("name..",name);
    // console.log("email..",email);
    

    console.log("form submitted...");
    

}