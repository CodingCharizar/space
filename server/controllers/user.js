const userController = {}
const bcrypt = require('bcryptjs');
const db = require('../db/dbconnecting')

userController.logIn = async (req, res, next) => {
    try {

    // SELECT * FROM weather
    // WHERE city = 'San Francisco' AND prcp > 0.0;
    // req.body
    // {username: Shawn123,
    // password: metilda13}
    const {username, password} = req.body
    const input = [username]
    console.log(username, password)
    const sqlString = `SELECT password FROM users 
                        WHERE username = $1`
    //check if the password and username match
   const hashedPass = await db.query(sqlString, input)
   console.log(hashedPass)

   // to check if the username exist and the stored password associated with the username
   if(hashedPass.rows.length === 0){
    res.locals.loggedIn = false
    return next()
   }

   // if the username exsit, compare the password vs hased-password
   const pass = hashedPass.rows[0].password
   const result = await bcrypt.compare(password, pass)
   console.log(result)
   if(false){
    res.locals.loggedIn = false
   }
   res.locals.loggedIn = result
//    res.locals.user_id = hasedPass.rows[0].id
//    console.log(res.locals.loggedIn)
    return next()
}
catch(err){
    return next(err)
}
}

userController.signUp = async (req, res, next) => {
try {
    console.log(req.body)
    const {username, password} = req.body
    //hash the password
    const hash = await bcrypt.hash(password, 10)
    // sanitize the query
    const info = [username, hash]
    const sqlString = `INSERT INTO users(username, password) 
                        VALUES ($1, $2)
                        RETURNING id`;
    const id = await db.query(sqlString, info)
    console.log(id)

    // if the serial id is created successfully
    if(id.rows[0]){
        console.log('return next')
    return next()
    }
    else{
        console('error')
        res.status(200).json(false)
    }
}
catch(err){
    console.log(err)
    if(err) res.status(200).json(false)
    next(err)
}
}
module.exports = userController;