var students = [
    {
        id: 1,
        name: "rahul",
        age: 22,
        email: "rahul@gmail.com",
        gender: "male",
        img:"https://yt3.googleusercontent.com/QHbBaeC1MeAM8flc-N4cZXt9FtQBWN94ryZ9VXezIEWgUUIS9_vlPxnbmCc0oRXelFKv77Il=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        id: 2,
        name: "palak",
        age: 20,
        email: "palak@gmail.com",
        gender: "female",
        img:"https://data.indianexpress.com/election2019/about/images/politician/nirmala-sitharaman.jpg?w=330"
    },
    {
        id: 3,
        name: "hemali",
        age: 22,
        email: "hemali@gmail.com",
        gender: "female",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Droupadi_Murmu_POI_official_portrait.jpg/250px-Droupadi_Murmu_POI_official_portrait.jpg"
    },
    {
        id: 4,
        name: "harsh",
        age: 21,
        email: "harsh@gmail.com",
        gender: "male",
        img:"https://upload.wikimedia.org/wikipedia/commons/4/44/Amit_Shah_photographed_during_the_first_Union_Cabinet_Meeting_of_the_18th_Lok_Sabha_%28cropped%29.jpg"
    }
]

console.log(students);

let thead = document.getElementById("thead")
thead.style.display = "none"


const getData = () => {

    thead.style.display = ""
    let tbody = document.getElementById("tbody");


    for (let i = 0; i < students.length; i++) {
        let tr = document.createElement("tr")
        let idTd = document.createElement("td")
        let nameTd = document.createElement("td")
        let ageTd = document.createElement("td")
        let emailTd = document.createElement("td")
        let genderTd = document.createElement("td")
        let pictureTd = document.createElement("td")
        let img = document.createElement("img")

        idTd.innerHTML = students[i].id
        nameTd.innerHTML = students[i].name
        ageTd.innerHTML = students[i].age
        emailTd.innerHTML = students[i].email
        genderTd.innerHTML = students[i].gender
        img.src = students[i].img
        img.style.height = "100px"
        img.style.width = "100px"



        tbody.appendChild(tr)
        tr.appendChild(idTd)
        tr.appendChild(nameTd)
        tr.appendChild(ageTd)
        tr.appendChild(emailTd)
        tr.appendChild(genderTd)
        tr.appendChild(pictureTd)
        pictureTd.appendChild(img)
    }
}
