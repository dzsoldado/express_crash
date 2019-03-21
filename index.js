const express = require('express');

const app = express();

const PORT = process.env.PORT || 1337;


app.get("/", (req,res)=>{
  res.send('<h1>Hi Niggaz</h1>');
});


app.listen(PORT, ()=> {
  console.log(`Server started on port ${PORT}`);
});