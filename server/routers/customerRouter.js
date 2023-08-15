const express = require('express')
const router = express.Router()

// getting all the customer functions from the conroller
const {getAllCustomers, getCustomerById, 
  getCustomerByUserName, addCustomer, updateCustomer, 
  deleteCustomer} = require("../controllers/customerController")

  router.get("/allCustomers", getAllCustomers)
  router.get("/CustomerById/:id", getCustomerById)
  router.get("/customerByUserName/:userName", getCustomerByUserName)
  router.post("/addCustomer", addCustomer)
  router.put("/updateCustomer", updateCustomer)
  router.delete("/deleteCustomer/:id", deleteCustomer)

  module.exports = router;