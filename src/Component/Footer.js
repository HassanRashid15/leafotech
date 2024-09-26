import React from 'react';
import footerlogo from "./../Assets/Images/footerlogo.png";
import { FiSend } from "react-icons/fi";

function Footer() {
  return (
    <div className="footer-page text-white pt-10">
      <div className='mx-auto footer-alignment-custom'>
        <div className="px-4 sm:px-6  flex flex-wrap justify-between">
          <div className="p-5 footer-alignment-custom-section">
            <div className="flex gap-3 items-center">
              {/* <img src={footerlogo} alt="Logo" /> */}
              <h3 className="font-bold text-xl">  LeafoTech</h3>
            </div>
            <a className="my-3 block" href="/#">
              Copyright © 2020 Landify UI Kit.
              <span className=" text-xs p-1 pt-0"></span>
            </a>
            <a className="my-3 block" href="/#">
              All rights reserved
              <span className=" text-xs p-1"></span>
            </a>
          </div>
          <div className="p-5 footer-alignment-custom-section">
            <div className="text-sm uppercase font-bold">Company</div>
            <a className="my-3 block font-normal" href="/#">About us</a>
            <a className="my-3 block font-normal" href="/#">Blog</a>
            <a className="my-3 block font-normal" href="/#">Contact us</a>
            <a className="my-3 block font-normal" href="/#">Pricing</a>
            <a className="my-3 block font-normal" href="/#">Testimonials</a>
          </div>
          <div className="p-5 footer-alignment-custom-section">
            <div className="text-sm uppercase  font-bold">Support</div>
            <a className="my-3 block font-normal" href="/#">Help Center</a>
            <a className="my-3 block font-normal" href="/#">Terms of Service</a>
            <a className="my-3 block font-normal" href="/#">Legal</a>
            <a className="my-3 block font-normal" href="/#">Privacy Policy</a>
            <a className="my-3 block font-normal" href="/#">Status</a>
          </div>
          <div className="p-5 relative footer-email-field-custom footer-alignment-custom-section">
            <div className="text-sm uppercase  font-bold">Stay up to date</div>
            <input className="my-3 p-3" placeholder="Your Email Address" />
            <FiSend />
            <a className="my-3 block font-normal" href="/#">XXX XXXX, Floor 4 San Francisco, CA</a>
            <a className="my-3 block font-normal" href="/#">contact@company.com</a>
          </div>
        </div>
      </div>

      <div className="pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 border-t text-sm flex-col items-center">
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a href="/#" className="w-6 mx-1"></a>
            <a href="/#" className="w-6 mx-1"></a>
            <a href="/#" className="w-6 mx-1"></a>
            <a href="/#" className="w-6 mx-1"></a>
            <a href="/#" className="w-6 mx-1"></a>
          </div>
          <div className="my-5">© Copyright 2024. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
