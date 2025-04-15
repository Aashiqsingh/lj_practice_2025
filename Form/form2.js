function submitHandler(){

    var ans = document.getElementById("ans")

    const name = document.getElementById("name").value
    const age = document.getElementById("age").value 
    const gender = document.getElementsByName("gender")

    var gen = ""

    if(gender[0].checked == true)
    {
        gen = "Male"
    }
    else if(gender[1].checked == true)
    {
        gen = "Female"
    }
    else if(gender[2].checked == true)
    {
        gen = "Other"
    }
    // console.log(gender);
    console.log("Name = ",name);
    console.log("Age = ",age);
    console.log("Gender = ",gen);

    if(gen == "Male")
    {
        if(age > 18)
        {
            ans.innerHTML = "You are eligible for vote"
        }else{
            ans.innerHTML = "Not Eligible.."
        }
    }else if(gen == "Female"){
        if(age > 21)
        {
            ans.innerHTML = "You are eligible for vote"
        }
        else{
            ans.innerHTML = "Not Eligible.."
        }
    }
    else{
        if(age > 25)
        {
            ans.innerHTML = "You are eligible for vote.."
        }
        else{
            ans.innerHTML = "Not Eligible.."
        }
    }
    
    
    
    
}