import React, { useState } from "react";
import "./PhotoCard.css";

// PhotoCard component to display individual photo and modal on click
function PhotoCard({ photo }) {

    // Local state to control modal visibility
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="photo-card-container">
            {/* Photo snippet */}
            <img
                src={photo.webformatURL}
                alt={photo.tags}
                className="photo-card-image"
                onClick={() => setShowModal(true)}
            />
            {/* Modal with larger image and details */}
            {showModal && (
                <div
                    className="modal-overlay"
                    onClick={() => setShowModal(false)} // close when background clicked
                >
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()} // prevent close when modal clicked
                    >


                        <div className="modal-scroll-content">
                            {/* Large image*/}
                            <img
                                src={photo.largeImageURL}
                                alt={photo.tags}
                                className="modal-large-image"
                            />
                            {/* Photo details */}
                            <div className="modal-info">
                                <p><strong>Tags:</strong> {photo.tags}</p>
                                <p><strong>Views:</strong> {photo.views}</p>
                                <p><strong>Downloads:</strong> {photo.downloads}</p>
                                <p><strong>Collections:</strong> {photo.collections}</p>
                                <p><strong>User:</strong> {photo.user}</p>
                            </div>
                        </div>
                        {/* Close button */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="modal-close-button"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PhotoCard;
