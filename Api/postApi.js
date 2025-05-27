const postData = async()=>{

    const data = {
        name:"dipika joshi",
        email:"dipika@gmail.com",
        age:18,
        isActive:true
    }



    const res = await fetch("https://node5.onrender.com/user/user",{
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })


    const response = await res.json()
    console.log(response)
    console.log(res);
    

    // console.log(res)
}