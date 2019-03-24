const express = require('express');
const path = require('path');
const uuid = require('uuid');
const logger = require('./middleware/logger');

const app = express();

const PORT = process.env.PORT || 1337;



// Static websites : 
// app.use(express.static(path.join(__dirname,"public")));


// Init middleware
app.use(logger);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Members api route
app.use('/api/members', require('./routes/api/members'));


app.get("/", (req,res)=>{
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


// Create member
app.post("/", (req,res)=>{
  res.send(req.body);
});


app.listen(PORT, ()=> {
  console.log(`Server started on port ${PORT}`);
});