
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://talhazafarmustafa_db_user:talhazafarmustafa_db_user@cluster0.hwtwub1.mongodb.net/")
    .then(() => {
        console.log("MongoDB is connected")
    }).catch(() => {
        console.log("Mongo Db is not connected")
    })
const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String,
})
const Dental = mongoose.model("Dental", formSchema)
app.post("/submit-form", async (req, res) => {

    try {
        const { formData } = req.body
        const dental = new Dental({ ...formData })
        const response = await dental.save()
        console.log(response)
        res.status(200).json({ success: true, message: "Form submit successfully", response })

    }

    catch (error) {
        console.log("error", error)
    }
    res.status(404).json({ error: fail, message: "Form not saved successfully please contact to developer" })
})
const Port = process.env.PORT || 5000
app.listen(Port,()=>{
console.log(`Server is running on ${Port}`)
})


