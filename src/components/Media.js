import React,{useState} from "react";
import Navbar from './Navbar';
import './MediaGallery.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox} from 'lightbox.js-react'


export default function Media() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const [mediaItems, setMediaItems] = useState([
    { id: 1, src: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp", alt: "Boat on Calm Water"},
    { id: 2, src: "https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp", alt: "Wintry Mountain Landscape" },
    { id: 3, src: "https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp", alt: "Mountains in the Clouds" },
    { id: 4, src: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp", alt: "Boat on Calm Water" },
    { id: 5, src: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp", alt: "Waves at Sea"},
    { id: 6, src: "https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp", alt: "Yosemite National Park" },
    {id:7,src:"https://images.unsplash.com/photo-1589459783419-51827737a10e",alt:"Silhouette of bare tree during sunset"},
    {id:8,src:"https://plus.unsplash.com/premium_photo-1673138824704-344104aec465",alt:"A group of rocks in the middle of the ocean"},
    {id:9,src:"https://images.unsplash.com/photo-1648343332799-0f4a872f2ed8",alt:"A group of pink flowers in a garden"}

  ]);

    const openLightbox = (index) => {
      setCurrentImageIndex(index);
      setIsOpen(true);
    };



    return (
      <>
      <Navbar mediaItems={mediaItems} setMediaItems={setMediaItems} />  
      <div className='m-2'>
        <div className="row">
          {mediaItems.map((item, index) => (
            <div key={item.id} className="col-lg-4">
              <img
                src={item.src}
                alt={item.alt}
                onClick={() => openLightbox(index)}
                className="w-100 shadow-1-strong rounded mb-4"
                style={{ width: '200px', height: '300px', cursor: 'pointer' }}
              />
            </div>
          ))}
        </div>
      </div>

     
        <SlideshowLightbox
        lightboxIdentifier="lbox1"
        framework="next"
        images={mediaItems.map(item => ({ src: item.src, alt: item.alt }))}
        onClose={() => setIsOpen(false)}
        open={isOpen}
        showIndex={true}
        showThumbnails={true}
        slideInterval={3000}
        startingSlideIndex={currentImageIndex}
      />
    

    </>
    );
}  
