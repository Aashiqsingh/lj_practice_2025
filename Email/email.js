function sentEmail(event){
    event.preventDefault();

    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const message = document.getElementById("message")


    // console.log(name.value + " " + email.value + " " + message.value);

    const params = {
        name:name.value,
        email:email.value,
        message:message.value 
    }

    const serviceId = "service_xbrjnok";
    const templateId = "template_xkxwe24";


    emailjs.send(serviceId,templateId,params).then((res)=>{
        console.log("res.....",res);
        if(res.status == 200)
        {
            alert("Email sent succefully...")
        }
    }).catch((err)=>{
        console.log("error....",err);
        
    })
    

}