 const express = require('express')
const routes = require("./routes/route")
const mongoose = require("mongoose")
const app = express()
const multer = require("multer")
const cors= require("cors")
mongoose.set('strictQuery', false);

app.use(express.json())
app.use(multer().any())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

//connecting to DB
mongoose.connect("mongodb+srv://SonuKumarYadav9:Sk957079%40@cluster0.9bcnwnf.mongodb.net/EBS",{
    useNewUrlParser: true
})
.then(()=>console.log("Connected to Database"))
.catch((e)=>console.log(e))


const port = 5000 || process.env.PORT

app.get('/', (req, res) => res.send('Hello World!'))
app.use("/",routes)

app.listen(port, () => console.log(` App listening on port ${port}!`))