import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './components/Root/Root';
import Flights from './components/Flights/Flights';
import Home from './components/Home/Home';
import Tickets from './components/Tickets/Tickets';
import AdminRoot from './components/Admin/Root/Root';
import AirlineRoot from './components/AirlineCompanies/Root/Root';
import CompanysManagment from './components/Admin/CompanysManagment/CompanysManagment';
import Login from './components/LogIn/LogIn';
// import AdminLogIn from './components/LogIn/LogIn'
import HomeAdmin from './components/Admin/HomeAdmin/HomeAdmin';
import AirlineC from './components/AirlineCompanies/HomeAirline/HomeAirline';
import Signup from './components/SignUp/SignUp';


const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "admin/login",
    element: <Login/>
  },
  {
    path: "airline/login",
    element: <Login/>
  },
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/signUp",
        element: <Signup/>
      },
      {
        path: "/flights",
        element: <Flights />
      },
      {
        path: "/tickets/:flightId",
        element: <Tickets />
      },
    ]
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      // {
      //   index: true,
      //    element: <AdminLogIn/>
      //  },
      {
        index: true,
        element: <HomeAdmin/>
      },
      {
        path:"/admin/companyM",
        element: <CompanysManagment/>
      },
   
    ]
  },
  {
    path: "/airline",
    element: <AirlineRoot />,
    children: [
      {
        index: true,
        element: <AirlineC/>
      }
   
    ]
  }
])

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
