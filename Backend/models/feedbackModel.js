const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    name: String,
    subject: String,
    feedback: String,
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
