const Booking = require('../models/Booking')


module.exports = {
    async store(req, res){
        const{user_id} = req.headers;
        const {spot_id} = req.params;
        const {date} = req.body;

        console.log(req)

        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date
        })

        await booking.populate('spot').populate('user').execPopulate(); //troca o id pelo objeto

        return res.json(booking);
    }
}