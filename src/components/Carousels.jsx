import React,{useState,useEffect} from "react";
import Carousel from "react-bootstrap/Carousel";

function Carousels(){
    const carouselImages=[{
            src:"https://img.freepik.com/premium-photo/female-hand-holding-sale-placard-clothes-shop_249974-3694.jpg",
            title:"Sale upto 65% off"
        },
        {
            src:"https://images.bewakoof.com/uploads/grid/app/Official-Merch-store-Desktop-banner-1700470826-1701771559.webp",
            title:"Official Merch Store"
        },{
            src:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Watches/April/Watchout/TopBrands_MBL._CB498050746_.jpg",
            title:"Watch on sale"
        }];
    useEffect(()=>{
        setInterval(nextSlide,2000);
    },[]);
    const [activeIndex,setActiveIndex]=useState(0);
    function nextSlide(){
        setActiveIndex((prevIndex)=> (prevIndex === carouselImages.length-1)?0:prevIndex+1);
        
    }
    function previousSlide(){
        setActiveIndex((prevIndex)=> (prevIndex === 0)?carouselImages.length-1:prevIndex-1);
        
    }
    return (
        <div className="container col-xxl-12">
            
            <div className="carousel">
            <button onClick={previousSlide} className="carousel__btn carousel__btn--prev">
                &lt;
            </button>
            <div>
            <img
                // style={loaded?{}:{display:"none"}}
                src={carouselImages[activeIndex].src}
                alt={`Slide ${activeIndex}`}
                className="carousel__img"                            
            />
            <h3 className="carousel__title">{carouselImages[activeIndex].title}</h3>
            </div>
            
            <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
                &gt;
            </button>
        </div>
        </div>
    );
}

export default Carousels;
