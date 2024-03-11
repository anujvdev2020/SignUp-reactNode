const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT || 8000;

app.use(cors());

// POST endpoint for handling file uploads
app.post('/signup',(req, res) => {
    try {
        const { username, email, password } = req.body
        
        // Send the user request body in the response
        res.status(201).json({ message: 'User created successfully', user: req.body });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});