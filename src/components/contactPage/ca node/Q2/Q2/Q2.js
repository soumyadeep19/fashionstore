const { error } = require('console');
const fs= require('fs');
fs.readFile("User.JSON",(error,data)=>{
    if(error){
        console.error(error);
        throw error;
    }
    const user= JSON.parse(data)
    console.log(user);
    const obj=JSON.stringify(user)
    const http = require("http");
    const server= http.createServer((req,res)=>{
        res.end(obj);
        console.log(obj);
    });
    server.listen(1000,()=>{
        console.log("listening to port number 1000")
    })
})