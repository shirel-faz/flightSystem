const bcrypt = require("bcrypt")
const saltRounds = 10
const token_secret = "blablabla"
const jwt = require('jsonwebtoken')
const {getAllAdminsDB, getAdminByIdDB, 
  getAdminByUserNameDB, addAdminDB, updateAdminDB, 
  deleteAdminDB} = require("../model/adminDB")
  
  const getAllAdmins = async(req, res) =>{
    try{
      const result = await getAllAdminsDB()
      res.json(result)
    }catch(err){
      res.status(500).send(err);
      console.log(err);
    }
  }
  
  const getAdminById = async(req, res) =>{
    try{
      const id = req.params.id
      const result = await getAdminByIdDB(id)
      res.send(result)
    }catch(err){
      res.status(500).send(err);
      console.log(err);
    }
  }
  
  const getAdminByUserName = async(req,res) =>{
    try{
      const userName = req.params.userName
      const result = await getAdminByUserNameDB(userName)
      res.send(result)
    }catch(err){
      res.status(500).send(err);
      console.log(err);
    }
  }
  
  const addAdmin = async(req, res) =>{
    try{
      const newAdmin = req.body
      const result = await addAdminDB(newAdmin)
      res.json(result);
    }catch(err){
      res.status(500).send(err);
      console.log(err);
    }
  }
  
  const updateAdmin = async(req, res) =>{
    try{
      const adminToUpdate = req.body
      const result = await updateAdminDB(adminToUpdate)
      res.json(result)
    }catch(err){
      res.status(500).send(err);
      console.log(err);
    }
  }
  
  const deleteAdmin = async(req, res) =>{
    try{
      const id = req.params.id
      const result = await deleteAdminDB(id)
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
  
      const [user] = await getAdminByUserNameDB(Username);

      console.log(user)
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
  //     const { Username, First_Name, Last_Name, Email, Password } = req.body
  //     const ePassword = await bcrypt.hash(Password, saltRounds)
  //     const newUser = await addAdminDB({ Username, First_Name, Last_Name, Email, Password: ePassword })
  //     res.redirect("/admin/login")
  //   }catch(err){
  //     res.status(500).send(err);
  //     console.log(err);
  //   }
  // }

  const verifyAdmin = async(req, res)=>{
    res.status(200).json({data:"seccess"});
  }
  
  
  module.exports = {
    loginGet,
    loginPost,
    verifyAdmin,
    getAllAdmins,
    getAdminById,
    getAdminByUserName,
    addAdmin,
    updateAdmin,
    deleteAdmin
  }