export default function ProductPricing() {
  return (
    <>
      {/* PRICES AND DISCOUNT */}
      <div className=' flex flex-row justify-start gap-6'>
        <span className=' text-3xl font-bold leading-6 text-very-dark-blue'>
          &#36;125.00
        </span>
        <span className=' m-0 px-2 pt-[0.5px] text-center bg-pale rounded-md font-bold text-primary  text-sm'>
          50&#37;
        </span>
      </div>
      {/* ORIGINAL PRICE */}
      <span className=' line-through font-bold leading-6 tracking-wide'>
        &#36;250.00
      </span>
    </>
  );
}
