const router = require('express').Router();
const databaseRoutes = require('./databaseRoutes');
//routes databaseRouter.js file out
router.use(databaseRoutes);

module.exports = router;
