require('dotenv').config();
const { Pool } = require('pg');
const uri = process.env.DB_URI;


 const pool = new Pool({
     connectionString: uri,
 })


 module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
  };