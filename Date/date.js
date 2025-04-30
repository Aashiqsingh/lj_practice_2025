//  date -- class -- object 


const getDate = ()=>{

    const date = new Date()

    // console.log("date --->",date.getDate());
    // console.log("month --->",date.getMonth() + 1); // month is 0 based, so we add 1 to get the correct month
    // console.log("year --->",date.getFullYear());
    // console.log("day --->",date.getDay()); // day is 0 based, so we add 1 to get the correct day
    // console.log("hour --->",date.getHours());
    // console.log("minute --->",date.getMinutes());
    // console.log("second --->",date.getSeconds());
    // console.log("millisecond --->",date.getMilliseconds());
    // console.log("time zone --->",date.getTimezoneOffset());



    // const date2 = new Date("2023-10-01T00:00:01Z")
    // console.log("date2 --->", date2);
    
    const date2 = new Date();
    date2.setDate("14");
    date2.setMonth("1"); // month is 0 based, so we add 1 to get the correct month
    date2.setFullYear("2018");
    date2.setHours("07");
    date2.setMinutes("10");
    date2.setSeconds("10");
    date2.setMilliseconds("10");
    date2.setTimeZoneOffset("10");

    



    console.log(date2);
    // console.log(date2.getDate());

    
    // console.log(date);
    

}

getDate()