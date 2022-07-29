const express = require('express');
const port = 4000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/')
const app = express();
app.use(express.urlencoded({extended:true}));

app.use(express.json());
app.use('/api/claims', require('./Router'));

 

app.listen(port,()=>{
    console.log("connected to db");
})