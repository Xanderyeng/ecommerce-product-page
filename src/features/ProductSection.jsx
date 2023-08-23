import { useState } from "react";

import { product_1 } from "@assets";
import ProductDetails from "./ProductDetails";
import ItemQuantitySelector from "./ItemQuantitySelector";
import { product_2, product_3, product_4, product_thumb_1, product_thumb_2, product_thumb_3, product_thumb_4 } from "../assets";

const products = [
  { item: "sneakers-1", image: product_1, url_thumb: product_thumb_1 },
  { item: "sneakers-2", image: product_2, url_thumb: product_thumb_2 },
  { item: "sneakers-3", image: product_3, url_thumb: product_thumb_3 },
  { item: "sneakers-4", image: product_4, url_thumb: product_thumb_4 },
];



export default function ProductSection({ quantity, setQuantity, addToCart }) {
  const [selectedImage, setSelectedImage] = useState(products[0].image);
  // const [quantity, setQuantity] = useState(1);

  function handleThumbnailClick(image){
    setSelectedImage(image)
  }

  return (
    <>
      {/* --------- LEFT COLUMN --------- */}
      <div className='flex flex-col md:w-3/5 md:justify-center md:items-center overflow-hidden border-2 border-lime-600 '>
        <div>
          {/* className=' w-[447px] h-[567px]' */}
          <img
            src={selectedImage}
            alt='Product 1'
            className='object-contain h-80 w-full rounded-[15px] cursor-pointer'
          />
        </div>
  
        <div className='inline-flex justify-evenly gap-4 md:flex-row mt-8 '>

        {products.map((product, index) => (
            <div key={index} className='bg-no-repeat bg-center bg-cover w-[66px] h-[66px] rounded-[10px] transition duration-300 ease-in-out relative' style={{backgroundImage: `url(${product.url_thumb})`}}>
            <div className='absolute inset-0 bg-white opacity-0 hover:opacity-30  cursor-pointer transition duration-300 ease-in-out'
              onClick={() => handleThumbnailClick(product.image)}
            />
            </div>
        ))
        }
        </div>
      </div>
      {/* --------- RIGHT COLUMN --------- */}
      <div className='flex flex-col px-2 md:w-2/5 md:justify-evenly md:items-start border-2 border-b-lime-600'>
       <>
       <ProductDetails setQuantity={setQuantity} quantity={quantity} addToCart={addToCart} />
        </>

      </div>
    </>
  );
}
