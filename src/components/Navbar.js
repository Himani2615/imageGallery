import React,{useState} from "react";

export default function Navbar({mediaItems,setMediaItems}) {
  const [query,setQuery] =useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const searchQuery = query.toLowerCase();
    const filtered = mediaItems.filter((item) => {
      if (item.alt) {
        const altText = item.alt.toLowerCase();
        return altText.includes(searchQuery);
      } else {
          return false;
      }
    });
    
    setMediaItems(filtered); 
  };
  

  const handleChange=(e) =>{
    setQuery(e.target.value);
    if (e.target.value === "") {
      setMediaItems([
        { id: 1, src: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp", alt: "Boat on Calm Water" },
        { id: 2, src: "https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp", alt: "Wintry Mountain Landscape" },
        { id: 3, src: "https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp", alt: "Mountains in the Clouds" },
        { id: 4, src: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp", alt: "Boat on Calm Water"},
        { id: 5, src: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp", alt: "Waves at Sea" },
        { id: 6, src: "https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp", alt: "Yosemite National Park"},
        {id:7,src:"https://images.unsplash.com/photo-1589459783419-51827737a10e",alt:"Silhouette of bare tree during sunset"},
        {id:8,src:"https://plus.unsplash.com/premium_photo-1673138824704-344104aec465",alt:"A group of rocks in the middle of the ocean"},
        {id:9,src:"https://images.unsplash.com/photo-1648343332799-0f4a872f2ed8",alt:"A group of pink flowers in a garden"}
      ]);
    }
  }

  return (
    <>
      <nav className="navbar navbar-light bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand text-light fs-2 fst-italic font-weight-bold">Media Gallery</a>
          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search "
              aria-label="Search"
              value={query}
              onChange={handleChange}
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      
      
     


  </>
  );
}
