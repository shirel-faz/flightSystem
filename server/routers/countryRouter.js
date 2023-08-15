const express = require('express')
const router = express.Router()

// getting all the country functions from the conroller
const {getAllCountries, getCountryById, 
  getCountriesByMainland, addCountry, 
  updateCountry, deleteCountry} = require("../controllers/countryController")

  router.get("/allCountries", getAllCountries)
  router.get("/countryById/:id", getCountryById)
  router.get("/countriesByMainland/:mainland", getCountriesByMainland)
  router.post("/addCountry", addCountry)
  router.put("/updateCountry", updateCountry)
  router.delete("/deleteCountry/:id", deleteCountry)

  module.exports = router;