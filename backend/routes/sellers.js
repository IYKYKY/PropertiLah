const router = require('express').Router();
let Seller = require('../models/sellers.model');

router.route('/').get((req, res) => {
    Seller.find()
    .then(sellers => res.json(sellers))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
    const propertyAddress = req.body.propertyAddress;
    const planningArea = req.body.planningArea;
    const propertyType = req.body.propertyType;
    const floorSize = req.body.floorSize;
    const bedroom = req.body.bedroom;
    const bathroom = req.body.bathroom;
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const expectedPrice = req.body.expectedPrice;

    const newSeller = new Seller({
        propertyAddress,
        planningArea,
        propertyType,
        floorSize,
        bedroom,
        bathroom,
        name,
        email,
        phone,
        expectedPrice,
    });

    newSeller.save()
    .then(() => res.json('Seller added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Seller.findById(req.params.id)
    .then(sellers => res.json(sellers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Seller.findByIdAndDelete(req.params.id)
    .then(() => res.json('Seller deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Seller.findById(req.params.id)
    .then(seller => {
        seller.propertyAddress = req.body.propertyAddress;
        seller.planningArea = req.body.planningArea;
        seller.propertyType = req.body.propertyType;
        seller.floorSize = req.body.floorSize;
        seller.bedroom = req.body.bedroom;
        seller.bathroom = req.body.bathroom;
        seller.name = req.body.name;
        seller.email = req.body.email;
        seller.phone = req.body.phone;
        seller.expectedPrice = req.body.expectedPrice

        seller.save()
        .then(() => res.json('Seller updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;