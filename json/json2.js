var employee = {
    empId:45,
    name:"sikandar",
    salary:60000,
    department:"HR",
    mobile:[7894837833,78364783432,23746938333],
    email:"sikandar@gmail.com",
    address:{
        street:"C.G road",
        city:"Ahmedabad",
        state:"Gujarat",
        country:"India",
        pincode:380015
    }
}

console.log(employee);
console.log(employee.name);
console.log(employee.email);
console.log(employee.salary);
console.log(employee.department);
console.log(employee.mobile);
// console.log(employee.mobile[0]);

for(let i=0;i<employee.mobile.length;i++)
{
    console.log(employee.mobile[i]);
    
}

console.log(employee.address);
console.log(employee.address.street);
console.log(employee.address.city);
console.log(employee.address.state);










