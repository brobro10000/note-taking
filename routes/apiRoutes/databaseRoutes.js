const router = require('express').Router();
const { addID, deleteByID } = require('../../lib/id')
var { notes } = require('../../data/notes')

router.get('/notes', (req, res) => {
  let results = addID(notes)
  res.json(results)
});

router.post('/notes', (req, res) => {
  let results = notes.push(req.body)
  res.json(results)
});

router.delete('/notes/:id', (req, res) => {
  notes = deleteByID(notes, req.params.id)
  res.json(notes)
})

module.exports = router;