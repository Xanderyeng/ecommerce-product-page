import { useState } from "react";
import { Navbar } from "../components";
import ProductSection from "../features/ProductSection";
import CenteredWrapper from "../hoc/CenteredWrapper";
import SectionWrapper from "../hoc/SectionWrapper";

function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState(null);
  // const [cartItems, setCartItems] = useState([]);

  // Recieve objects to be passed on to the Cart for Display
  // const addToCart = function(items, quantity) {
  const addToCart = function() {
    setCartItems((prevItems) => prevItems + quantity)
  }

  return (
    <>

    {/* <CenteredWrapper> */}
        <Navbar cartItems={cartItems} />
    <>
        {/* <div>Ecomm</div> */}
        <section className="min-w-screen-md flex flex-col md:w-3/4 2xl:w-11/12 md:flex-row pt-20 ">
            <ProductSection setQuantity={setQuantity} quantity={quantity} addToCart={addToCart} />
        </section>
    </>
    {/*  </CenteredWrapper> */}
    </>
  );
}

export default SectionWrapper(ProductPage);
