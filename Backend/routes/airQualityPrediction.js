const router = require("express").Router();
const tf = require("@tensorflow/tfjs-node");

async function loadModel() {
    const model = await tf.node.loadSavedModel("models/tf_saved_model");
    return model;
}

router.post("/predict", async (req, res) => {
    const { SO2, NO2, O3, CO, PM10, PM25 } = req.body;
    try {
        const model = await loadModel();
        const inputData = tf.tensor2d([[SO2, NO2, O3, CO, PM10, PM25]]);
        const predictions = model.predict(inputData);
        const predictionData = predictions.arraySync();

        res.json({ predictions: predictionData });
    } catch (error) {
        res.status(500).json({ error: "Prediction failed " + error.message });
    }
});

module.exports = router;
