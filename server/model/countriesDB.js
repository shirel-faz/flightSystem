const {knex} = require("./connections")


const getCountriesDB = async() =>{
  // const query = "SELECT * FROM countries"
  // const result = await knex.raw(query)
  const result = await knex.select().table('countries')
  return result
}

const getCountryByIdDB = async(id) =>{
  const result = await knex.select().from('countries').where({Id: id})
  return result
}

const getCountriesByMainlandDB = async(mainland) =>{
  const result = await knex.select().from('countries').where({Mainlind: mainland})
  return result
}

const addCountyDB = async(country) =>{
  const result = await knex("countries").insert(country)
  return result
}

const updateCountryDB = async (country) =>{
  const rowToUpdate = await knex('countries').where({Id: country.Id}).update(country)
  return rowToUpdate
}

const deleteCountryDB = async (id) =>{
  const result = await knex('countries').where({Id: id}).del()
  return result
}

module.exports = {
  getCountriesDB,
  getCountryByIdDB,
  getCountriesByMainlandDB,
  addCountyDB,
  updateCountryDB,
  deleteCountryDB
}