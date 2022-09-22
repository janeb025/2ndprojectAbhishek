const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const User = require("./model");

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8080;
const skillSchema = new mongoose.Schema({
  skill: String,
  });
 



app.post("/registration", (req, res)=> {
  console.log("hello");
  const name=req.query.name;
  const email=req.query.email;
  const mobileno=req.query.mobileno;
  const password=req.query.password;
  const qualification=req.query.qualification;
  const designation=req.query.designation;
  const about=req.query.about;

  //const password1 = bcrypt.hash(req.query.password, 12);
 
  User.findOne({email:email},(err,user)=>{
    if(user){
      res.send({message: "User already registerd"})
    }
    else{
      var newuser= new User({
        name:name,
        email:email,
        mobileno:mobileno,
        password:password,
        qualification:qualification,
        designation:designation,
        about:about,
       
      })
      newuser.save(function(err,result){
        if (err){
          console.log(err);
        }
        else{
      res.send({message: "User registered"})
          console.log(result)
        }
      })
    }
  })  

})
app.post("/skill", (req, res)=> {
  console.log("hello");
  const skill=req.query.skill;
 

  //const password1 = bcrypt.hash(req.query.password, 12);
 
  
      const newskill= new skillSchema({
        skill:skill,
        
      })
     
      
      newskill.save(function(err,result){
        if (err){
          console.log(err);
        }
        else{
      res.send({message: "skill saved"})
          console.log(result)
        }
      })
    });
  










app.get("/login", async (req, res) => {
  const email = req.query.email;
  const user = await User.findOne({ email });
  if (user) {
    res.status(200).json(user);
   
  } else {
    res.status(404).json({ error: "User not found" });

  }
});





//find query
   app.get("/fetchlist", async (req, res) => {
   
    const user = await User.find();
    console.log(user)
    if (user) {
      res.status(200).json(user);
     
    } else {
      res.status(404).json({ error: "User not found" });
  
    }
 
   });


//delete based on id
app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id)
  User.findOneAndDelete({ email:id }, function (err, docs) {
    
});
}
);






app.listen(PORT, () => {
  console.log(`Server at ${PORT}`);
});

app.get('/',(req,res)=>{
  res.send("Running at 8080");
})


mongoose.connect("mongodb://localhost:27017")
.then(() => {
  console.log("mongodb connection successful");
})
.catch((err) => {
  console.log(err);
});








//find query
//    app.get("/fetchlist6", async (req, res) => {
   
//     const user = await Consumerdetail4.find({status:"Pending",assignedto:"Manish Kumar"});
//     console.log(user)
//     if (user) {
//       res.status(200).json(user);
     
//     } else {
//       res.status(404).json({ error: "User not found" });
  
//     }
 
//    });




//delete based on id
//   app.delete("/delete1/:Consumerid", async (req, res) => {
//     const Consumerid = req.params.Consumerid;
//     const user = await LINEMAN.findOneAndDelete({ Consumerid });
    
//     }
//   );




//find and update by id
//    app.delete("/updatework/:id", async (req, res) => {
//      const id = req.params.id;
//      console.log(id)
//      Consumerdetail.findOneAndUpdate({ Consumerid:id },{Workstatus:"Completed"}, function (err, docs) {
//       if (err){
//           console.log(err)
//       }
//       else{
//           console.log("Original Doc : ",docs);
//       }
//   });
//     });








// // find one and update

// app.post("/activatelineman", (req, res)=> {
//   console.log("hello");
//   const phonenumber=req.query.phonenumber;
  
//   const st="1";
//   LINEMAN.findOneAndUpdate({phonenumber:phonenumber}, {$set:{status:st}}, (err, doc) => {
//     if(err){
//       console.log("Something wrong when updating data!");
//   }

//   console.log(doc);
//   res.send({message: "Lineman Activated successfully."})
  
// });
  
// })






//insert data in table
// // const abc = new employee({
// //   ERID: "12345678",
// //   name: "manish",
// //       email: "aeit.mks@gmail.com",
// //       number: "88888",
// //       nic: "wfddds",
// //       address: "lucknow"
// // });

// // abc.save()
// //   .then(() => {
// //     console.log("User saved");
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });
