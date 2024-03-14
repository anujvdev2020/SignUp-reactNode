const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const fs=require("fs")

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const PORT = process.env.PORT || 8000;

app.use(cors());

// POST endpoint for handling file uploads

const validateRequest = (req, res, next) => {
  const requiredAttributes = ['firstName', 'email', 'password'];
  let error={};
  let errorExist=false
  for (const attribute of requiredAttributes) {
    if (!req.body[attribute]) {
        error[attribute]=`Field is required.`
        errorExist=true
    }
  }
  if(errorExist){
    return res.status(401).json({error});
  }


  next();
};
app.post('/signup',validateRequest,(req, res) => {
    try {
        // Send the user request body in the response
        res.status(201).json({ message: 'User created successfully', user: req.body });
        fs.appendFileSync("./logs.txt",`${new Date()}\n`)
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
        fs.appendFileSync("./logs.txt",`${new Date()}\n`)
      }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});