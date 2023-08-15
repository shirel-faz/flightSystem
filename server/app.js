// Express
const express = require('express')
const app = express()
// Cors 
const cors = require('cors')
app.use(cors())
// BodyParser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// Middleware to parse url - encoded from data for post -- form
app.use(express.urlencoded({extended: true}))
// Ejs 
app.set("view engine", "ejs");
// View Engine Setup
// const expressLayouts = require("express-ejs-layouts")
// app.set("views", path.join(__dirname, "views"));
// Layouts setup
// app.use(expressLayouts)

// Cookie parse
const cookie_parser = require('cookie-parser')
app.use(cookie_parser())
// Routers
const adminRouter = require("./routers/adminRouter")
const airlineRouter = require("./routers/airlineRouter")
const countryRouter = require("./routers/countryRouter")
const customerRouter = require("./routers/customerRouter")
const flightRouter = require("./routers/flightRouter")
const ticketRouter = require("./routers/ticketRouter")
const userAuthRouter = require('./routers/userAuthRouter')
// const { authenticate } = require('./middleware/authenticate')

// app.use(authenticate)
app.use("/admin", adminRouter)
app.use("/airline", airlineRouter)
app.use(countryRouter)
app.use(customerRouter)
app.use(flightRouter)
app.use(ticketRouter)
app.use(userAuthRouter)

app.get("/", (req, res) =>{
  res.render("welcome")
})


app.listen(3001, (err)=> {
  if (err) {
    console.log(err)
  } else {
    console.log("server is up and listening on port 3001");
  }
})