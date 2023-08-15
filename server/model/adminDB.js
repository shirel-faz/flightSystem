const {knex} = require("./connections")

const getAllAdminsDB = async() =>{
  const result = await knex.select().table('adminstrators')
  return result
}

const getAdminByIdDB = async(id) =>{
  const result = await knex.select().from('adminstrators').where({Id: id})
  return result
}

const getAdminByUserNameDB = async(userName) =>{
  const result = await knex.select().from('adminstrators').where('Username', userName)
  return result
}

const addAdminDB = async(admin) =>{
  const result = await knex('adminstrators').insert(admin)
  return result
}

const updateAdminDB = async(admin) =>{
  const result = await knex('adminstrators').where({Id: admin.Id}).update(admin)
  return result
}

const deleteAdminDB = async(id) =>{
  const result = await knex('adminstrators').where({Id: id}).del()
  return result
}

module.exports = {
  getAllAdminsDB,
  getAdminByIdDB,
  getAdminByUserNameDB,
  addAdminDB,
  updateAdminDB,
  deleteAdminDB
}
