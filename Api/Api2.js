const getData = async()=>{


    const response = await fetch("https://node5.onrender.com/user/user",{
        method:"GET",
    }) 

    const res = await response.json()
    console.log(res.data)


    let tbody = document.getElementById("tbody")
    res.data.forEach((data)=>{
        let tr = document.createElement("tr")
        let idTd = document.createElement("td")
        let nameTd = document.createElement("td")
        let emailTd = document.createElement("td")
        let ageTd = document.createElement("td")
        let statusTd = document.createElement("td")
        let actionTd = document.createElement("td")
        let btn = document.createElement("button")
        btn.innerHTML = "DELETE";
        btn.className = "btn btn-danger"

        btn.addEventListener("click",async()=>{
            // alert(data._id)
            const response2 = await fetch("https://node5.onrender.com/user/user/"+data._id,{
                method:"DELETE",
            })

            console.log(response2);
            
            tr.remove()
            
        })


        idTd.innerText = data._id
        nameTd.innerText = data.name
        emailTd.innerText = data.email
        ageTd.innerText = data.age
        statusTd.innerText = data.isActive ? "Active" : "Inactive"


        tr.appendChild(idTd)
        tr.appendChild(nameTd)
        tr.appendChild(emailTd)
        tr.appendChild(ageTd)
        tr.appendChild(statusTd)
        tr.appendChild(actionTd)
        actionTd.appendChild(btn)
        tbody.appendChild(tr)
    })
}