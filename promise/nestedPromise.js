const getOrder = ()=>{
    console.log("Food is going to placed..");
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                orderId:121,
                message:"order fetched successfully",
                amount:456
            })
        },4000)
    })
}


const getPayment = (data)=>{
    console.log("Payment is going to placed..");

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                paymentId:data.orderId,
                messag:"payment fetched successfully",
                amount:data.amount
            })
        },4000)
    })
}



getOrder().then((data)=>{
    console.log("Food order.....",data);
    getPayment(data).then((res)=>{
        console.log("Payment.....",res)
    }).catch((error)=>{
        console.log("Error in payment",error)
    })
    
}).catch((err)=>{
    console.log("Error in food order",err)
})