import React from "react";
import Gallery from "./components/PhotoGallery";
import CategorySelector from "./components/Category";


function App() {
  return (
    <div>
      <CategorySelector />
      <Gallery />
    </div>
  );
}

export default App;