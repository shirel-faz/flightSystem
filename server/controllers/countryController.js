const {getCountriesDB, getCountryByIdDB, getCountriesByMainlandDB, addCountyDB, updateCountryDB, deleteCountryDB} = require('../model/countriesDB')


const getAllCountries = async(req,res) =>{
  try{
  const result = await getCountriesDB()
  // res.json(result[0]) ////using this in case you using a query in the function(getCountries)
  res.json(result)
  }catch(err){
    res.status(500).send(err);
    console.log(err);
  }
}

const getCountryById = async (req, res) =>{
  try{
    const id = req.params.id
    const result = await getCountryByIdDB(id)
    res.send(result)
  }catch(err){
    res.status(500).send(err);
    console.log(err);
  }
}

const getCountriesByMainland = async(req,res) =>{
  try{
    const mainland = req.params.mainland
    const result = await getCountriesByMainlandDB(mainland)
    res.send(result)
  }catch(err){
    res.status(500).send(err)
    console.log(err);
  }
}

const addCountry = async (req, res) =>{
  try{
    const newCountry = req.body
    const result = await addCountyDB(newCountry)
    res.json(result)
  }catch(err){
    res.status(500).send(err)
    console.log(err)
  }
}

const updateCountry = async(req,res) =>{
  try{
    const countryToUpdate = req.body
    const result = updateCountryDB(countryToUpdate)
    res.json(result)
  }catch(err){
    res.status(500).send(err);
    console.log(err);
  }
}

const deleteCountry = async(req,res) =>{
  try{
    const id = req.params.id
    const result = await deleteCountryDB(id)
    res.json(result)
  }catch(err){
    res.status(500).send(err);
    console.log(err);
  }
}



module.exports = {
  getAllCountries,
  getCountryById,
  getCountriesByMainland,
  addCountry,
  updateCountry,
  deleteCountry
}