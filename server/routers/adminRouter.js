const express = require('express')
const router = express.Router()
const {loginGet, loginPost, verifyAdmin, getAllAdmins, 
  getAdminById, getAdminByUserName, addAdmin, updateAdmin, 
  deleteAdmin} = require("../controllers/adminController")
const { AdminAuthenticate } = require('../middleware/authenticate')
const {getAllAirlines} = require("../controllers/airlineController")

  router.get("/login", loginGet)
  router.post("/login", loginPost)
  router.post("/verifyAdmin", AdminAuthenticate, verifyAdmin)
  router.get("/allAdmins", getAllAdmins)
  router.get("/allAirlines", getAllAirlines)
  router.get("/findAdminById/:id", getAdminById)
  router.get("/adminByUserName/:userName", getAdminByUserName)
  router.get("/addAdmin", addAdmin)
  router.get("/updateAdmin", updateAdmin)
  router.get("/deleteAdmin/:id", deleteAdmin)

  module.exports = router;