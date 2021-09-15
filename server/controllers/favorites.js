const db = require('../db/dbconnecting')
const favoritesController = {};



favoritesController.getFavorites = async (req, res, next) => {
    try {
    const userId = req.body.userId
    const input = [userId]
    const sqlString = `SELECT photos.url FROM photos INNER JOIN 
                       favorites ON photos.id = favorites.photo_id 
                       WHERE favorites.user_id = $1 `;
    const favData = await db.query(sqlString, input);
    res.locals.favs = favData.rows;
    console.log(favData)
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
        const {name, url, userId} = req.body
        console.log(req.body)
        // username, photoURL 
        const input = [url]
        const sqlStringCheck = `SELECT id FROM photos WHERE URL = $1`
        //first check if photo url exists in photo table, if it doesn't add it.
        const photos = await db.query(sqlStringCheck, input);
        // const id = photos.rows[0]
        console.log('photos', photos)
       
        if (photos.rows.length === 0) {
            const sqlInsert = `INSERT INTO photos(url)
                               VALUES ($1)
                               RETURNING id`
            const id = await db.query(sqlInsert, input)
            console.log('id', id);
           
            const photoId = id.rows[0].id;
            const insertInput = [userId, photoId]
            const sqlInsertFavorite = `
            INSERT INTO favorites (user_id, photo_id)
            VALUES ($1, $2)
            RETURNING id`
            const favID = await db.query(sqlInsertFavorite, insertInput);
          
        }  
        else{
            const photoId1 = photos.rows[0].id
            const insertInput1 = [userId, photoId1]
            const sqlInsertFavorite1 = `
            INSERT INTO favorites (user_id, photo_id)
            VALUES ($1, $2)
            RETURNING id`
            const favID = await db.query(sqlInsertFavorite1, insertInput1);
        }

        
        
            // const insertInput = [userId, id]
            // const sqlInsertFavorite = `
            // INSERT INTO favorites (user_id, photo_id)
            // VALUES ($1 $2)
            // RETURNING id`
            // const favID = await db.query(sqlInsertFavorite, insertInput);
            // res.locals.favID = favID
            // console.log("print2",favID)
        return next()
    
    }
    
    catch (err) {
        return next(err)

}
}



module.exports = favoritesController;