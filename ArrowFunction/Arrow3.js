const wordHandler = (option)=>{
    console.log(option.fname + " handle with word handler..");
    
}

const pdfHandler = (option)=>{
    console.log(option.fname + " handle with pdf handler..");
}

const excelHandler = (option)=>{
    console.log(option.fname + " handle with excel handler..");
}

const pngHandler = (option)=>{
    console.log(option.fname + " handle with png handler..");
}

var fileName = "xyz.png";

if(fileName.endsWith(".word"))
{
    wordHandler({fname:fileName,size:"1000kb"})
}
else if(fileName.endsWith("pdf"))
{
    pdfHandler(
        {
            fname:fileName,
            size:"2000kb"
        }
    )
}
else if(fileName.endsWith(".excel")){
    excelHandler({fname:fileName,size:"3000kb"})
}
else if(fileName.endsWith(".png")){
    pngHandler({fname:fileName,size:"4000kb"})
}
else{
    console.log("Unsupported file type");
}