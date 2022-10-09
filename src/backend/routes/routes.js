const express=require('express')
const registrationTempletCopy=require("../models/registrationModels")

const router=express.Router();

router.post('/registration',function(req,res){
    const newRegistration=new registrationTempletCopy({
        fullName: req.body.fullName,
        contactNo: req.body.contactNo,
        email: req.body.email,
        targetExam: req.body.targetExam
    });
    newRegistration.save()
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })

});

router.route('/regestered').get((req,res) => {
    registrationTempletCopy.find()
    .then(foundLink=>res.json(foundLink))
})

module.exports=router;