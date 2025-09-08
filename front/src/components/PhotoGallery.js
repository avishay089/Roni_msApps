import React from "react";
import PhotoCard from "./PhotoCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchPhotos, setPage } from "./PhotosSlice";
import { useEffect } from "react";
import "./PhotoGallery.css";

function PhotoGallery() {
    const dispatch = useDispatch();
    // Read state from Redux
    const { hits, status, category, page } = useSelector(state => state.photos);
    // Fetch photos whenever category or page changes
    useEffect(() => {
        dispatch(fetchPhotos({ category, page }));
    }, [dispatch, category, page]);

    // Handlers for prev/next that updates page in Redux
    const handlePrevious = () => {
        dispatch(setPage(Math.max(page - 1, 1)));
    };

    const handleNext = () => {
        dispatch(setPage(page + 1));
    };

    // Conditional rendering based on status
    if (status === "loading") return <p className="loading-text">Loading...</p>;
    if (status === "failed") return <p className="error-text">Error loading photos</p>;

    return (
        <div className="photo-gallery-container">
            {/* Page and category info */}
            <div className="page-info-container">
                <p className="page-info">
                    Page {page} - Category: {category}
                </p>
            </div>
            {/* Navigation buttons */}
            <button
                onClick={handlePrevious}
                className="nav-button prev-button"
                disabled={page === 1}
            >
                Prev
            </button>

            <button
                onClick={handleNext}
                className="nav-button next-button"
            >
                Next
            </button>
            {/* Photo grid */}
            <div className="photos-grid">
                {hits?.map(photo => (
                    <PhotoCard key={photo.id} photo={photo} />
                ))}
            </div>
        </div>
    );
}

export default PhotoGallery;