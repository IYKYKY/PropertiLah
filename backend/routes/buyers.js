const router = require('express').Router();
let Buyer = require('../models/buyers.model');

router.route('/').get((req, res) => {
    Seller.find()
    .then(buyers => res.json(buyers))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
    const areaOfInterest = req.body.areaOfInterest;
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const typeOfFinancing = req.body.typeOfFinancing;
    const timelineToClose = req.body.timelineToClose;
    const budget = req.body.budget;

    const newBuyer = new Buyer({
        areaOfInterest,
        name,
        email,
        phone,
        typeOfFinancing,
        timelineToClose,
        budget,
    });

    newBuyer.save()
    .then(() => res.json('Buyer added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Buyer.findById(req.params.id)
    .then(buyers => res.json(buyers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Buyer.findByIdAndDelete(req.params.id)
    .then(() => res.json('Buyer deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Buyer.findById(req.params.id)
    .then(buyer => {
        buyer.areaOfInterest = req.body.areaOfInterest;
        buyer.name = req.body.name;
        buyer.email = req.body.email;
        buyer.phone = req.body.phone;
        buyer.typeOfFinancing = req.body.typeOfFinancing;
        buyer.timelineToClose = req.body.timelineToClose;
        buyer.budget = req.body.budget;

        buyer.save()
        .then(() => res.json('buyer updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;