const router = require('express').Router();
const { notes } =  require('../../data/notes')

router.get('/notes', (req, res) => {
    let results = notes
    console.log(results)
    console.log(notes)
    res.json(results)
  });

  module.exports = router;