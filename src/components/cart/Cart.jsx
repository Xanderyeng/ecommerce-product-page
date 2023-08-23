import { cart } from "@assets";
// import CartQuantity from "./CartQuantity";

export default function Cart({cartItems}) {
  return (
    <>
      <div className='relative'>
        <div
          style={{ backgroundImage: `url(${cart})` }}
          alt='shopping-cart'
          className=' w-6 h-6 bg-contain bg-no-repeat bg-center cursor-pointer'
        />

        <div className='absolute -top-3 -right-3 px-2  bg-primary text-white text-sm font-bold rounded-xl'>
          {cartItems === null ? '0': cartItems}
        </div>
      </div>
    </>
  );
}
