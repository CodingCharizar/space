const userController = {}
const bcrypt = require('bcryptjs');
const db = require('../db/dbconnecting')

userController.logIn = async (req, res, next) => {
    try {

        // SELECT * FROM weather
        // WHERE city = 'San Francisco' AND prcp > 0.0;
    //req.body
    //{username: Shawn123,
      //  password: metilda13}
    const {username, password} = req.body
    const input = [username]
    const sqlString = `SELECT password FROM users 
                        WHERE username = $1`
    //check if the password and username match
   const hashedPass = await db.query(sqlString, input)
   const pass = hashedPass.rows[0].password
   const result = await bcrypt.compare(password, pass)
   res.locals.loggedIn = result
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
    res.locals.id = id
    console.log(res.locals.id);
    return next()
}
catch(err){
    console.log(err)
    next(err)
}
}
module.exports = userController;