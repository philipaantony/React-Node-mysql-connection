const mysql = require('mysql');

var mysqlconnection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"testdb",
});

mysqlconnection.connect((err)=>{
   if(!err){
    console.log('connected sucessfully to the database')
   }
   else{
    console.log('failed to connect\n err')
   }
});



mysqlconnection.query("INSERT INTO  usertable VALUES('abidn','abin@gmail.com','abin11','123654789')",(err,result,feilds)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
})
