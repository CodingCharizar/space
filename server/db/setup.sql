-- table --------------------------------
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username varchar(50) UNIQUE NOT NULL,
  password varchar(100) NOT NULL
)

CREATE TABLE IF NOT EXISTS photos (
  id SERIAL PRIMARY KEY,
  name varchar(50),
  url varchar(1000) UNIQUE NOT NULL
)

CREATE TABLE IF NOT EXISTS favorites (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  FOREIGN KEY(user_id) REFERENCES users(id),
  photo_id INTEGER,
  FOREIGN KEY(photo_id) REFERENCES photos(id)
)


module.exports = table