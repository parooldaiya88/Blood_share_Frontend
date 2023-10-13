import React from "react";
import Sesait from "../../Images/Sesait.jpg";
import Harsh from "../../Images/Harsh.jpg";
import Maha from "../../Images/Maha.jpeg";
import Parul from "../../Images/Parul.jpeg";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Navigation from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { useContext } from "react";
import { DataContext } from "../../reducer/context";

const ContactPage = () => {
  const { isOpen } = useContext(DataContext);
  return (
    <div className='w-full min-h-screen'>
      <div
        className={`relative bg-gray-200 h-30 mx-auto shadow-2xl ${
          isOpen
            ? `top-80 transition-all duration-1000`
            : `top-1 transition-all duration-1000 `
        } `}
      >
        <h2 className='group relative uppercase hover:scale-110 hover:text-footer-bg text-red-700 font-normal text-3xl -ml-4 tracking-widest pt-20 md:-ml-4'>
          Meet our team
          {/* <span className="absolute w-1/2 right-36 h-0.5 bg-text-bg rounded-lg transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 mt-10 md:w-72 md:left-1/4 md:ml-80"></span> */}
        </h2>
        <p className='w-1/2 text-lg font-serif pt-7 mx-auto md:w-1/2 md:text-center'>
          Meet the driving force behind Blood Share's success: our remarkable
          team of web developer girls. With their skills, creativity, and
          unwavering dedication, they bring your digital vision to life. From
          designing elegant user interfaces to coding seamless functionality,
          our girls excel in every aspect of web development. Join us in
          celebrating their contributions to innovation in the tech industry!
        </p>

        <div className='container mx-auto py-10 flex justify-center pb-24 mt-16 md:w-full'>
          <div className='grid lg:grid-cols-4 gap-4 '>
            <div className='shadow-lg rounded-lg w-80 h-96 relative overflow-hidden group'>
              <img src={Maha} alt='Portrait of Maha' className='rounded-lg' />
              <div className='absolute top-0 left-0 w-full h-full flex -translate-x-full items-center justify-center rounded-lg bg-black bg-opacity-75 group-hover:translate-x-0 duration-300 '>
                <div className='text-center'>
                  <h3 className='text-white text-2xl font-bold mb-2'>
                    Maha khan
                  </h3>
                  <h4 className='text-white text-lg font-normal mb-2'>
                    {" "}
                    Project Manager{" "}
                  </h4>
                  <ul>
                    <li className='inline-block mx-3  text-white hover:text-red-700 duration-300'>
                      <a href='mailto:abeeraareej@gmail.com'>
                        <FaEnvelope />
                      </a>
                    </li>
                    <li className='inline-block mx-3  text-white hover:text-red-700 duration-300'>
                      <a
                        href='https://github.com/Makh93'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <FaGithub />
                      </a>
                    </li>
                    <li className='inline-block mx-3  text-white hover:text-red-700 duration-300'>
                      <a
                        href='http://www.linkedin.com/in/maha-khan-b91600240'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <FaLinkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='shadow-lg rounded-lg w-80 h-96 relative overflow-hidden group'>
              <img
                src={Parul}
                alt='Portrait of Parul'
                className='rounded-lg h-full'
              />
              <div className='absolute top-0 left-0 w-full h-full flex -translate-x-full items-center justify-center rounded-lg bg-black bg-opacity-75 group-hover:translate-x-0 duration-300'>
                <div className='text-center'>
                  <h3 className='text-white text-2xl font-bold mb-2'>
                    Parul Panwar
                  </h3>
                  <h4 className='text-white text-lg font-normal mb-2'>
                    {" "}
                    Repository Maintainer{" "}
                  </h4>
                  <ul>
                    <li className='inline-block mx-3  text-white hover:text-red-700 duration-300'>
                      <a href='mailto:parooldaiya88@gmail.com'>
                        <FaEnvelope />
                      </a>
                    </li>
                    <li className='inline-block mx-3  text-white hover:text-red-700 duration-300'>
                      <a
                        href='https://github.com/parooldaiya88'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <FaGithub />
                      </a>
                    </li>
                    <li className='inline-block mx-3  text-white hover:text-red-700 duration-300'>
                      <a
                        href='https://www.linkedin.com/in/parul-panwar-60ba95108/'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <FaLinkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='shadow-lg rounded-lg w-80 h-96 relative overflow-hidden group'>
              <img
                src={Sesait}
                alt='Portrait of Sesait'
                className='rounded-lg h-full'
              />
              <div className='absolute top-0 left-0 w-full h-full flex -translate-x-full items-center justify-center rounded-lg bg-black bg-opacity-75 group-hover:translate-x-0 duration-300'>
                <div className='text-center'>
                  <h3 className='text-white text-2xl font-bold mb-2'>
                    Sesait Robel
                  </h3>
                  <h4 className='text-white text-lg font-normal mb-2'>
                    {" "}
                    Lead Frontend{" "}
                  </h4>
                  <ul>
                    <li className='inline-block mx-3  text-white hover:text-red-700 duration-300'>
                      <a href='mailto:sesaitro22@gmail.com'>
                        <FaEnvelope />
                      </a>
                    </li>
                    <li className='inline-block mx-3  text-white hover:text-red-700 duration-300'>
                      <a
                        href='https://github.com/Sesait22'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <FaGithub />
                      </a>
                    </li>
                    <li className='inline-block mx-3  text-white hover:text-red-700 duration-300'>
                      <a
                        href='https://www.linkedin.com/in/sesait-robel-04447a261/'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <FaLinkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='shadow-lg rounded-lg w-80 h-96 relative overflow-hidden group'>
              <img src={Harsh} alt='Portrait of Harsh' className='rounded-lg' />
              <div className='absolute top-0 left-0 w-full h-full flex -translate-x-full items-center justify-center rounded-lg bg-black bg-opacity-75 group-hover:translate-x-0 duration-300'>
                <div className='text-center'>
                  <h3 className='text-white text-2xl font-bold mb-2'>
                    Harsh Arora
                  </h3>
                  <h4 className='text-white text-lg font-normal mb-2'>
                    {" "}
                    Lead Backend{" "}
                  </h4>
                  <ul>
                    <li className='inline-block mx-3  text-white hover:text-red-700 duration-300'>
                      <a href='mailto:harsharora1274@gmail.com'>
                        <FaEnvelope />
                      </a>
                    </li>
                    <li className='inline-block mx-3  text-white hover:text-red-700 duration-300'>
                      <a
                        href='https://github.com/arora1274'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <FaGithub />
                      </a>
                    </li>
                    <li className='inline-block mx-3  text-white hover:text-red-700 duration-300'>
                      <a
                        href='http://www.linkedin.com/in/harsh-arora-8224aa281'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <FaLinkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
