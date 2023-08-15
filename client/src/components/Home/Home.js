import { Link } from "react-router-dom"
import "./Home.css"

function Home() {
  return (
    <div className="homePage">
        <div className="nav">
          <Link className="btn btn-primary" to="/Login">Login</Link>
          <Link className="btn btn-primary" to="/signUp">Sign up</Link>
        </div>
      <div className="well">
        <h1 className="homeHeadline">Welcome To Fly With Us</h1>
        <Link className="btn btn-primary" to="/flights">click here to see the flights</Link>
      </div>
    </div>
  )
}

export default Home