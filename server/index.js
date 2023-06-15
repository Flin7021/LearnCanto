const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', require('./api/routes/home'));
app.use('/flashcards', require('./api/routes/flashcards'));
app.use('/auth', require('./api/routes/auth'));
app.use('/favorites', require('./api/routes/favorites'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
