import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const Gallery = () => {
  const images = [
    { url: "src/assets/gallery/1.jpg" },
    { url: "src/assets/gallery/2.jpg" },
    { url: "src/assets/gallery/3.jpg" },
    { url: "src/assets/gallery/4.jpg" },
    { url: "src/assets/gallery/5.jpg" }
  ];
  return (
    <div id='galeri' className='gallery-container'>
        <h1>Galeri</h1>
        <div>
          <SimpleImageSlider
            id={"slider"}
            width={"60rem"}
            height={"30rem"}
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </div>
    </div>
  )
}

export default Gallery;