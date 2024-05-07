import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
export default function NavBar() {
  const [nav, setNav] = useState(true);
  const [click, setClick] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const closeMenu = () => setClick(false);
  return (
    <div
      className="p-4 flex  items-center justify-between max-h-[50px] shadow 
    text-[black] "
    >
      <h1 className="text-[32px] cursor-pointer  font-bold font-serif">
        Luxury Motors
      </h1>
      <ul className=" hidden md:flex tems-center gap-[4vw] ">
        <li href="#" className="cursor-pointer  hover:text-slate-500  ">
          <Link
            to="process"
            spy={true}
            smooth={true}
            offset={500}
            duration={850}
            onClick={closeMenu}
          >
            Process
          </Link>
        </li>
        <li href="#" className="cursor-pointer hover:text-slate-500 ">
          <Link
            to="payment"
            spy={true}
            smooth={true}
            offset={500}
            duration={850}
            onClick={closeMenu}
          >
            Payment
          </Link>
        </li>
        {/* <li href="#" className="cursor-pointer hover:text-slate-500 ">
          <Link
            to="process"
            spy={true}
            smooth={true}
            offset={500}
            duration={850}
            onClick={closeMenu}
          >
            Model
          </Link>
        </li> */}
        <li href="#" className="cursor-pointer hover:text-slate-500 ">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={500}
            duration={850}
            onClick={closeMenu}
          >
            About
          </Link>
        </li>
      </ul>
      <h1 className="">Contact</h1>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "bg-red-800 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900h-ful ease-in-out duration-500"
            : "fixed left-[-100%] "
        }
      >
        <ul className="pt-24 text-white">
          <li className="p-4 border-b border-grey-600">Home</li>
          <li className="p-4 border-b border-grey-600">Company</li>
          <li className="p-4 border-b border-grey-600">Resources</li>
          <li className="p-4 border-b border-grey-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
}
