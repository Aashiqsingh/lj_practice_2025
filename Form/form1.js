const submitHandler = (event)=>{
    // alert("Form is submitted...")
    event.preventDefault();

    const name = document.getElementById("name").value
    const age = document.getElementById("age").value

    let output = document.getElementById("output")


    // console.log(name + " " + age);

    const user = {
        name:name,
        age:age
    }
    // console.log(user);

    // output.innerHTML = user 
    const ans = JSON.stringify(user)
    output.innerHTML = ans

    console.log(ans[0]);
    
    
    

    console.log("form is submitted..");
    
}