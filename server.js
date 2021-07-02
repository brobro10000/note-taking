const express = require('express')
//routes from api and html files
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
//checks available ports otherwise default 3001
const PORT = process.env.PORT || 3001
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//makes public file available, assigns /api => notes(JSON) and / to index and notes html
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
//listens to open server on port
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
})
