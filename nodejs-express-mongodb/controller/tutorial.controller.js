
const express=require('express');
var router =express.Router();
var ObjectId=require('mongoose').Types.ObjectId;
var {Tutorial} =require('../models/tutorial.model');

router.post('/',(req,res)=>{
    var emp=new Tutorial({

        title:req.body.title,
        description:req.body.description,
        
    });
    emp.save((err,doc)=>{

        if(!err){res.send(doc);}
        else{console.log('Error in inserting Tutorial :' + JSON.stringify(err,undefined,2));}
    });
});

router.get('/',(req,res)=>{
    Tutorial.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{console.log('Error in Retriving Tutorial :' + JSON.stringify(err,undefined,2));}


    });
});
router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id:  ${req.params.id}');

        Tutorial.findById(req.params.id,(err,doc)=>{
                if(!err){res.send(doc);}
                else{cpnsole.log('Error in Retriving Tutorial:'+JSON.stringify(err,undefined,2));}
            });
});
router.delete('/',(req,res)=>{
    Tutorial.deleteMany((err,docs)=>{
        if(!err){res.send(docs);}
        else{console.log('Error in deleting Tutorial :' + JSON.stringify(err,undefined,2));}


    });
});
router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id:  ${req.params.id}');

    var emp={

        title:req.body.title,
        description:req.body.description,
    };
    Tutorial.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,doc)=>{
        
        if(!err){res.send(doc);}
        else{console.log('Error in updating Tutorial :' + JSON.stringify(err,undefined,2));}

    });
});
router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id:  ${req.params.id}');

    Tutorial.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('Error in deleting Tutorial :' + JSON.stringify(err,undefined,2));}

    });


});
module.exports=router;