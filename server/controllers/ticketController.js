const {getAllTicketsDB, getTicketByIdDB, getTicketsByUserIdDB, 
  getTicketsByUserNameDB, addTicketDB, updateTicketDB, 
  deleteTicketDB,
  getTicketByFlightIdDB} = require("../model/ticketDB")
  
  const getAllTickets = async(req, res) =>{
    try{
      const result = await getAllTicketsDB()
      res.json(result)
    }catch(err){
      res.status(500).send(err);
      console.log(err);
    }
  }
  
  const getTicketById = async(req, res) =>{
    try{
      const id = req.params.id
      const result = await getTicketByIdDB(id)
      res.send(result)
    }catch(err){
      res.status(500).send(err);
      console.log(err);
    }
  }

  const getTicketByFlightId = async(req, res) =>{
    try{
      const id = req.params.id
      const result = await getTicketByFlightIdDB(id)
      res.send(result)
    }catch(err){
      res.status(500).send(err);
      console.log(err);
    }
  }

  const getTicketsByUserID = async(req,res) =>{
    try{
      const customerID = req.params.userID
      const result = await getTicketsByUserIdDB(customerID)
      res.send(result)
    }catch(err){
      res.status(500).send(err)
      console.log(err);
    }
  }

  const getTicketsByUserName = async(req,res) =>{
    try{
      const user_Name = req.params.userName
      const result = await getTicketsByUserNameDB(user_Name)
      res.send(result)
    }catch(err){
      res.status(500).send(err)
      console.log(err);
    }
  }
  
  const addTicket = async(req, res) =>{
    try{
      const newTicket = req.body
      const result = await addTicketDB(newTicket)
      res.json(result);
    }catch(err){
      res.status(500).send(err);
      console.log(err);
    }
  }
  
  const updateTicket = async(req, res) =>{
    try{
      const ticketToUpdate = req.body
      const result = await updateTicketDB(ticketToUpdate)
      res.json(result)
    }catch(err){
      res.status(500).send(err);
      console.log(err);
    }
  }
  
  const deleteTicket = async(req, res) =>{
    try{
      const id = req.params.id
      const result = await deleteTicketDB(id)
      res.json(result) 
    }catch(err){
      res.status(500).send(err);
      console.log(err);
    }
  }
  
  
  module.exports = {
    getAllTickets,
    getTicketById,
    getTicketByFlightId,
    getTicketsByUserID,
    getTicketsByUserName,
    addTicket,
    updateTicket,
    deleteTicket
  }