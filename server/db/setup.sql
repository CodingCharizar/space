-- table --------------------------------

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username varchar(50) UNIQUE NOT NULL,
  email varchar(100) UNIQUE NOT NULL,
  password varchar(100) NOT NULL
)


module.exports = table;