import React from 'react';
import { Button, Navbar } from "flowbite-react";
import logo from "./../Assets/Images/logo.png";
import { FaArrowRightLong } from "react-icons/fa6";

function MyNavbar() {
  return (
    <div className='navbar-homepage' >
      <Navbar className='mx-auto' fluid rounded>
        <Navbar.Brand href="/">
          {/* <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          LeafoTech
                    </span>
        </Navbar.Brand>
        
        <div className="flex links-adjustment ">
          <Navbar.Toggle />
        </div>
        
        <Navbar.Collapse className="justify-center  navbar-collapse-adjustment">
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
          <Button className='button-alignment-adjustment' >Register Now <FaArrowRightLong /></Button>
        </Navbar.Collapse>

        <div className="hidden md:block lg:block">
          <Button href="/contact" className='button-alignment-adjustment' >Register Now <FaArrowRightLong /></Button>
        </div>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
