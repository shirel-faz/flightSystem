const express = require('express')

const router = express.Router()

// The functions from userAuthController
const {loginGet, loginPost, signUpGet, signUpPost} = require("../controllers/userAuthController")



router.get("/login", loginGet);
router.get("/signUp", signUpGet)
router.post("/signUp", signUpPost)
router.post("/login", loginPost)

module.exports = router;