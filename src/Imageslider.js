import {  useEffect, useState } from "react";
import { data } from "./constants";

const Imageslider  = () => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const handleNextClick = ()=> {
        setActiveImageIndex((activeImageIndex + 1 ) % data.length);
    };
 
    const handlePrevImage = () => {
        if(activeImageIndex === 0) {
            setActiveImageIndex(data.length - 1)
        }
        else {
            setActiveImageIndex(activeImageIndex - 1)
        }
        
    }

    useEffect(()=>{
        const timer = setTimeout(()=> {
            handleNextClick();
        },5000)
        return ()=>{
            clearTimeout(timer)
        }
    },[activeImageIndex])
    return (
    <div className="flex justify-center">
        {/* <p>Image Slider</p> */}
        <button className="font-bold p-4 m-10" onClick={handlePrevImage}>Previous</button>
        {data.map((url , i)=> 
        <img 
        key={url}
        src ={url} 
        className= {"w-[700px] h-[500px] pt-20 object-contain "  + (activeImageIndex === i ? "block" : "hidden")} 
        alt="wallpapers"
        />
    )}
        
        <button className="font-bold p-4 m-10" onClick={handleNextClick}>Next</button>
    </div>
    );
}

export default Imageslider;