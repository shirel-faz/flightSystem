const express = require('express')
const router = express.Router()

// getting all the flight functions from the conroller
const {getAllFlights, getFlightById, getAirlineById,
  getFlightsByAirline, addFlight, updateFlight,
  deleteFlight} = require("../controllers/flightController")

  router.get("/allFlights", getAllFlights)
  router.get("/flightById/:id", getFlightById)
  router.get("/getAirlineById/:id", getAirlineById)
  router.get("/flightsOfAirline/:airline", getFlightsByAirline)
  router.post("/addFlight", addFlight)
  router.put("/updateFlight", updateFlight)
  router.delete("/deleteFlight/:id", deleteFlight)

  module.exports = router;