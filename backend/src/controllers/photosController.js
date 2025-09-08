import { fetchPhotos } from "../services/photosService.js";

// Controller function to handle fetching photos
export const getPhotos = async (req, res) => {
  const { category = "animals", page = 1, perPage = 9, order = "latest" } = req.query;
  // Fetch photos using the service function
  try {
    const photos = await fetchPhotos(category, page, perPage, order);
    res.status(200).json(photos);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch photos" });
  }
};
