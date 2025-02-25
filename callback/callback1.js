function demo()
{
    console.log("demo function called...");
    
}


function test(x){
    // console.log(x);
    x()
}

// test(10)
// test("ram")
// test(12.45)
// test(true)

test(demo)