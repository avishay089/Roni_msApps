import app from './App.js';

// Start the server on port 5000 or environment port
const PORT = process.env.PORT || 5000;

// Listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
