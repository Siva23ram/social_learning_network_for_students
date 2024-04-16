const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/home')
.then(()=>{
    console.log(' mongodb connected')
})
.catch(()=>{
    console.log('failed to connected')
})


const LoginSchema=new mongoose.Schema({
   
    Email:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model('loginsignup',LoginSchema)


module.exports=collection