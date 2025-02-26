const wordHandler = (option)=>{
    return option.fname + " handle with wordHandler";
    
}

const docHandler = (option)=>{
    return option.fname + " handle with docHandler";
}

const pdfHandler = (option)=>{
    return option.fname + " handle with pdfHandler";
}

const excelHandler = (option)=>{
    return option.fname + " handle with excelHandler";
}



const Handler = (file,cb)=>{
    // var result = cb({fname:file.name,size:file.size})
    // var result = cb(
    //     {
    //         fname:file.name,
    //         size:file.size
    //     }
    // )
    // // console.log(result);

    // return result;

    return cb({
        fname:file.name,
        size:file.size,
    })
    
}

var fileName = "abc.word";
var temp;

if(fileName.endsWith(".word"))
{
    temp = Handler(
        {
            name:fileName,
            size:"1000kb"
        },wordHandler
    )
}
else if(fileName.endsWith(".doc"))
{
    temp = Handler({name:fileName,size:"2000kb"},docHandler)
}
else if(fileName.endsWith(".pdf")){
    temp = Handler({name:fileName,size:"3000kb"},pdfHandler)
}
else if(fileName.endsWith(".excel"))
{
    temp = Handler({name:fileName,size:"4000kb"},excelHandler)
}

console.log(temp);
