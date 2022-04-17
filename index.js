const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
app.use(bodyParser.urlencoded({ extended: false }));
const MongoClient = require('mongodb').MongoClient;

app.use(express.static(__dirname + "/public"));

app.get("/", (req,res)=>{
    res.sendFile("./public/views/indexFake.html", { root: __dirname });
   
})
app.get("/login",(req,res)=>{
    res.sendFile("./public/views/login.html", { root: __dirname });
   
})
app.get("/signup",(req,res)=>{
    res.sendFile("./public/views/signup.html", { root: __dirname });
   
})
app.get("/nutrition",(req,res)=>{
   res.sendFile("./public/views/nutrition.html", { root: __dirname });
  
})

var arrayInput = {
    fullname: "",
    height: "",
    weight: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    //    gentle:"",
 };
 var dataDK = [];

app.post("/checkSignUp",(req,res)=>{
    // res.sendFile("./public/views/signup.html", { root: __dirname });
    // lấy dữ liệu từ trình duyệt
    arrayInput.fullname = req.body.fullname;
    arrayInput.height = req.body.height;
    arrayInput.weight = req.body.weight;
    arrayInput.email = req.body.email;
    arrayInput.phone = req.body.phone;
    arrayInput.username = req.body.username;
    arrayInput.password = req.body.password;
 
 
 
    // var temp =  JSON.parse(fs.readFileSync("data.json"))
    MongoClient.connect('mongodb+srv://root:12345@cluster0.vit2y.mongodb.net/admin?authSource=admin&replicaSet=atlas-11exv1-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', (err, client) => {
       if (err) throw err
       const db = client.db('account')
 
       db.collection('Account').insertOne({
          fullname: req.body.fullname,
          height: req.body.height,
          weight: req.body.weight,
          email: req.body.email,
          phone: req.body.phone,
          username: req.body.username,
          password: req.body.password,
       })
       console.log("ghi thanh cong");
 
       res.sendFile("./public/views/login.html", { root: __dirname })
 
    });
})
app.post("/checkLogin",(req,res)=>{
    // res.sendFile("./public/views/signup.html", { root: __dirname });
    MongoClient.connect('mongodb+srv://root:12345@cluster0.vit2y.mongodb.net/admin?authSource=admin&replicaSet=atlas-11exv1-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', (err, client) => {
      if (err) throw err
      const db = client.db('account')
      function ab(data) {
         console.log(1);
         var check = false
         for (var i = 0; i < data.length; i++) {
            if (data[i].username == req.body.username && data[i].password == req.body.password) {
               // res.sendFile("./views/contact.html",{root:__dirname})
               check = true
               break
            }
         }
         if (check) {
            res.sendFile("./public/views/index.html", { root: __dirname })
         } else {
            res.sendFile("./public/views/index.html", { root: __dirname })
         }
      }
      db.collection('Account').find().toArray((err, result) => {
         if (err) throw err
         dataDK = result
         ab(dataDK);
      })

   });
})
app.listen(8080)


