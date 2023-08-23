import Cart from "../cart/Cart";
import Logo from "../Logo";
import Login from "../../features/Login";

const menuLinks = [
  { page: "collections" },
  { page: "men" },
  { page: "women" },
  { page: "about" },
  { page: "contact" },
];

export default function Navbar({cartItems}) {
  
  return (
    <div className=' max-w-5xl 2xl:max-w-7xl flex justify-center items-center h-16 gap-10 flex-row flex-shrink-0 relative border-b-2 border-light-grayish-blue overflow-hidden'>
      <Logo />
      <nav className='w-full '>
        <ul className='inline-flex align-start gap-6 text-grayish-blue capitalize'>
          {menuLinks.map((item,i) => (
            <li
              key={i}
              className='font-kumbh-sans font-normal py-[1rem] border-b-0 border-transparent hover:text-very-dark-blue hover:border-b-4 hover:border-orange-600 hover:cursor-pointer'
            >
              {item.page}
            </li>
          ))}
        </ul>
      </nav>
      <Cart cartItems={cartItems} />
      <Login />
    </div>
  );
}
