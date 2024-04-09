const router = require('express').Router();

router.use((req, res, next) => {
    console.log("Receiving a request about case...");
    next();
});

router.post("/:_id", async(req, res) => {
    let { _id } = req.params;
    try {
        
    } catch (e) {
        
    }
});

module.exports = router;