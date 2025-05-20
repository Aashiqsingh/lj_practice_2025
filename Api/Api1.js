// API --> Application Programming Interface

// Types of api
// 1. get api --> get data from server
// 2. post api --> post data to server
// 3. put api -->  update data to server
// 4. delete api --> delete data from server
// 5. patch api --> partially update data to server


const getData = async()=>{

    const response = await fetch("https://reqres.in/api/users?page=2",{
        method:"GET",
        headers:{
            "x-api-key": "reqres-free-v1"
        }
    })

    // console.log(response);
    const res = await response.json()
    console.log(res.data);

    let tbody = document.getElementById("tbody");

    res.data.forEach((data)=>{
        let tr = document.createElement("tr");
        let idTd = document.createElement("td");
        let firstNameTd = document.createElement("td");
        let lastNameTd = document.createElement("td");
        let emailTd = document.createElement("td");
        let avatarTd = document.createElement("td");
        let img = document.createElement("img")

        idTd.innerText = data.id;
        firstNameTd.innerText = data.first_name;
        lastNameTd.innerText = data.last_name;
        emailTd.innerText = data.email;
        img.src = data.avatar


        tr.appendChild(idTd);
        tr.appendChild(firstNameTd);
        tr.appendChild(lastNameTd);
        tr.appendChild(emailTd);
        tr.appendChild(avatarTd);
        avatarTd.appendChild(img)

        tbody.appendChild(tr);

    })
    
    
}