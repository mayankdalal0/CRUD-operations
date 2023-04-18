const fs= require("fs");
const path= require("path");
const dirPath=path.join(__dirname,"CRUDDetails");
console.log("path",dirPath);
const filePath=dirPath+"/newFileName2.txt";
//=============================================
// to create file
// fs.writeFileSync(dirPath+"/newFile.txt","this is new file create with the help of fs");
//=============================================
// to read file
// this will give us as buffer data
/* fs.readFile(filePath,((err,data)=>{
console.log("error",err);
console.log(data)
})) */
// so we will use utf8 to read buffer data
/* fs.readFile(filePath,"utf8",(err,data)=>{
    console.log("error",err);
    console.log(data)
    }); */
//=======================================
// update file    
/* fs.appendFile(filePath,"  hello mayank" ,(err)=>{
     if(!err){
        console.log("file is updated");
            }
 }) */
 //================================================
 // delete file
//  fs.unlinkSync(filePath);
//=================================
//to rename
// forst we create file to rename
// fs.writeFileSync(filePath,"this is new file to rename file name");
// now we will see how to rename
fs.rename(filePath,`${dirPath}/newFileName3.txt`,(err)=>{
    if(!err){
        console.log("file has been renamed")
    }
})
