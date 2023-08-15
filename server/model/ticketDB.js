const {knex} = require("./connections")

const getAllTicketsDB = async() =>{
  // const query = "SELECT * FROM tickets"
  // const result = await knex.raw(query)
  const result = await knex.select().table('tickets')
  return result
}

const getTicketByIdDB = async(id) =>{
  const result = await knex.select().from('tickets').where({Id: id})
  return result
}

const getTicketByFlightIdDB = async(flightId) =>{
  const result = await knex.select().from('tickets').where({Flight_Id: flightId})
  return result;
}

const getTicketsByUserIdDB = async(userID) =>{
  const result = await knex.select().from('tickets').where({Customer_Id: userID})
  return result
}

const getTicketsByUserNameDB = async(userName) =>{
  const userID = knex.select('Id').from('customers').where({Usename: userName})
  const result = await knex.select().from('tickets').where({Customer_Id: userID})
  return result
}

const addTicketDB = async(ticket) =>{
  const result = await knex("tickets").insert(ticket)
  return result
}

const updateTicketDB = async (ticket) =>{
  const rowToUpdate = await knex('tickets').where({Id: ticket.Id}).update(ticket)
  return rowToUpdate
}

const deleteTicketDB = async (id) =>{
  const result = await knex('tickets').where({Id: id}).del()
  return result
}

module.exports = {
  getAllTicketsDB,
  getTicketByIdDB,
  getTicketByFlightIdDB,
  getTicketsByUserIdDB,
  getTicketsByUserNameDB,
  addTicketDB,
  updateTicketDB,
  deleteTicketDB
}