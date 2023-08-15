import { useEffect } from "react"
import "./Root.css"
import { Outlet, useNavigate } from "react-router-dom"
import { FETCH_API } from "../../../services/api"

function Root() {
  const nav = useNavigate()
 
  useEffect(() => {
    checkAirline()
  })

  const checkAirline = async () => {
    const res = await FETCH_API({ path: "airline/verifyAirline", isToken: true, _method: 'POST', _body: {} })
    if (!(res && res.data === 'seccess')) {
      localStorage.removeItem(process.env.REACT_APP_TOKEN);
      nav('/airline/login')
    }
  }
  return (
    <div className="rootDiv">
      <Outlet />
    </div>
  )
}
export default Root