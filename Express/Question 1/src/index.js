const express = require('express');
const app = express();

// Sample posts data
const posts = [];

  for (let i = 1; i <= 20; i++) {
    posts.push({ id: i, title: `This is Post ${i}` });
  }

// Endpoint to get 20 posts
app.get('/post', (req, res) => {
  // Limit the response to 20 posts
  const limitedPosts = posts.slice(0, 20);
  res.json(limitedPosts);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
