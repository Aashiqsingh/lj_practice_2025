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
    var result = cb(
        {
            fname:file.name,
            size:file.size
        }
    )
    console.log(result);
    
}

var fileName = "abc.word";

if(fileName.endsWith(".word"))
{
    Handler(
        {
            name:fileName,
            size:"1000kb"
        },wordHandler
    )
}
else if(fileName.endsWith(".doc"))
{
    Handler({name:fileName,size:"2000kb"},docHandler)
}
else if(fileName.endsWith(".pdf")){
    Handler({name:fileName,size:"3000kb"},pdfHandler)
}
else if(fileName.endsWith(".excel"))
{
    Handler({name:fileName,size:"4000kb"},excelHandler)
}