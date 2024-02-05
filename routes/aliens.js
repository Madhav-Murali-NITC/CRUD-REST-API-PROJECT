const express = require('express');
const router = express.Router();

const Alien = require('../models/aliens');



router.get('/', async(req, res) => {
    try{
        const alien = await Alien.find();
        res.json(alien);
    console.log('Get request for all Aliens')
    res.send('Get request for all Aliens');
    }
    catch(err){
        console.log(err)
    }
}
)


router.get('/:id',async(req,res) =>{
    try{
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
        console.log('Get request for a single Alien by id')

    }catch(err){
        console.log(err)
    }
})


router.patch('/:id',async(req,res) =>{
    try{

        const alien = await Alien.findById(req.params.id)
        alien.subscription = req.body.subscription
        const patchedalien = await alien.save()
        res.json(patchedalien)
    }catch(err){
        console.log(err)    
    }
})


router.post('/', async(req, res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        subscription: req.body.subscription
    })

    try{
            const postalien = await alien.save()
            res.json(postalien)

    }catch(error){
        console.log(error)
    }
})





module.exports = router;

