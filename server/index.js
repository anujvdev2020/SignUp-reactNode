const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 7000;

app.use(cors());

// POST endpoint for handling file uploads
app.post('/signup',(req, res) => {
  if (!req.body) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
console.log(req.body)
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});