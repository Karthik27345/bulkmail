require("dotenv").config ()  

const express = require("express")
const cors = require("cors")
const nodemailer = require("nodemailer")
const mongoose = require("mongoose")


const PORT = 8000




const app = express()

app.use(express.json())

app.use(cors())



app.listen(PORT,()=>{
    console.log("Server started")
})

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Database is connected")
}).catch(()=>{
    "Database is not connected"
})


const credentials = mongoose.model("credentials",{},"bulkmail")








app.post("/sendemail",(req,res)=>{

const subject = req.body.subject
const emailbody = req.body.emailbody
const emailList = req.body.emailList



    console.log(subject)
    console.log(emailbody)

    console.log(emailList)



credentials.find().then((data)=>{




const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:data[0].toJSON().user,
        pass:data[0].toJSON().pass
    }

})


new Promise(async (resolve,reject)=>{


    try{

  for(let i=0;i<emailList.length;i++){
          await transporter.sendMail({

    from:"karthikvijaysuresh@gmail.com",
    to:emailList[i],
    subject:subject,
    text:emailbody
    

})

console.log("Email sent to "+emailList[i])
    }

    resolve("success")


    }

    catch(error){
reject("failed")



    }



}).then(()=>{
    res.send(true)
}).catch(()=>{
    res.send(false)
})




   
}).catch((error)=>{
    console.log(error)
})




  


 
})