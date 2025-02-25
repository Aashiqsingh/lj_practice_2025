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
function addmission(fname,per,cb)
{

    var ans = cb(fname,per)
    console.log(ans);
    
    
    
}





var percentage = 91;

if(percentage > 90)
{
    addmission("twinkle",percentage,science)
}
else if(percentage > 70)
{
    addmission("rahul",percentage,commerce)
}
else if(percentage > 50)
{
    addmission("anil",percentage,art)
}