import React, { useState } from "react";
import { Navbar } from "../components";

export default function CenteredWrapper({ children }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <main className='min-h-screen bg-white overflow-hidden'>
      <header className='flex justify-center items-center h-16 '>
        <Navbar quantity={quantity} setQuantity={setQuantity} />
      </header>
      {/* <div className=' w-10/12 h-2 flex-shrink-0 bg-peach'></div> */}
      <section className='flex flex-col justify-center items-center flex-1 overflow-hidden '>
        {/* {children} */}
        {React.Children.map(children, (child) => {
          return React.cloneElement(
            child,
            { quantity: quantity, setQuantity: setQuantity }
          );
        })}
      </section>
    </main>
  );
}
