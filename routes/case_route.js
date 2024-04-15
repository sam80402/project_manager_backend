const router = require('express').Router();
const Case = require('../models').case;

router.use((req, res, next) => {
    console.log("Receiving a request about case...");
    next();
});

// add case base on customer
router.post("/customer/:_customer_id", async(req, res) => {
    let { _customer_id } = req.params;
    let { address, building_type, description, date } = req.body;
    
    try {
        let newCase = new Case({
            _customer_id,
            address,
            building_type,
            description,
            date
        });

        await newCase.save();
        return res.send({message: "Success to create a case!", data: newCase})
    } catch (e) {
        return res.status(500).send({message: "Cannot create a new case...",
    data: e});
    }
});

module.exports = router;