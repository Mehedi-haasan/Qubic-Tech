import { NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from 'react-scroll';
import { Icon } from "@iconify/react";
import { useState } from "react";



const Header = () => {
  const [open, setOpen]=useState(false)

  const toggleOpen =()=>{
      setOpen(!open)
  }
  return (
  
    <div className="navbar bg-black">
               { <div className="h-full bg-black">
           <ul className={`md:flex absolute md:static transition-all ease-in duration-700 top-[75px] bg-[#22262A] md:bg-gray-100 md:hidden w-full p-3 left-0 space-x-4 
                ${open ? "left-0" : "left-[-750px]"}`}>
          <li><Link activeClass="active" to='home' onClick={toggleOpen} spy={true} smooth={true}  duration={300} className="cursor-pointer text-white text-xl py-2 ml-4 font-bold">Home</Link></li>
          <li><Link activeClass="active" to='services' onClick={toggleOpen} spy={true} smooth={true}  duration={300} className="cursor-pointer text-white text-xl py-2 font-bold">Services</Link></li>
          <li><Link activeClass="active" to='about' onClick={toggleOpen} spy={true} smooth={true}  duration={300} className="cursor-pointer text-white text-xl py-2 font-bold">About</Link></li>
          <li><Link activeClass="active" to='contact' onClick={toggleOpen} spy={true} smooth={true}  duration={300} className="cursor-pointer text-white text-xl py-2 font-bold">Contact</Link></li>
        </ul>
        </div>
         
         }
      <div className="navbar-start">
      <div className="dropdown button-menu flex">

        </div>
  
        <NavLink className='flex md:ml-10 lg:ml-20' onClick={() => scroll.scrollToTop()}><img src="https://qubictech.co/wp-content/uploads/2021/04/Logo_Qubic_blanc.png" alt="qubic" className="h-[60px] md:h-[80px] lg:h-[90px]"/></NavLink>
      </div>
      <div className="navbar-center  hidden md:flex">
        <ul className="menu menu-horizontal px-1 text-white">
           <li><Link activeClass="active" to='home' spy={true} smooth={true}  duration={300} className="text-white text-xl py- font-bold" onClick={() => scroll.scrollToTop()}>Home</Link></li>
            <li><Link activeClass="active" to='services' spy={true} smooth={true}  duration={300} className="text-white text-xl py-2 font-bold">Services</Link> </li>
            <li><Link activeClass="active" to='about' spy={true} smooth={true}  duration={300} className="text-white text-xl py-2 font-bold">About</Link></li>
            <li><Link activeClass="active" to='contact' spy={true} smooth={true}  duration={300} className="text-white text-xl py-2 font-bold">Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
      <button className="btn btn-outline btn-success font-bold mr-5 mt-2">Get a Quote</button>
      </div>
      <button className='font-bold mr-3 text-white md:hidden' onClick={toggleOpen}><Icon icon="solar:hamburger-menu-bold" width="35px" /></button>
    </div>
  );
};

export default Header;
