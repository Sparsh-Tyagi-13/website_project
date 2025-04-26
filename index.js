// Assuming you have express and mongoose set up
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

// Use body-parser middleware for handling POST data
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Mock job data for demonstration
const jobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Tech Corp',
    location: 'New York, USA',
    category: 'Technology',
    description: 'We are looking for a passionate Frontend Developer to join our team.',
  },
  // Add more jobs if necessary
];

// Middleware to authenticate the token
function authenticateToken(req, res, next) {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).send('Access denied');
  
  jwt.verify(token, 'your-secret-key', (err, user) => {
    if (err) return res.status(403).send('Invalid token');
    req.user = user;
    next();
  });
}

// Route to get job details
app.get('/jobs/:id', authenticateToken, (req, res) => {
  const jobId = parseInt(req.params.id);
  const job = jobs.find(job => job.id === jobId);
  
  if (!job) return res.status(404).send('Job not found');
  
  res.json(job);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
