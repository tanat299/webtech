const   http = require('http')

const   sever = http.createServer((req,res)=>{
    res.write("testting sever")
    res.end()
})
sever.listen(5000,()=>{
    console.log("sever running")
})