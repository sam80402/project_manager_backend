const router = require('express').Router();
const Customer = require('../models').customer;

router.use((req, res, next) => {
    console.log("Receiving a request about customer...");
    next();
});

//add new customer 
router.post("/", async(req, res) => {
    let {name, phone, email} = req.body;
    try{
        let newCustomer = new Customer({
            name,
            phone,
            email
        });

        await newCustomer.save();
        return res.send({message: "Success to create a new customer!", data: newCustomer});
    }catch(e) {
        return res.status(500).send("Cannot create a new customer!");
    }
});

// get one customer
router.get("/:_id", async(req, res) => {
    let { _id } = req.params;
    try{
        let customerFound = await Customer.findOne({ _id });
        return res.send(customerFound);
    }catch(e){
        return res.status(500).send(e);
    }
});

// find customer by name
router.get("/findByName/:name", async(req, res) => {
    let { name } = req.params;
    try{
        let customerFound = await Customer.find({ name: name });
        return res.send(customerFound);
    }catch(e){
        return res.status(500).send(e);
    }
});

// find customer by phone
router.get("/findByPhone/:phone", async(req, res) => {
    let { phone } = req.params;
    try{
        let customerFound = await Customer.find({ phone: phone });
        return res.send(customerFound);
    }catch(e){
        return res.status(500).send(e);
    }
});

// find customer by email
router.get("/findByEmail/:email", async(req, res) => {
    let { email } = req.params;
    try{
        let customerFound = await Customer.find({ email: email });
        return res.send(customerFound);
    }catch(e){
        return res.status(500).send(e);
    }
});

module.exports = router;