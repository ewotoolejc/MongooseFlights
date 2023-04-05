const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
}

async function newTicket(req, res) {
    const flight = await Flight.findById(req.params.id);
    res.render('tickets/new', { title: 'Add Dat New Tix', flight});
}

async function create(req, res) {
    const curFlight = await Flight.findById(req.params.id);
try {
    const ticket = await Ticket.create(req.body);
    ticket.flight.push(curFlight)
    await ticket.save();
    res.redirect(`/flights/${curFlight._id}`);
} catch (err) {
    console.log(err);
    res.render('flights/', { errorMsg: err.message });
}
}