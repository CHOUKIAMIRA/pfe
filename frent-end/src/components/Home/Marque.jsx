import React, { useEffect, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from "../../assets/marque/guess.png";
import img2 from "../../assets/marque/channel.png";
import img3 from "../../assets/marque/guess.png";
import img4 from "../../assets/marque/levis.png";
import img5 from "../../assets/marque/puma.png";
import img6 from "../../assets/marque/ralph lauren.png";
import img7 from "../../assets/marque/shein.png";
import img8 from "../../assets/marque/stardivarus.png";
import img9 from "../../assets/marque/zara.png";
import "../../App.css";
function Marque() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current !== null) {
        carouselRef.current.next();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    }
  };

  return (
   
   
    <div style={{ textAlign: "center",marginBottom:"30px"}}>
      <br/><br/>
      <Carousel 
        ref={carouselRef} 
        responsive={responsive} 
        removeArrowOnDeviceType={["tablet", "mobile"]}
        autoPlay={false}
        infinite={true}
        containerClass="carousel-container"
      >
        {[img1, img2, img3, img4, img5, img6, img7, img8, img9].map((img, index) => (
          <div  key={index} >
           <a> <img src={img} alt={`brand-${index}`} style={{ width: "100px", height: "70px", borderRadius: "50%" }} /></a>
          </div>
        ))}
      </Carousel>
      <br/><br/>
    </div>
   
    
  );
}

export default Marque;
