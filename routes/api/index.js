var router = require('express').Router();

if(DEBUG) {
    console.log('ROUTE: /api/actors');
}
// http://localhost:3000/api/actors/
const actorsRouter = require('./actors')
router.use('/actors', actorsRouter);

module.exports = router;