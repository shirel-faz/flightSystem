const express = require('express')
const router = express.Router()

// getting all the ticket functions from the conroller
const {getAllTickets, getTicketById, getTicketsByUserID,
  getTicketsByUserName, addTicket, updateTicket,
  deleteTicket,
  getTicketByFlightId} = require("../controllers/ticketController")

  router.get("/allTickets", getAllTickets)
  router.get("/ticketById/:id", getTicketById)
  router.get("/getTicketsByFlight/:id", getTicketByFlightId)
  router.get("/ticketByUserID/:userID", getTicketsByUserID)
  router.get("/ticketByUserName/:userName", getTicketsByUserName)
  router.post("/addTicket", addTicket)
  router.put("/updateTicket", updateTicket)
  router.delete("/deleteTicket/:id", deleteTicket)

  module.exports = router;