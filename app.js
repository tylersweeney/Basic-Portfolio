const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
const ejs = require('ejs');
const path = require('path');
const keys = require('./config/keys');



//set up view engine
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs');

// connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('connected to mongodb');
})

//create home route
app.get('/', (req, res) =>{
   res.render('home'); 
});

//serve static files from public folder
app.use(express.static('public'))

//create portfolio route
app.get('/portfolio', (req, res) =>{
    res.render('portfolio'); 
 });

 //create contact route
// app.get('/contact', (req,res)=>{
//     res.render('contact');
//  })

 //create about route
// app.get('/about', (req,res)=>{
//     res.render('about');
//  })



app.listen(PORT, () => {
    console.log('app now listening for requests on port:' + PORT);
});