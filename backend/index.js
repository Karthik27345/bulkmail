require("dotenv").config()

const express = require("express")
const cors = require("cors")
const{ Resend } = require("resend")
const mongoose = require("mongoose")

const app = express()

const resend = new Resend(process.env.RESEND_API_KEY)

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

        console.log("Sending emails through Resend...")

        // Send emails
        for (let i = 0; i < emailList.length; i++) {

            const { data, error } = await resend.emails.send({

                from: "onboarding@resend.dev",

                to: [emailList[i]],

                subject: subject,

                text: emailbody

            })

            if (error) {

                console.log("Resend error:", error)

                return res.status(500).send(false)

            }

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