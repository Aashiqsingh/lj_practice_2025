function science(per,fname)
{
    return fname + " your admision confirm in scince stream with per " + per
    
}

function commerce(per,fname){
    return fname + " your admision confirm in commerce stream with per " + per
}

function arts(per,fname){
    return fname + " your admision confirm in arts stream with per " + per
}

var percentage = parseInt(prompt("Enter your percentage "));
var name = "yash"
var flag;

if(percentage > 90)
{
    flag = science(percentage,"palak");
}
else if(percentage > 70)
{
    flag = commerce(percentage,name);
}
else if(percentage > 50)
{
    flag = arts(percentage,name);
}
else{
    console.log("sorry, you are not eligible for admission");
}
console.log(flag);
