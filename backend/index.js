require("dotenv").config()

const express = require("express")
const cors = require("cors")
const nodemailer = require("nodemailer")
const mongoose = require("mongoose")

const app = express()

const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(cors())


// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => {

        console.log("Database is connected")

        // Start server only after MongoDB connection
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
        })

    })
    .catch((error) => {

        console.log("Database connection error:")
        console.log(error)

    })


// Credentials collection
const credentialsSchema = new mongoose.Schema({
    user: String,
    pass: String
})

const credentials = mongoose.model(
    "credentials",
    credentialsSchema,
    "bulkmail"
)


// Test route
app.get("/", (req, res) => {
    res.send("BulkMail backend is running")
})


// Send email
app.post("/sendemail", async (req, res) => {

     console.log("SEND EMAIL API CALLED")

    try {

       

        const { subject, emailbody, emailList } = req.body

        console.log("Subject:", subject)
        console.log("Email body:", emailbody)
        console.log("Email list:", emailList)


        // Check email list
        if (!emailList || emailList.length === 0) {

            return res.status(400).send(false)

        }


        // Get Gmail credentials from MongoDB
        const data = await credentials.find()

        console.log("Credentials received from MongoDB")


        if (!data || data.length === 0) {

            console.log("No credentials found in MongoDB")

            return res.status(500).send(false)

        }


        const emailUser = data[0].user
        const emailPassword = data[0].pass


        // Check credentials
        if (!emailUser || !emailPassword) {

            console.log("Email credentials are missing")

            return res.status(500).send(false)

        }


        // Create transporter
        const transporter = nodemailer.createTransport({

            service: "gmail",

            auth: {
                user: emailUser,
                pass: emailPassword
            }

        })


        console.log("Checking Gmail connection...")


        // Check Gmail connection
        await transporter.verify()

        console.log("Gmail connection successful")


        // Send emails
        for (let i = 0; i < emailList.length; i++) {

            await transporter.sendMail({

                from: emailUser,

                to: emailList[i],

                subject: subject,

                text: emailbody

            })

            console.log("Email sent to:", emailList[i])

        }


        console.log("All emails sent successfully")

        res.send(true)


    } catch (error) {

        console.log("EMAIL ERROR:")
        console.log(error)

        res.status(500).send(false)

    }

})