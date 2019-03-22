const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 1337;


// Static websites : 
// app.use(express.static(path.join(__dirname,"public")));

let members = [
  {
    name: "Ragnar Lothbruk",
    country: "Dan",
    status: "inactive"
  },
  {
    name: "Ube Lothbruk",
    country: "Dan",
    status: "active"
  },
  {
    name: "Bishop Heckmond",
    country: "Eng",
    status: "inactive"
  }
];

app.get('/api/members', (req,res)=>{
  res.json(members);
});

app.get("/", (req,res)=>{
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


app.listen(PORT, ()=> {
  console.log(`Server started on port ${PORT}`);
});