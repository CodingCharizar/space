const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const cookieParser = require('cookie-parser');
const cors = require('cors');


const userRouter = require('./routes/user');
const favoritesRouter = require('./routes/favorites');
const spaceDataRouter = require('./routes/spaceData');


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
//parse request body
app.use(cookieParser());
app.use(cors());

// app.get('/', (req, res) => {
//   return res.status(200).send();
// });

// app.get('/', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '../index.html'));
// });


app.use('/api/user', userRouter);
app.use('/api/favorites', favoritesRouter);
app.use('/api/spaceData', spaceDataRouter);


  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });


app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught an unknown middleware error',
    status: 500,
    message: { err: 'An error has occurred'},
  }
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app; //-> http://localhost:3000/
// localhost:8080
