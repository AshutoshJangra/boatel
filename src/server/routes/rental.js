const express = require('express');
const router  = express.Router();
const Rental = require('../models/rental');

router.get('' , (req,res) => {
      Rental.find({} , (err , foundRentals) => {
          res.json(foundRentals);
      })
}) ;

router.get('/:id' , (req,res) => {
    const rentalId = req.param.id;
    Rental.findById(rentalId, (err,foundRental) => {
        if(err){
            res.status(422).send({error:[{'title':'Rental error' , 'detail':'could not found rental!'}]});
            
        }
        res.json(foundRental);
    })
});

module.exports = router ;
