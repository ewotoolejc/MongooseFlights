var express = require('express');
var router = express.Router();

var ticketsCtrl = require('../controllers/tickets');


// get /tickets/new .new
router.get('/flights/:id/tickets/new', ticketsCtrl.new);

router.post('/flights/:id/tickets', ticketsCtrl.create)

// delete flights/:id/tickets/:Tid .delete

module.exports = router;