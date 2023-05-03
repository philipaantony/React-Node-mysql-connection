const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const session = require('express-session');

//session varibales
 var currentuid =null;
 var currentusername = null;


//connection
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "testdb"
});


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: "secret",
  cookie: {
    expires: 60 * 60 * 24,
  },
}))


//geting
app.get("/api/get", (req, res) => {

  const sqlGet = "SELECT * FROM usertable ";
  db.query(sqlGet, (error, result) => {
    console.log("error", error);
    //console.log("result",result);
    res.send(result);
  })
})


//posting
app.post("/api/post", (req, res) => {
  const id = '';
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const phoneno = req.body.phoneno;
  const sqlinsert = "INSERT INTO  usertable VALUES(?,?,?,?,?)";
  db.query(sqlinsert, [id, username, email, password, phoneno], (error, result) => {
    if (error) {
      console.log(error, "error while inserting data ",);
    }
    else {
      console.log(result)
    }
  })
})

//deleting
app.delete("/api/remove/:id", (req, res) => {
  const { id } = req.params;
  const sqldelete = "DELETE FROM usertable WHERE id = ?";
  db.query(sqldelete, id, (error, result) => {
    if (error) {
      console.log(error);
    }
    else {
      console.log(result);
    }
  })
})


//getting instance for updating form
app.get("/api/get/:id", (req, res) => {
  const { id } = req.params
  const sqlupdate = "SELECT * FROM usertable where id =? ";
  db.query(sqlupdate, id, (error, result) => {
    console.log("error", error);
    if (error) {
      console.log(error)
    }
    res.send(result);
  })
})


//updating form 
app.put("/api/update/:id", (req, res) => {
  const { id } = req.params
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const phoneno = req.body.phoneno;
  const sqlupdate = "UPDATE  usertable SET username = ? ,email = ?,password = ?,phoneno = ? where id =? ";
  db.query(sqlupdate, [username, email, password, phoneno, id], (error, result) => {
    console.log("error", error);
    if (error) {
      console.log(error)
    }
    res.send(result);
  })
})

app.post("/api/addcontact", (req, res) => {
  const id = '';
  const uid = currentuid;
  const username =currentusername;
  const contactname = req.body.contactname;
  const phonenumber = req.body.phonenumber;
  const sqlinsert = "INSERT INTO  contact VALUES(?,?,?,?,?)";
  db.query(sqlinsert, [id, uid, username, contactname, phonenumber], (error, result) => {
    if (error) {
      console.log(error, "error while inserting data ",);
    }
    else {
      res.send(result);
    }
  })
})

//manual insertion
app.get("/", (req, res) => {
  // const sqlinsert = "INSERT INTO  usertable VALUES('Anjana','abin@gmail.com','abcdef','123654789')"
  // db.query(sqlinsert,(err,result)=>{
  //     console.log("error",err);
  //     console.log("result",result);
  //     res.send("hello");
  // })

})


//login 
app.post("/api/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email);
  console.log(password)
  const sqlq = "SELECT * FROM usertable WHERE email = ? AND password = ?";
  db.query(sqlq, [email, password], (err, result) => {
    if (err) {
      console.log(err)
    }
    else if (result.length > 0) {
      console.log(result);
      req.session.auth = true;
      req.session.id = result[0].id
      req.session.username = result[0].username
      req.session.user = result;
      req.session.save();
      console.log('session values');
      console.log(req.session.user);

      console.log('session user id');
      currentuid=req.session.user[0].id;
      console.log(req.session.id);

      console.log('session username ');
      console.log(req.session.user[0].username);
      currentusername = req.session.user[0].username;
     
      console.log('session value store gloabaly ');
      console.log(currentuid)
      res.send(result);
    }
    else {
      res.send(result = null);
      console.log(result);
    }

  }
  );
});



app.get("/api/currentuser", (req, res) => {
 const sessionvalue = req.session.user;
 console.log('session values passsssed');
 console.log(req.session.user);
 res.send(sessionvalue)
})

app.get("/api/logout", (req, res) => {
  req.session.destroy();
  res.send("you are logouted")
 })



app.listen(5000, () => {
  console.log("server running on port 5000");
})