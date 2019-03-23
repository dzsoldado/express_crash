const express = require('express');
const router = express.Router();
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

module.exports = router;