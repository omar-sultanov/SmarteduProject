const express = require('express');
const mongoose = require('mongoose')

const app = express();
const pageRoute = require('./routes/pageRouter')
const courseRoute =require('./routes/courseRouter')


//Connect DB
mongoose.connect('mongodb://localhost/smartedu-db',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  }
) .then(() => console.log("Database connected!"))
.catch(err => console.log(err));

//Template engine 
app.set("view engine", "ejs");

//Static files -Middlewares
app.use(express.static("public"))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//Routers
app.use("/",pageRoute)
app.use("/courses",courseRoute)

const port = 3000;
app.listen(port,()=>{
    console.log(`Server is working with port:${port}`);
})