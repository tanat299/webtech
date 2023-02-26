const   http = require('http')

const   sever = http.createServer(function(req,res){
    res.write("testting sever")
    res.end()
})
sever.listen(5000)