import { useEffect } from "react"
import "./Root.css"
import { Outlet, useNavigate } from "react-router-dom"
import { FETCH_API } from "../../../services/api"

function Root() {
  const nav = useNavigate()
 
  useEffect(() => {
    checkAdmin()
  })

  const checkAdmin = async () => {
    const res = await FETCH_API({ path: "admin/verifyAdmin", isToken: true, _method: 'POST', _body: {} })
    if (!(res && res.data === 'seccess')) {
      localStorage.removeItem(process.env.REACT_APP_TOKEN);
      nav('/admin/login')
    }
  }
  return (
    <div className="rootDiv">
      <Outlet />
    </div>
  )
}
export default Root