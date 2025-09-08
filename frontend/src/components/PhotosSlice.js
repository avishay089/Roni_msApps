// src/photosSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// async thunk = handles async API calls
export const fetchPhotos = createAsyncThunk(
    "photos/fetchPhotos",
    async ({ category, page }) => {
        const response = await axios.get("http://localhost:5000/api/photos", {
            params: { category, page },
        });
        console.log("Fetched photos:", response.data);
        return response.data.hits; 
    }
);

// Redux slice for photos
const PhotosSlice = createSlice({
    name: "photos",
    //Initial state for the first load
    initialState: {
        hits: [], 
        status: "idle",
        error: null,
        category: "sports", 
        page: 1,
    },
    // Reducers for synchronous actions
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
            state.page = 1; // reset page when category changes
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
    },
    // Extra reducers for async thunks
    extraReducers: (builder) => {
        builder
            .addCase(fetchPhotos.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchPhotos.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.hits = action.payload; 
            })
            .addCase(fetchPhotos.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});
// Export actions and reducer
export const { setCategory, setPage } = PhotosSlice.actions;
export default PhotosSlice.reducer;
