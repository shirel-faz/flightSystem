import "./Flights.css";
import React from 'react'
import { useState, useEffect } from 'react';
import { FETCH_API } from "../../services/api";
import { getDateFormat } from "../../services/common";
import { useNavigate } from "react-router-dom";
import Loader from "../../shared/loader/loader";

function Flights() {

  const [flightsDB, setFlightsDB] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const getFlightsDB = async () => {
    setIsLoading(true);
    const AllFlights = await FETCH_API({
      path: `allFlights`,
    })
    // because i was asked to put in the flights table
    // an airline id and country id i needed to 
    // convert it to the names
    const allFlightsWithName = await Promise.all(
      AllFlights.map(async (Flights) => {
        Flights.ComapnyName = await findAirlineById(Flights.Airline_Id);
        Flights.CountryOriginName = await findCountryById(Flights.Origin_Country_Id);
        Flights.CountryDesName = await findCountryById(Flights.Destination_Country_Id);
        return Flights
      }))
    
      setIsLoading(false);
      setFlightsDB(allFlightsWithName);
  }

  const findAirlineById = async (id) => {
    const data = await FETCH_API({
      path: `getAirlineById/${id}`,
    })
    return data[0]?.Name || '';
  }

  const findCountryById = async (id) => {
    const data = await FETCH_API({
      path: `countryById/${id}`,
    })

    return data[0]?.Name || '';
  }

  useEffect(() => {
    getFlightsDB()
  },[])

  return (
      isLoading ?  <Loader active={isLoading}/> : (
        <div className="flightsPage">
        {/* <h1>Flights Table</h1> */}
        <h1 className="flightHeadline">Registered Flights</h1>
        <div className="tableBox">
          <table className="table table-dark table-hover">
            <thead>
              <tr className="ths">
                <th>Flight ID</th>
                <th>Airline</th>
                <th>Origin Country</th>
                <th>Destination Country</th>
                <th>Departure Time</th>
                <th>Landing Time</th>
                <th>Remaining Tickets</th>
              </tr>
            </thead>
            <tbody>
              {flightsDB?.map(flight => (
                <tr onClick={() => navigate(`/tickets/${flight.Id}`)} key={flight.Id} className="flight-item">
                  <td>{flight.Id}</td>
                  <td>{flight.ComapnyName}</td>
                  <td>{flight.CountryOriginName}</td>
                  <td>{flight.CountryDesName}</td>
                  <td>{getDateFormat(flight.Departure_Time)}</td>
                  <td>{getDateFormat(flight.Landing_Time)}</td>
                  <td>{flight.Remaining_Tickets}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      )
  )
}

export default Flights