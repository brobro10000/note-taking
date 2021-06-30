const router = require('express').Router();
const { notes } =  require('../../data/notes')
const { addID } = require('../../lib/id')
router.get('/notes', (req, res) => {
    for(let i = 0;i<notes.length;i++)
    if(notes[i].id == undefined)
    {
      notes[i].id = addID()
    }
    res.json(notes)
  });  

  module.exports = router;