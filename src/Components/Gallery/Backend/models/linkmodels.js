const mongoose=require('mongoose')
const { models } = require('mongoose')

const linkTemplet=new mongoose.Schema({link :{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('myTable',linkTemplet)