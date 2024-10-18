const express = require('express')
const feedbackRoutes = express.Router()
const createrideModel = require("../models/createride");

feedbackRoutes.post('/feedback', async (req, res) => {
    try {
        const rideId = req.body.rideId;
        const message = req.body.formData.message;
        const rating = req.body.rating;
        console.log(message, rating, rideId);
        const feedback = await createrideModel.findByIdAndUpdate(
            rideId, 
            { $set: { feedback: message, rating: rating } }, 
            { new: true }
        );

        console.log("Updated Feedback Entry:", feedback);
        res.status(200).json({ success: true, message: 'Feedback Submitted Successfully', feedback });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false, error: error.message });
    }
})

module.exports = feedbackRoutes;
