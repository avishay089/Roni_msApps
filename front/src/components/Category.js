import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "./PhotosSlice";
import "./Category.css";

// Category component with modal to select photo category
function Category() {
    // Redux dispatch function
    const dispatch = useDispatch();

    // Local state to control modal visibility
    const [showModal, setShowModal] = useState(false);


    // Example categories
    const categories = ["sports", "work", "animals", "nature", "travel", "school", "people", "food", "fashion", "music"];

    //Function to handle category selection
    const handleCategorySelect = (category) => {
        dispatch(setCategory(category));
        setShowModal(false);
    };

    return (
        <div className="category-container">
            {/* Main button to open modal */}
            <button
                onClick={() => setShowModal(true)}
                className="category-main-button"
            >
                Select Category ▾
            </button>

            {/* Modal with background overlay */}
            {showModal && (
                <div
                    className="category-modal-overlay"
                    onClick={() => setShowModal(false)} // close when background clicked
                >
                    <div
                        className="category-modal-content"
                        onClick={(e) => e.stopPropagation()} // prevent close when modal clicked
                    >
                        {/* Red X button in top-right corner */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="category-modal-close-x"
                            title="Close"
                        >
                            ×
                        </button>

                        {/* Category options */}
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategorySelect(category)}
                                className="category-option-button"
                            >
                                {/* Capitalize first letter */}
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Category;
