const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require("path");

//set up view engine
app.set('view engine', 'ejs');




//connect to mongodb
// mongoose.connect(keys.mongodb.dbURI, () => {
//     console.log('connected to mongodb');
// })

//set up routes
// app.use('/auth', authRoutes);
// app.use('/profile', profileRoutes);

//create home route
app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "./app/views/home"));
});
// app.get('/', (req, res) =>{
//    res.render('home', { user: req.user}); 
// });

//create portfolia route
app.get('/portfolio', (req, res) =>{
    res.render('portfolio', { user: req.user}); 
 });

 //create contact route
 app.get('/contact', (req,res)=>{
     res.render('contact', {user: req.user});
 })

 //create about route
 app.get('/about', (req,res)=>{
     res.render('about', {user: req.user});
 })

app.listen(PORT, () => {
    console.log('app now listening for requests on port 3000');
});