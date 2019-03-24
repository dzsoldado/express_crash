const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const members = require('../../members');

// Get all members
router.get('/', (req,res)=>{
  res.json(members);
});

// Get single member
router.get('/:id', (req, res)=>{
  const member = members.filter(member => member.id === parseInt(req.params.id));
  if (member.length>0) res.json(member);
  else{
    res.status(400);
    res.json({error : "Member not found"});
  }
});

router.post('/', (req, res)=>{
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    country: req.body.country,
    status: "active"
  };
  if(!newMember.name || !newMember.country){
    res.status(400).json({ error : "Please include a name and country"});
  }else{
    members.push(newMember);
  }
  res.json(members);
});

module.exports = router;