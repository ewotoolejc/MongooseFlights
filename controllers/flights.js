const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
index,
new: newFlight,
create,
show,
};

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    const tickets = await Ticket.find({flight: flight._id});
    res.render('flights/show', { title: 'Flight Detail', flight, tickets});
};

async function index(req, res) {
    const flights = await Flight.find({} );
    res.render('flights/index', { flights })
};

function newFlight(req, res) {
    res.render('flights/new')
};

async function create(req, res) {
    // let num = req.body.flightNo
    // if (num < 10 || num > 9999)
        // return;
    res.redirect('/flights');
    try {
        await Flight.create(req.body);
     } catch (err) {
       // Typically some sort of validation error
       console.log(err);
       res.render('flights/new', { errorMsg: err.message });
     }
};