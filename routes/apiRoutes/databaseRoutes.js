const router = require('express').Router();
const { addID, deleteByID } = require('../../lib/id')
var { notes } = require('../../data/notes')
const defaultNotes = notes

//Gets notes from /notes and add unique IDs on page render
router.get('/notes', (req, res) => {
  res.json(addID(notes))
});
//Add to notes.json 
router.post('/notes', (req, res) => {
  res.json(notes.push(req.body))
});
//Delete from notes.json
router.delete('/notes/:id', (req, res) => {
  notes = deleteByID(notes, req.params.id)
  res.json(notes)
})

module.exports = router;