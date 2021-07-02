const path = require('path');
const router = require('express').Router();
//sets path for /notes to the notes html
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});
//sets path for a catchall to default to index.html
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;