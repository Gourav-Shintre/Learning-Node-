// File handling means reading and writing or creating file.
//  like we can do operation on file.


// 1.for file handling we need a module called fs(file system)
// 2.It was in built function in node.js
// 3.With the help of fs module we can read,write,create ,delete file or we can interact with files

const fs=require("fs");

// sync means it was a syunchronus call
// writeFileSync is a synchronous method. It blocks the event loop until the file operation is completed or fails. This means that every other statement after the writeFileSync call will wait until the file operation is finished or an error is thrown. For example, if the file is created successfully, the next line of code will execute. If it fails, Node will throw an error, giving you the opportunity to catch it.

// fs.writeFileSync("./test.txt","Hey buddy Ligth Weight")



// Asynchronous method
// fs.writeFile("./test.txt","anna async",(err)=>{})


// for reading file
// we can store in a variable for synchronus
// const result=fs.readFileSync("./contact.txt","utf-8")
// console.log(result);


// asynch can return 
// fs.readFile("./contact.txt","utf-8",(err,res)=>{
//     if(err) console.log(err);
//     else{
//         console.log(res);
        
//     }
// })



// for appending file 
// means it will add our content to the existing content

fs.appendFileSync("./test.txt",`Hey hi\n`)

// for copy file

fs.copyFileSync("./test.txt","./copy.txt")


// for deleting file
// fs.unlinkSync("./copy.txt")


// for knowing stats 
console.log(fs.statSync("./test.txt"))

// to make folder
// fs.mkdirSync("./newFolder")