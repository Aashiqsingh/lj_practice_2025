const getOrder = ()=>{

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                orderId:5021,
                message:"Order created successfully...",
                amount:499
            })
        },4000)
    })
}

const getPayment = (data)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                paymentId:data.orderId,
                message:"Payment created successfully...",
                amount:data.amount
            })
        },4000)
    })
}


const answer = async()=>{

    console.log("Order is ongoing...");
    

    const response = await getOrder()
    console.log("food order....",response);


    console.log("Payment is ongoing...");
    

    const payment = await getPayment(response)
    console.log("payment....",payment);


    console.log("Ending...");
    
    
}
 
answer()