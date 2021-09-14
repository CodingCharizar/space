const db = require('../db/dbconnecting')
const favoritesController = {};



favoritesController.getFavorites = async (req, res, next) => {
    try {
        //get all photos the match userID in favorites table.
    /**
     * SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;

     */

        //select userid from table users (username) inner join with favorites table 
        //get userId from user table
        //grab all of the photo Ids from favorite table that match userId
        //grab all of the photo urls from those photo IDs.
        
    const sqlString = `SELECT `;
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
    try {
        const {name, url, username} = req.body
        // username, photoURL 
        const input = [url]
        const sqlStringCheck = `SELECT id FROM photos WHERE URL = $1`
        //first check if photo url exists in photo table, if it doesn't add it.
        const photos = await db.query(sqlStringCheck, input);
        console.log("photos:",photos)
       
        if (photos.rows.length === 0) {
            const sqlInsert = `INSERT INTO photos(url)
                               VALUES ($1)
                               RETURNING id`
            const id = await db.query(sqlInsert, input)
          
        }  
    
        console.log("print",id)
            const insertInput = [userId, id]
            const sqlInsertFavorite = `
            INSERT INTO favorites (user_id, photo_id)
            VALUES ($1 $2)
            RETURNING id`
            const favID = await db.query(sqlInsertFavorite, insertInput);
            res.locals.favID = favID
            console.log("print2",favID)
        return next()
    
    }
    
    catch (err) {
        return next(err)

}
}



module.exports = favoritesController;