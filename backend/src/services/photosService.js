import axios from "axios";


// Pixabay API configuration
const API_KEY = "25540812-faf2b76d586c1787d2dd02736";
const BASE_URL = "https://pixabay.com/api/";


// Function to fetch photos from Pixabay API
export async function fetchPhotos(category = "nature", page = 1, perPage = 9, order = "date") {

// Make a GET request to the Pixabay API with the specified parameters 
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY, // key should be from env, but for simplicity, it's hardcoded here 
        q: category,
        page,
        per_page: perPage, 
        order,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch photos from Pixabay");
  }
}