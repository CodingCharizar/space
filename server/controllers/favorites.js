const db = require('../db/dbconnecting')
const favoritesController = {};



favoritesController.getFavorites = async (req, res, next) => {
    try {
        //get all photos the match userID in favorites table.
    const sqlString = ``;
    const favData = await db.query(sqlString);
    res.locals.favoritePhotos = favData;
    return next();
    }
    catch (err) {
        return next( { log: `favorites.getFavorites: ERROR: ${err}`,
      message: { err: 'Error occurred in favorites.getFavorites.'}
    })
   };
};

favoritesController.addFavorites = async (req, res, next) => {
    try{
        //first check if photo exists in photo table, if it doesn't add it.

        // add userId and photoID to the favs table.
    
    }
    catch{


    }

}



module.exports = favoritesController;