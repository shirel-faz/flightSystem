const jwt = require('jsonwebtoken')
const token_secret = "blablabla"

const authenticate = (req, res, next) => {
  if(req.path === '/login' || req.path === '/signUp'){
    return next()
  }
  const token = req.cookies?.access_token //אולי צריך לשנות את השם שנשמר בו התוקן לכל סוג משתמש
  // if(!token){
  //   res.status(401);
  //   throw new Error('token is requ')
  // }
  try{
    const user = jwt.verify(token, token_secret)
      next()
  }catch(err){
    res.redirect("/login")
  }
}

const AdminAuthenticate = (req, res, next) => {
  const token = req.headers.authorization;
 
  if(!token){
    return res.status(403).json({msg: 'token requierd'});
  }
  try{
    const decode = jwt.verify(token, token_secret);
    req.UserId = decode.Id;

    next()
  }catch(err){
     res.status(403).json({msg: 'forbidden'});
  }
}
const airlineAuthenticate = (req, res, next) => {
  const token = req.headers.authorization;
 
  if(!token){
    return res.status(403).json({msg: 'token requierd'});
  }
  try{
    const decode = jwt.verify(token, token_secret);
    req.UserId = decode.Id;

    next()
  }catch(err){
     res.status(403).json({msg: 'forbidden'});
  }
}



module.exports = {
  authenticate,
  AdminAuthenticate,
  airlineAuthenticate
}