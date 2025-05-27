const submitHandler = async(event)=>{
    event.preventDefault()

    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let age = document.getElementById("age")
    let isActive = document.getElementById("isActive")


    const response = await fetch("https://node5.onrender.com/user/user",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name:name.value,
            email:email.value,
            age:age.value,
            isActive:isActive.value
        })
    })

    const res = await response.json()
    console.log(res)
    name.value = ""
    email.value = ""
    age.value = ""
    isActive.value = ""
}