const cookieController = {};


cookieController.sendCookie = (req, res, next) => {

    res.cookie("ssid", res.locals.user_id)

    return next()


}




module.exports = cookieController;