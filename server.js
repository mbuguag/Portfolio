const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware for future backend API
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (your current frontend)
app.use(express.static(path.join(__dirname, 'dist')));

// Future API routes can go here
app.use('/api', (req, res, next) => {
  // This will be your backend API endpoint
  // For now, just a placeholder
  res.json({ message: 'API endpoint - backend coming soon!' });
});

// SPA fallback - must be after API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
