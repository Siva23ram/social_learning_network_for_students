const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/home')
.then(()=>{
    console.log('contact us  mongodb connected')
})
.catch(()=>{
    console.log('failed to connected')
})

const contactSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Email:{type:String,required:true},
  PhoneNumber: { type: String, required: true },
  Message: { type: String, required: true }
});

const Contact = mongoose.model('Contact', contactSchema);


module.exports=Contact