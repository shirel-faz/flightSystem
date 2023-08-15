import "./Root.css"
import { Outlet } from "react-router-dom"

function Root() {
  return (
    <div className="rootDiv">
      {
      <Outlet /> 
      }
    </div>
  )
}

export default Root