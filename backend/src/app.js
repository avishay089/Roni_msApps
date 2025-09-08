import express from 'express';
import cors from 'cors';
import photosRoutes from './routes/photosRoutes.js';

// Initialize express app
const app = express();
// Middleware setup using CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Use photos routes
app.use('/api', photosRoutes);


// Sample route
app.get('/', (req, res) => {
  res.json({ message: "Pixabay Backend API running" });
});

export default app;
