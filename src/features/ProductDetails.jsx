import ItemQuantitySelector from "./ItemQuantitySelector";
import ProductPricing from "./ProductPricing";

export default function ProductDetails({ setQuantity, quantity, addToCart }) {
  const CartQuantity = quantity;
  
  function handleAddToCart() {
    console.log(CartQuantity);

  }

  return (
    <>
     <p className=" font-bold text-[14px] tracking-wider uppercase text-primary">sneaker company</p>
        <h1 className="text-4xl font-bold text-very-dark-blue tracking-normal leading-10">
          Fall Limited Edition
          <br />
          Sneakers
        </h1>
        {/* MID - TEXT */}
        <p className="text-grayish-blue">
          These low-profile sneakers are your perfect casual wear
          companion. Featuring a durable rubber outer sole, they’ll
          withstand everything the weather can offer.
        </p>
        <>
       <ProductPricing />
        </>
                {/* Botttom buttons sections */}
        <div className="flex w-full justify-start gap-4 flex-row">
            <ItemQuantitySelector onAddQuantity={setQuantity} quantity={quantity} />
            <button className=" flex-1 bg-primary rounded-lg " onClick={() => addToCart(quantity)}>Add to cart</button>
        </div>
    </>
  )
}
