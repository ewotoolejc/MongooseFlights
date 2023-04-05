var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

// /flights precedes
/* GET flights listing. */
router.get('/', flightsCtrl.index);

// get new new
router.get('/new', flightsCtrl.new);

// get show /:id
router.get('/:id', flightsCtrl.show);


//post / create
router.post('/', flightsCtrl.create);

module.exports = router;
