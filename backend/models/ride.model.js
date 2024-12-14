const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    pickup: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'ongoing','completed', 'cancelled'],
        default: 'pending'
    },
    captain: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Captain'
    },
    fare: {
        type: Number,
        required: true
    },
    distance: {
        type: Number,
    },
    duration: {
        type: Number,
    },
    paymentId: {
        type: String,
    },
    orderId: {
        type: String,
    },
    signature: {
      type: String
    },
    otp: {
        type: String,
        select: false
    },
}, {timestamps: true});

const Ride = mongoose.model('Ride', rideSchema);

module.exports = Ride;