const {knex} = require("./connections")

const getAllAirlinesDB = async() =>{
  const result = await knex.select().table('airline_companies')
  return result
}

const getAirlineByIdDB = async(id) =>{
  const result = await knex.select().from('airline_companies').where({Id: id})
  return result
}

const getAirlineByUserNameDB = async(Username) =>{
  const result = await knex.select().from('airline_companies').where({Username})
  return result
}

//addAirline
const addAirlineDB = async(airline) =>{
  const result = await knex('airline_companies').insert(airline)
  return result
}

//updateAirline
const updateAirlineDB = async(airline) =>{
  const result = await knex('airline_companies').where({Id: airline.Id}).update(airline)
  return result
}

//removeAirline
const deleteAirlineDB = async(Id) =>{
  const result = await knex('airline_companies').where({Id}).del()
  return result
}

module.exports = {
  getAllAirlinesDB,
  getAirlineByIdDB,
  getAirlineByUserNameDB,
  addAirlineDB,
  updateAirlineDB,
  deleteAirlineDB
}