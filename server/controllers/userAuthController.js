const {getAllCustomersDB, addCustomerDB, getCustomerByUserNameDB} = require("../model/customerDB")
const bcrypt = require("bcrypt")
const saltRounds = 10
const token_secret = "blablabla"
const jwt = require('jsonwebtoken')


const loginGet = (req, res) => {
  res.render("login")
}

const loginPost = async (req, res) =>{
  try{
    const { Password, Username } = req.body
    // res.json({passwordLog, usernameLog})
    // return

    const [user] = await getCustomerByUserNameDB(Username);
    // return res.json({user})
    if(!user){
     return res.status(404).json({msg: 'user not found!'})
    }

    const isPasswordCorrect = await bcrypt.compare(Password, user.Password)
    
    if (!isPasswordCorrect) {
      return res.status(400).json({msg: 'one of detailes wrong!'})
    }

    const token = jwt.sign({Id :user.Id}, token_secret, {expiresIn: '1800s'})
    res.status(200).json({token});
  }catch(err){
    res.status(500).send(err);
    console.log(err);
  }
}

const signUpGet = (req, res) =>{
  res.render("signUp")
}

const signUpPost = async (req, res) =>{
  try{
    const { Username, First_Name, Last_Name, Email, Password } = req.body
    const ePassword = await bcrypt.hash(Password, saltRounds)
    const newUser = await addCustomerDB({ Username, First_Name, Last_Name, Email, Password: ePassword })
    res.status(200).json({newUser})
  }catch(err){
    res.status(500).send(err);
    console.log(err);
  }
}

module.exports ={
  loginGet,
  loginPost,
  signUpGet,
  signUpPost
}