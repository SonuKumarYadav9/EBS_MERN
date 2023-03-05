const  express = require("express")
const userCont = require("../controllers/userController");

let {registerUser }=userCont

const router = express.Router()




router.post('/register', registerUser)

module.exports= router