// prime number :


function isPrime(num){
    
    for(let i=2;i<num;i++)
    {
        if(num%i==0)
            {
                return false;
            } 
    }
    return true;
}


var x = isPrime(19)
console.log(x == true ? "Prime" : "Not prime");
