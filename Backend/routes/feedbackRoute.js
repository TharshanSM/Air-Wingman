const router = require("express").Router();
const Feedback = require("../models/feedbackModel");

router.post("/add", async (req, res) => {
    try {
        const { name, subject, feedback } = req.body;
        const newFeedback = new Feedback({
            name,
            subject,
            feedback,
        });

        await newFeedback.save();

        res.status(201).json({ message: "Feedback submitted successfully" });
    } catch (error) {
        console.error("Error submitting feedback:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
