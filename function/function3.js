function science(per,fname)
{
    console.log(fname + " your admision confirm in scince stream with per " + per);
    
}

function commerce(per,fname){
    console.log(fname + " your admision confirm in commerce stream with per " + per);
}

function arts(per,fname){
    console.log(fname + " your admision confirm in arts stream with per " + per);
}

var percentage = parseInt(prompt("Enter your percentage "));
var name = "yash"

if(percentage > 90)
{
    science(percentage,"palak");
}
else if(percentage > 70)
{
    commerce(percentage,name);
}
else if(percentage > 50)
{
    arts(percentage,name);
}
else{
    console.log("sorry, you are not eligible for admission");
}