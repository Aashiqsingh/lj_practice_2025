function science(fname,per){
    return `${fname} ur admision confirm in scinec with per ${per}`
    
}

function commerce(fname,per){
    return `${fname} ur admision confirm in commerce with per ${per}`
}

function art(fname,per){
    return `${fname} ur admision confirm in art with per ${per}`
}


// art()

// cb --> callback
// function addmission(fname,per,cb)
// {

//     var ans = cb(fname,per)
    
//     return ans;
    
    
// }

function addmission(fname,per,cb)
{

    // var ans = cb(fname,per)
    
    // return ans;

    return cb(fname,per)
    
    
}





var percentage = 91;
var temp;

if(percentage > 90)
{
    temp = addmission("twinkle",percentage,science)
}
else if(percentage > 70)
{
    temp = addmission("rahul",percentage,commerce)
}
else if(percentage > 50)
{
    temp = addmission("anil",percentage,art)
}

console.log(temp);
