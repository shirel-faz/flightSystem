import React from "react"
import "./loader.css"

function Loader({ active }) {
  return (
    active && (
      <span className="loader"></span>
    )
  )
}

export default Loader