import React from "react";

export default function ItemQuantitySelector({ quantity, onAddQuantity }) {
  return (
    <>
      <div className='min-w-2/6/6 rounded-lg bg-light-grayish-blue'>
        <button
          onClick={() =>
            quantity !== 1 ? onAddQuantity((prev) => prev - 1) : null
          }
          className=' text-2xl text-center font-bold outline outline-2 outline-orange-700 px-4 py-2'
        >
          &ndash;
        </button>
        <span className='text-lg px-2 w-8'>{quantity}</span>
        <button
          onClick={() => onAddQuantity((prev) => prev + 1)}
          className=' text-2xl text-center font-bold outline outline-2 outline-orange-700 px-4 py-2'
        >
          &#43;
        </button>
      </div>
    </>
  );
}
