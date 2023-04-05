import { useEffect, useState } from "react";
import { getGifts } from "../helpers/GetGifts";

import GiftItem from "./GiftItem";

const GiftGrid = ( { categoria } ) => {
    
    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifts( categoria );
        setImages(newImages);
    }

    useEffect(()=>{
        getImages();
    },[]);

    return ( 
        <div>
            <h3>{ categoria }</h3>
            <div className="row justify-content-center">
                { images.map( ( image )  => (
                    <GiftItem 
                        key={image.id}
                        image = { image }
                    />
                ))
                }
            </div>
        </div>
    );
}

export default GiftGrid;