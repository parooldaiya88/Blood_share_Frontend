import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaCaretRight,
} from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=' bg-footer-bg text-white relative bottom-0'>
      <div className='mx-w-5xl mx-auto '>
        <div className='mx-6  text-center md:text-left'>
          <div>
            <div className='md:w-full'>
              <div className='flex justify-center items-center flex-col '>
                <h2 className=' flex justify-center  pt-5 pb-3 font-semibold uppercase md:justify-start text-text-bg text-xl'>
                  {" "}
                  Blood Share
                </h2>

                <p className='mb-4  dark:text-neutral-200 md: w-2/3 font-serif text-lg text-center'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto accusamus dolorum veritatis, iusto, rem quam ipsa
                  earum commodi nobis vitae harum, corrupti voluptates illum
                  delectus doloribus? Facilis adipisci voluptatum excepturi.
                </p>
              </div>
            </div>
            <hr class='mx-auto md:w-2/3  h-0.5   border-0 rounded dark:bg-gray-700 py-0' />

            {/* Donor,Hospital,Organization */}
            <div className='flex justify-center mt-7 md:gap-32 '>
              <div className="pr-20">
                <h6 className='mb-4 flex justify-center font-semibold uppercase text-text-bg  md:justify-start  '>
                  Login
                </h6>
                <ul>
                  <li className='mb-4 '>
                    <Link
                      to='/'
                      className=' dark:text-neutral-200 hover:text-text-bg font-serif'
                    >
                      Donor
                    </Link>
                  </li>
                  <li className='mb-4'>
                    <Link
                      to='/'
                      className=' dark:text-neutral-200 hover:text-text-bg font-serif '
                    >
                      Hospital
                    </Link>
                  </li>
                  <li className='mb-4'>
                    <Link
                      to='/'
                      className=' dark:text-neutral-200 hover:text-text-bg font-serif'
                    >
                      Organization
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start text-text-bg '>
                  Contact
                </h6>
                <ul>
                  <li className='flex justify-start mb-4 dark:text-neutral-200 hover:text-text-bg '>
                    <FaEnvelope />{" "}
                    <p className='ml-4 tracking-wider font-serif'>
                      info@bloodshare.de
                    </p>
                  </li>
                  <li className='flex justify-start mb-4 dark:text-neutral-200 hover:text-text-bg font-serif'>
                    <FaPhoneAlt />{" "}
                    <p className='ml-4 tracking-wider font-serif'>
                      +4925967843
                    </p>
                  </li>
                  <li className='flex justify-start  mb-4 dark:text-neutral-200 hover:text-text-bg '>
                    <FaFax />{" "}
                    <p className='ml-4 tracking-wider font-serif'>
                      +4925967841
                    </p>
                  </li>
                  <li className='flex justify-start mb-4 dark:text-neutral-200 hover:text-text-bg '>
                    <FaLocationDot />{" "}
                    <p className='ml-4 tracking-wider font-serif'>
                      Berliner straße 42 <br />
                      4258 Berlin <br />
                      Germany <br />
                    </p>
                  </li>
                </ul>
              </div>
              <ul className='flex justify-between flex-col p-4 pl-20  text-center'>
                <li className=' h-9 w-9 text-3xl hover:text-text-bg '>
                  <FaFacebookSquare />
                </li>
                <li className='h-9 w-9 text-3xl hover:text-text-bg '>
                  <FaInstagram />
                </li>
                <li className='h-9 w-9 text-3xl hover:text-text-bg '>
                  <FaTwitter />
                </li>
                <li className='h-9 w-9 text-3xl hover:text-text-bg '>
                  <FaLinkedinIn />
                </li>
                <li className='h-9 w-9 text-3xl hover:text-text-bg '>
                  <FaGooglePlusG />
                </li>
              </ul>
            </div>
          </div>
          <hr class='mx-auto md:w-2/3  h-0.5  border-0 rounded dark:bg-gray-700' />
          <div className='text-white  mt-3 flex justify-center pb-5  text-xs font-serif'>
            Copyright 2023 - Blood Share by WebTechTitans. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
