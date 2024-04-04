const router = require('express').Router();
const Customer = require('../models').customer;

router.post("/", async(req, res) => {
    let {name, phone, email} = req.body;
    try{
        let newCustomer = new Customer({
            name,
            phone,
            email
        });

        await newCustomer.save();
        return res.send({message: "Success to create a new customer!"});
    }catch(e) {
        return res.status(500).send("Cannot create a new customer!");
    }
});

module.exports = router;