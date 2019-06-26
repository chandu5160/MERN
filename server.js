const express = require('express');
const mongoose = require('mongoose');
const app = express();
const config = require('config');

 // Bodyparser Middleware
 app.use(express.json());
// DB Config
const db = config.get('mongoURI');
//connect to mongo
mongoose
  .connect(db,{
    useNewUrlParser: true,
    useCreateIndex: true
  }) 
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));



//use routes
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/Users'));
app.use('/api/auth', require('./routes/api/auth'));





//connect port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));