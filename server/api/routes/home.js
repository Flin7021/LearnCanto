const express = require('express');
const router = express.Router();

// Define the route for the home page
router.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

module.exports = router;
