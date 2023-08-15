const express = require('express')
const router = express.Router()

const {loginGet, loginPost, getAllAirlines, getAirlineById, 
  getAirlineByUserName, addAirline, updateAirline, 
  deleteAirline, verifyAirline} = require("../controllers/airlineController")
const { airlineAuthenticate } = require('../middleware/authenticate')

  router.get("/login", loginGet)
  router.post("/login", loginPost)
  router.post("/verifyAirline", airlineAuthenticate, verifyAirline)
  router.get("/allAirlines", getAllAirlines)
  router.get("/findAirlineById/:id", getAirlineById)
  router.get("/airlineByUserName/:userName", getAirlineByUserName)
  router.get("/addAirline", addAirline)
  router.get("/updateAirline", updateAirline)
  router.get("/deleteAirline/:id", deleteAirline)

  module.exports = router;