const router = require('express').Router();
const { notes } =  require('../../data/notes')
const { addID } = require('../../lib/id')

router.get('/notes', (req, res) => {
    let results = addID(notes)
    res.json(results)
  });  

  module.exports = router;