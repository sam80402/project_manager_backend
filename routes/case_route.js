const router = require('express').Router();
const Case = require('../models').case;

router.use((req, res, next) => {
    console.log("Receiving a request about case...");
    next();
});

// add case base on customer
router.post("/", async(req, res) => {
    let { customer, address, building_type, description, date } = req.body;
    
    try {
        let newCase = new Case({
            customer,
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

// search case by customer id
router.get("/customer/:_customer_id", async(req, res) => {
    let { _customer_id } = req.params;
    
    try {
        let caseFound = await Case.find({ customer: _customer_id}).populate("customer",["name","phone"]).exec();
        return res.send(caseFound);
    } catch (e) {
        return res.status(500).send({e});
    }
});

module.exports = router;