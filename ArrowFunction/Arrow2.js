const lasvegas = (option)=>{

    return option.name + " your tour is confirm lasvegas with packkage " + option.amount
}

const singapore = (option)=>{
    return option.name + " your tour is confirm singapore with packkage " + option.amount
}

const newyork = (option)=>{
    return option.name + " your tour is confirm newyork with packkage " + option.amount
}

var budget = 4700;
var temp;

if(budget > 4000)
{
    temp = lasvegas({name:"rahul",amount:budget})
}
else if(budget > 3500)
{
    // temp = singapore({name:"rahul",amount:budget})
    temp = singapore(
        {
            name:"rahul",
            amount:budget
        }
    )
}
else if(budget > 3000)
{
    temp = newyork({name:"rahul",amount:budget})
}
else{
    console.log("Insufficient budget")
}
console.log(temp);
