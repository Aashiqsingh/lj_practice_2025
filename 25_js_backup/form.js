function submitHandler(event){
    // alert("Form submitted...");

    event.preventDefault();

    var name = document.getElementById("name")
    var age = document.getElementById("age")

    console.log("Form submitted...");
    // console.log("name = ",name.value);
    // console.log("age = ",age.value);
    

    // var user = {
    //     name:name.value,
    //     age:age.value
    // }

    // console.log(user);

    var nameprint = document.getElementById("nameprint");
    nameprint.innerHTML = name.value 
    var ageprint = document.getElementById("ageprint");

    ageprint.innerHTML = age.value
    
    
}