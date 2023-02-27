const express = require('express')
const cors = require('cors')
const app =express()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(cors())

const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'tri',
    database: 'hsm_db'
});

app.post('/register',jsonParser,function(req,res,next){
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        connection.execute(
            'INSERT INTO user(email,password,firstname,surname) VALUE (?,?,?,?)',
            [req.body.email,hash,req.body.firstname,req.body.surname],
            function(err, results, fields) {
              if (err){
                res.json({status:'error',massage: err})
                return
              }
              res.json({status:'pass'})
            }
          );
    });  
})

app.post('/register',jsonParser,function(req,res,next){
    
})


app.listen(5000, () => console.log("Server is Running..."));

/*
const mainpage = fs.readFileSync(`${__dirname}/webpages/index.html`)
const signinpage = fs.readFileSync(`${__dirname}/webpages/sign_in.html`)
const Register = fs.readFileSync(`${__dirname}/webpages/Register.html`)

const   sever = http.createServer((req,res)=>{
    const path = req.url
    //console.log("url = ",path)

    if(path === "/" || path === "/home" ){
        res.end(mainpage)
    }
    else if(path === "/sign_in"){
        res.end(signinpage)
    }
    else if(path === "/Register"){
        res.end(Register)
    }
    else{
        res.writeHead(404)
        res.end("Not Found")
    }
    
})
sever.listen(5000,()=>{
    console.log("sever running")
})
*/