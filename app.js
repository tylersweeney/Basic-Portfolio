const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const ejs = require('ejs');
const path = require('path');
const keys = require('./config/keys');



//set up view engine
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs');

//serve static files from public folder
app.use(express.static(__dirname + '/public'));


//create home route
app.get('/', (req, res) =>{
   res.render('home'); 
});

//create portfolio route
app.get('/portfolio', (req, res) =>{
    res.render('portfolio'); 
 });
 app.get('/contact', (req, res) =>{
    res.render('contact'); 
 });
 app.get('/resume', (req, res) =>{
    res.render('resume'); 
 });
 app.get('/wearestillcool', (req, res) =>{
    res.render('wearestillcool'); 
 });
 
app.get('/moodbrews', (req, res) =>{
   res.render('moodbrews');
});

app.get('/futurama', (req, res)=>{
   res.render('futurama');
});

app.get('/spaceballs', (req, res)=>{
   res.render('spaceballs');
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