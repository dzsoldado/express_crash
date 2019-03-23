const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();

const PORT = process.env.PORT || 1337;



// Static websites : 
// app.use(express.static(path.join(__dirname,"public")));


// Init middleware
app.use(logger);

// Members api route
app.use('/api/members', require('./routes/api/members'));


app.get("/", (req,res)=>{
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


app.listen(PORT, ()=> {
  console.log(`Server started on port ${PORT}`);
});