import "./CompanysManagment.css";
import React from 'react'
import { useState, useEffect } from 'react';
import { FETCH_API } from "../../../services/api";
// import { useNavigate } from "react-router-dom";

function CompanysManagment() {

  const [airlines, setAirlinesDB] = useState([])
  // const navigate = useNavigate()


  const getAirlinesDB = async () => {
    const allAirlines = await FETCH_API({
      path: `admin/allAirlines`,
    })
    setAirlinesDB(allAirlines);
    console.log(airlines);
  }


  useEffect(() => {
    getAirlinesDB()
  }, [])

  return (
    <div className="companiesMPage">
      <h1 className="companysMHeadline">Active Airlines Companies</h1>
      <div className="tableBox">
        <table className="table table-dark table-hover">
          <thead>
            <tr className="ths">
              <th>Airline ID</th>
              <th>Company Name</th>
              <th>Country ID</th>
              <th>User_Name</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {airlines?.map(airline => (
              <tr key={airline.Id} className="airline-item">
                <td>{airline.Id}</td>
                <td>{airline.Name}</td>
                <td>{airline.Country_Id}</td>
                <td>{airline.Username}</td>
                <td>{airline.Password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CompanysManagment