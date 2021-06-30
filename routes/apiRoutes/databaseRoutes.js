const router = require('express').Router();
var { notes } =  require('../../data/notes')
const { addID } = require('../../lib/id')

router.get('/notes', (req, res) => {
    let results = addID(notes)
    res.json(results)
  });  

router.post('/notes', (req, res) => {
  let results = notes.push(req.body)
  res.json(results)
});
  module.exports = router;

router.delete('/notes/:id', (req,res)=> {
  for(let i = 0;i<notes.length;i++)
  if(notes[i].id == req.params.id)
  {
    delete notes[i]
  }
  notes = notes.filter(() => true)  
  res.json(notes)
})