require("dotenv").config()


const express = require("express")


const cors = require("cors")
const mongoose = require("mongoose")
const nodemailer = require("nodemailer")





const app = express()

app.use(cors())

app.use(express.json())


const PORT = 8000

app.listen(PORT,()=>{
   console.log("Server started on",PORT)
})



mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("database is connected")
}).catch(()=>{"database is not connected"})


const credentials = mongoose.model("credentials",{},"bulkmail")

app.post("/sendemail",(req,res)=>{
    const subject = req.body.subject 
    const emailbody = req.body.emailbody 
    const emailList = req.body.emailList

credentials.find().then((data)=>{


const transporter = nodemailer.createTransport({
    service:"gmail",

    auth:{
        user: data[0].toJSON().user,
        pass: data[0].toJSON().pass
    }

   
    
})


new Promise (  async (resolve,reject)=>{



 
   try {

        for(let i=0;i<emailList.length;i++){

         await transporter.sendMail({

           from: data[0].toJSON().user,
            to:emailList[i],
            subject:subject,
            text:emailbody
         }

            )


            
        console.log("Email Sent to",emailList[i])
        }




resolve("success")

    }


    catch{

        reject("failed")
        

    }





  
}).then(()=>{res.send(true)}).catch(()=>{
    res.send(false)
})



}).catch((error)=>{
    console.log(error)
    res.status(500).send(false)
})

    
})