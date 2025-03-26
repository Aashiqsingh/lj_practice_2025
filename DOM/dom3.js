const changeSize = ()=>{
    var mydiv = document.getElementById('mydiv')
    mydiv.style.height = "400px";
    mydiv.style.width = "400px";
    mydiv.style.backgroundColor = "red";
    mydiv.style.borderRadius = "50%";
    mydiv.style.backgroundImage = "url('https://images.squarespace-cdn.com/content/v1/54822a56e4b0b30bd821480c/45ed8ecf-0bb2-4e34-8fcf-624db47c43c8/Golden+Retrievers+dans+pet+care.jpeg')";
    mydiv.style.backgroundSize = "cover";
    mydiv.style.transition = "2s";
}