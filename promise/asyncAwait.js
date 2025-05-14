const getData = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            // resolve("Data fetched successfully...");
            reject("Error in fetching data...");
        }, 3000);
    })
}

async function get(){

    console.log("Starting....");
    

    var ans = await getData()
    console.log(ans);

    console.log("Ending....");
    


}

get()