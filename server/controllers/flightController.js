const {getAllFlightsDB, getFlightByIdDB, 
  getFlightsByAirlineDB, addFlightDB, updateFlightDB, 
  deleteFlightDB} = require("../model/flightDB")

const {getAirlineByIdDB} = require("../model/airlineDB")
  
  const getAllFlights = async(req, res) =>{
    try{
      const result = await getAllFlightsDB()
      res.send(result)
    }catch(err){
      res.status(500).send(err);
      console.log(err);
    }
  }
  
  const getFlightById = async(req, res) =>{
    try{
      const id = req.params.id
      const result = await getFlightByIdDB(id)
      res.send(result)
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

  const getFlightsByAirline = async(req,res) =>{
    try{
      const airlineName = req.params.airline
      const result = await getFlightsByAirlineDB(airlineName)
      res.send(result)
    }catch(err){
      res.status(500).send(err)
      console.log(err);
    }
  }
  
  const addFlight = async(req, res) =>{
    try{
      const newFlight = req.body
      const result = await addFlightDB(newFlight)
      res.json(result);
    }catch(err){
      res.status(500).send(err);
      console.log(err);
    }
  }
  
  const updateFlight = async(req, res) =>{
    try{
      const flightToUpdate = req.body
      const result = await updateFlightDB(flightToUpdate)
      res.json(result)
    }catch(err){
      res.status(500).send(err);
      console.log(err);
    }
  }
  
  const deleteFlight = async(req, res) =>{
    try{
      const id = req.params.id
      const result = await deleteFlightDB(id)
      res.json(result) 
    }catch(err){
      res.status(500).send(err);
      console.log(err);
    }
  }
  
  
  module.exports = {
    getAllFlights,
    getFlightById,
    getAirlineById,
    getFlightsByAirline,
    addFlight,
    updateFlight,
    deleteFlight
  }