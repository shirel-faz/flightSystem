const bcrypt = require("bcrypt")
const saltRounds = 10
const token_secret = "blablabla"
const jwt = require('jsonwebtoken')
const {getAllAirlinesDB, getAirlineByIdDB, 
  getAirlineByUserNameDB, addAirlineDB, updateAirlineDB, 
  deleteAirlineDB} = require("../model/airlineDB")

const getAllAirlines = async(req, res) =>{
  try{
    const result = await getAllAirlinesDB()
    res.json(result)
  }catch(err){
    res.status(500).send(err);
    console.log(err);
  }
}

const getAirlineById = async(req, res) =>{
  try{
    const id = req.params.id
    const result = await getAirlineByIdDB(id)
    res.send(result)
  }catch(err){
    res.status(500).send(err);
    console.log(err);
  }
}

const getAirlineByUserName = async(req,res) =>{
  try{
    const userName = req.params.userName
    const result = await getAirlineByUserNameDB(userName)
    res.send(result)
  }catch(err){
    res.status(500).send(err);
    console.log(err);
  }
}


const addAirline = async(req, res) =>{
  try{
    const newAirline = req.body
    const result = await addAirlineDB(newAirline)
    res.json(result);
  }catch(err){
    res.status(500).send(err);
    console.log(err);
  }
}

const updateAirline = async(req, res) =>{
  try{
    const airlineToUpdate = req.body
    const result = await updateAirlineDB(airlineToUpdate)
    res.json(result)
  }catch(err){
    res.status(500).send(err);
    console.log(err);
  }
}

const deleteAirline = async(req, res) =>{
  try{
    const id = req.params.id
    const result = await deleteAirlineDB(id)
    res.json(result) 
  }catch(err){
    res.status(500).send(err);
    console.log(err);
  }
}

const loginGet = (req, res) => {
  res.render("login")
}

const loginPost = async (req, res) =>{
  try{
    const { Password, Username } = req.body
    const [user] = await getAirlineByUserNameDB(Username);
    if(!user){
     return res.status(404).json({msg: 'user not found!'})
    }
    const isPasswordCorrect = await bcrypt.compare(Password, user.Password)
    if (!isPasswordCorrect) {
      return res.status(400).json({msg: 'one of the detailes wrong!'})
    }
    const token = jwt.sign({Id :user.Id}, token_secret, {expiresIn: '1800s'})
    res.status(200).json({token});
  }catch(err){
    res.status(500).send(err);
    console.log(err);
  }
}

// const signUpGet = (req, res) =>{
//   res.render("signUp")
// }

// const signUpPost = async (req, res) =>{
//   try{
//     const { Name, Username, password } = req.body
//     const ePassword = await bcrypt.hash(password, saltRounds)
//     const newUser = await addAirlineDB({ Name, Username, password: ePassword })
//     res.redirect("/login")
//   }catch(err){
//     res.status(500).send(err);
//     console.log(err);
//   }
// }

const verifyAirline= async(req, res)=>{
  res.status(200).json({data:"seccess"});
}


module.exports = {
  loginGet,
  loginPost,
  verifyAirline,
  getAllAirlines,
  getAirlineById,
  getAirlineByUserName,
  addAirline,
  updateAirline,
  deleteAirline
}