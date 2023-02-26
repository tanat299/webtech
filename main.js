const http = require('http')
const path = require('path')
const fs = require('fs')
const mainpage = fs.readFileSync(`${__dirname}/webpages/index.html`)
const signinpage = fs.readFileSync(`${__dirname}/webpages/sign_in.html`)

const   sever = http.createServer((req,res)=>{
    const path = req.url
    console.log("url = ",path)
    
    if(path === "/" || path === "/home" ){
        res.end(mainpage)
    }
    else if(path === "/sign_in"){
        res.end(signinpage)
    }
    else{
        res.writeHead(404)
        res.end("Not Found")
    }
    
})
sever.listen(5000,()=>{
    console.log("sever running")
})