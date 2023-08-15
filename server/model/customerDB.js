const {knex} = require("./connections")

const getAllCustomersDB = async() =>{
  // const query = "SELECT * FROM customers"
  // const result = await knex.raw(query)
  const result = await knex.select().table('customers')
  return result
}

const getCustomerByUserNameDB = async(Username) =>{
  // const query = "SELECT * FROM customers"
  // const result = await knex.raw(query)
  const result = await knex.select().table('customers').where({Username})
  return result
}

const getCustomerByIdDB = async(id) =>{
  const result = await knex.select().from('customers').where({Id: id})
  return result
}

const addCustomerDB = async(customer) =>{
  const result = await knex("customers").insert(customer)
  return result
}

const updateCustomerDB = async (customer) =>{
  const rowToUpdate = await knex('customers').where({Id: customer.Id}).update(customer)
  return rowToUpdate
}

const deleteCustomerDB = async (id) =>{
  const result = await knex('customers').where({Id: id}).del()
  return result
}

module.exports = {
  getAllCustomersDB,
  getCustomerByIdDB,
  getCustomerByUserNameDB,
  addCustomerDB,
  updateCustomerDB,
  deleteCustomerDB
}
