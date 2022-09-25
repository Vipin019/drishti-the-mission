const mongoose=require('mongoose')
const { models } = require('mongoose')

const RegistrationTemplet=new mongoose.Schema({
    fullName :{
        type:String,
        require:true
    },
    contactNo :{
        type:Number,
        require:true
    },
    email :{
        type:String,
        require:true
    },
    targetExam :{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
                             //table name
module.exports=mongoose.model('registration',RegistrationTemplet)