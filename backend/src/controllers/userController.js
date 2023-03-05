const userModel = require("../models/userModel");

const {uploadFile } = require("../aws/awsS3")

const registerUser = async (req, res) => {
  try {
    let data = req.body;
    let files = req.files[0]
    let { name, email, password, role, address, landMark, state, mobile } = data
    
// validation wiil be added later
    
    if (Object.keys(data).length === 0) {
      return res
        .status(400)
        .send({ status: false, msg: "All fields are required" });
    }
    data.image=  await uploadFile(files)
        let user = await userModel.create(data)
        return res.status(201).send({status:true,data:user})
  } catch (error) {
    console.log(error)
    res.status(500).send({ status: false, msg: error.message });
  }
};

module.exports={registerUser}
