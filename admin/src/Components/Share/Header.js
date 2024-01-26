import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";



const Header = () => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }
  return (

    <div className="navbar bg-black">

      {/* 1st div */}
      <div className="grid grid-cols-12">
        <div className="grid col-span-6 md:col-span-4">
          <NavLink className='flex md:ml-10 lg:ml-20'><img src="https://qubictech.co/wp-content/uploads/2021/04/Logo_Qubic_blanc.png" alt="qubic" className="h-[60px] p-1 lg-p-2 md:h-[80px] lg:h-[90px]" /></NavLink>
        </div>

        {/* 2nd div */}
        <div className="md:col-span-4 lg:col-span-3 hidden md:block">
          <ul className="px-1 py-2 md:py-3 lg:py-5 flex w-full text-white">
            <li className="mx-auto"><NavLink to="/" className="text-white text-xl font-bold" >Home</NavLink></li>
            <li className="mx-auto"><NavLink to="/services" className="text-white text-xl font-bold">Services</NavLink> </li>
            <li className="mx-auto"><NavLink to="/about" className="text-white text-xl font-bold">About</NavLink></li>
            <li className="mx-auto"><NavLink to="/contact" className="text-white text-xl  font-bold">Contact</NavLink></li>
          </ul>
        </div>

        {/* 3rd div */}
        <div className="grid col-span-6 md:col-span-4 lg:col-span-5">
          <div>
            <button className='font-bold float-right mr-2 mt-2 text-white md:hidden' onClick={toggleOpen}><Icon icon="solar:hamburger-menu-bold" width="35px" /></button>
            <button className="border border-[#06D889] text-[#06D889] rounded-md mt-1 p-1 md:p-2 float-right font-semibold mr-3 mt-2">Get a Quote</button>
          </div>
        </div>
      </div>

      {<div className="h-full bg-black">
        <ul className={`md:flex absolute md:static transition-all ease-in duration-700 top-[75px] bg-[#22262A] md:bg-gray-100 md:hidden w-full p-3 left-0 space-x-4 ${open ? "left-0" : "left-[-750px]"}`}>
          <li><NavLink to="/" className="cursor-pointer text-white text-xl py-2 ml-4 font-bold">Home</NavLink></li>
          <li><NavLink to="/services" className="cursor-pointer text-white text-xl py-2 font-bold">Services</NavLink></li>
          <li><NavLink to="/about" className="cursor-pointer text-white text-xl py-2 font-bold">About</NavLink></li>
          <li><NavLink to="/contact" className="cursor-pointer text-white text-xl py-2 font-bold">Contact</NavLink></li>
        </ul>
      </div>

      }
    </div>
  );
};

export default Header;
