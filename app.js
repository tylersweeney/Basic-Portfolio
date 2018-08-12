const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
const ejs = require('ejs');
const path = require('path');

app.set('views', path.join(__dirname, 'app/views'))
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/images', express.static(__dirname + '/images'));
app.use('/css', express.static(__dirname + '/css'));
//set up view engine





// connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('connected to mongodb');
})

//set up routes
// app.use('/auth', authRoutes);
// app.use('/profile', profileRoutes);

//create home route
app.get('/', (req, res) =>{
   res.render('home'); 
});

app.use(express.static('public'))
// app.get('/', (req, res) =>{
//    res.render('home', { user: req.user}); 
// });

//create portfolio route
app.get('/portfolio', (req, res) =>{
    res.render('portfolio'); 
 });

 //create contact route
 app.get('/contact', (req,res)=>{
     res.render('contact');
 })

 //create about route
 app.get('/about', (req,res)=>{
     res.render('about');
 })

app.listen(PORT, () => {
    console.log('app now listening for requests on port:' + PORT);
});