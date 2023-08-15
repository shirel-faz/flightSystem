const {getAllCustomersDB, getCustomerByIdDB, 
  getCustomerByUserNameDB, addCustomerDB, updateCustomerDB, 
  deleteCustomerDB} = require("../model/customerDB")
  
  const getAllCustomers = async(req, res) =>{
    try{
      const result = await getAllCustomersDB()
      res.json(result)
    }catch(err){
      res.status(500).send(err)
      console.log(err);
    }
  }
  
  const getCustomerById = async(req, res) =>{
    try{
      const id = req.params.id
      const result = await getCustomerByIdDB(id)
      res.send(result)
    }catch(err){
      res.status(500).send(err);
      console.log(err);
    }
  }

  const getCustomerByUserName = async(req,res) =>{
    try{
      const userName = req.params.userName
      const result = await getCustomerByUserNameDB(userName)
      res.json(result) 
    }catch(err){
      res.status(500).send(err)
      console.log(err);
    }
  }
  
  const addCustomer = async(req, res) =>{
    try{
      const newCustomer = req.body
      const result = await addCustomerDB(newCustomer)
      res.json(result);
    }catch(err){
      res.status(500).send(err);
      console.log(err);
    }
  }
  
  const updateCustomer = async(req, res) =>{
    try{
      const customerToUpdate = req.body
      const result = await updateCustomerDB(customerToUpdate)
      res.json(result)
    }catch(err){
      res.status(500).send(err);
      console.log(err);
    }
  }
  
  const deleteCustomer = async(req, res) =>{
    try{
      const id = req.params.id
      const result = await deleteCustomerDB(id)
      res.json(result) 
    }catch(err){
      res.status(500).send(err);
      console.log(err);
    }
  }
  
  
  module.exports = {
    getAllCustomers,
    getCustomerById,
    getCustomerByUserName,
    addCustomer,
    updateCustomer,
    deleteCustomer
  }