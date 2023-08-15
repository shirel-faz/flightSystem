const {knex} = require("./connections")

const {getAirlineByIdDB} = require("./airlineDB")

const getAllFlightsDB = async() =>{
  // const query = "SELECT * FROM flights"
  // const result = await knex.raw(query)
  const result = await knex.select().table('flights')
  return result
}

const getFlightByIdDB = async(id) =>{
  const result = await knex.select().from('flights').where({Id: id})
  return result
}

const getFlightsByAirlineDB = async(airlineName) =>{
  const airlineId = knex.select('Id').from('airline_companies').where({Name: airlineName})
  const result = await knex.select().from('flights').where({Airline_Company: airlineId})
  return result
}

const addFlightDB = async(flight) =>{
  const result = await knex("flights").insert(flight)
  return result
}

const updateFlightDB = async (flight) =>{
  const rowToUpdate = await knex('flights').where({Id: flight.Id}).update(flights)
  return rowToUpdate
}

const deleteFlightDB = async (id) =>{
  const result = await knex('flights').where({Id: id}).del()
  return result
}

module.exports = {
  getAllFlightsDB,
  getFlightByIdDB,
  getFlightsByAirlineDB,
  addFlightDB,
  updateFlightDB,
  deleteFlightDB
}


