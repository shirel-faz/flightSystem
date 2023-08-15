import "./Tickets.css";
import React from 'react'
import { useState, useEffect } from 'react';
import { FETCH_API } from "../../services/api";
import { useParams } from "react-router-dom";

function Tickets() {

  const [tickets, setTickets] = useState([])
  const  { flightId } = useParams()

 useEffect(()=> {
  getTicketsByFlightId();
 },[flightId])

  const getTicketsByFlightId = async() => {
    const tickes = await FETCH_API({
      path: `getTicketsByFlight/${flightId}`,
    })

    setTickets(tickes);
  }

  return (

    <div>
      <table className="table flights table-borderless table-dark table-hover">
        <thead>
          <tr  className="ths">
            <th>Ticket ID</th>
            <th>Flight Id</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket =>(
            <tr onClick={()=> {}} key={ticket.Id} className="ticket-item">
            <td>{ticket.Id}</td>
            <td>{ticket.Flight_Id}</td>

          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Tickets