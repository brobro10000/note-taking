const router = require('express').Router();
const databaseRoutes = require('./databaseRoutes');

router.use(databaseRoutes);

module.exports = router;
