const cookieController = {};
const db = require('../db/dbconnecting')

cookieController.sendCookie = (req, res, next) => {
    // console.log('cookie res', res.locals.user_id)
    res.cookie("ssid", res.locals.user_id)
    return next()
}

cookieController.checkCookie = async (req, res, next) => {
//    console.log(req.cookies)
   if(!req.cookies.ssid) {res.status(200).json(false)}
   else {
    const sqlString = `SELECT id FROM users 
                        WHERE id = $1`

    const input = [req.cookies.ssid];
    const userId = await db.query(sqlString, input)
    // console.log(userId)
    if(userId.rows.length === 0){
        res.status(200).json(false)
    }
    else {
        return next()
    }
   }
}



module.exports = cookieController;