import express from 'express';
import { getPhotos } from '../controllers/photosController.js';

// Use express router
const router = express.Router();

// Define route for fetching photos
router.get('/photos', getPhotos);

export default router;
