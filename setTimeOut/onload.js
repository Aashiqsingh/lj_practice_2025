var body = document.getElementsByTagName('body')[0]

// console.log(body);

function red(){
    body.style.backgroundColor = "red";


    // green()

    setTimeout(()=>{
        green()
    },3000)
}


function green()
{
    body.style.backgroundColor = "green";

    setTimeout(()=>{
        blue()
    },3000)
}

function blue(){
    body.style.backgroundColor = "blue";

    setTimeout(()=>{
        red()
    },3000)
}