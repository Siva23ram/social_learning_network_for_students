const express=require('express')
const app=express()
const path=require('path')
const hbs=require('hbs')
const collect=require('./mongodb')
const Contact=require('./mongodb2')
const templatePath=path.join(__dirname,'../templates')

app.use(express.json())
app.set('view engine','hbs')
app.set('views',templatePath)
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.render('login')
})
app.get('/signup',(req,res)=>{
    res.render('signup')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/index',(req,res)=>{
    res.render('index')
})
app.get('/courses',(req,res)=>{
    res.render('courses')
})
app.get('/teacher',(req,res)=>{
    res.render('teacher')
})
app.get('/todolist',(req,res)=>{
    res.render('todolist')
})
app.get('/review',(req,res)=>{
    res.render('review')
})
app.get('/blog',(req,res)=>{
    res.render('blog')
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})
app.get('/chatbot',(req,res)=>{
    res.render('chatbot')
})
app.get('/Contact',(req,res)=>{
    res.render('Contact')
})

app.post('/signup',async(req,res)=>{
const data={
    Email:req.body.Email,
    Password:req.body.Password
}

await collect.insertMany([data])
res.redirect('/')
})

app.post('/Contact',async(req,res)=>{
    const data1={
        Name:req.body.Name,
        Email:req.body.Email,
        PhoneNumber:req.body.PhoneNumber,
        Message:req.body.Message,
    }
await Contact.insertMany([data1])
    res.redirect('/contact')
    })

app.post('/login',async(req,res)=>{
    try {
        const check=await collect.findOne({Email:req.body.Email})
        if(check.Password===req.body.Password){
        res.redirect('/index')}
    } catch (error) {
        res.send('invalid details')
    }
    
    })
    

  
app.listen(3000,()=>{
    console.log('connected')
}) 
        
    
    