import React, { useEffect, useRef } from "react";
import Footer from "./Footer";
import Collection from "../../Images/Blood-collection.jpg";
import Hero from "../../Images/Donor.jpeg";
/* import Tests from "../../Images/Blood-tests-min.jpeg"; */
import Transfusion from "../../Images/Transfusion.jpg";
import Logo from "../../Images/AppLogo.png";
import Bus from "../../Images/bloodbus.jpg";
import jeetImage from "../../Images/jeet.jpg";
import saraImage from "../../Images/sara2.jpg";
import michealImage from "../../Images/micheal.jpg";
import campImg from "../../Images/campImg.jpg";
import eventImg from "../../Images/eventImg.jpg";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      <div className='bg-about-bg flex justify-center items-center flex-col w-1/2 shadow-2xl mt-10 mx-auto'>
        <h3 className='mt-3 text-text-bg text-xl tracking-wide'>
          Blood Donation
        </h3>
        <p className='w-2/3 text-center p-4 mt-2 text-text-about'>
          Blood donation is a selfless act with far-reaching implications for
          public health and well-being. It's a lifeline for individuals in
          critical conditions, a source of hope during emergencies, and a
          testament to the strength of community and compassion.
        </p>
      </div>
      <div className='flex flex-col items-center justify-center mt-10'>
        <img src={Logo} alt='' className='mx-auto' />
        <h3 className='mt-3 mb-10 uppercase text-footer-bg text-2xl tracking-wide text-center'>
          Give Blood Save Life
        </h3>
      </div>
       
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-2/3 mx-auto'>
         {/* div 1 */}
        <div className='flex justify-center items-center flex-col shadow-2xl mt-10 ml-8 mr-4'>
          <img src={Transfusion} alt='' className='h-full' />
          <h3 className='mt-3 text-text-bg text-xl tracking-wide'>
            Blood Transfusion
          </h3>
          <p className='w-full text-center p-4 mt-2 text-text-about'>
            Blood transfusion involves transferring blood from a compatible
            donor to a recipient, serving as a crucial procedure during
            surgeries, traumas, and cases of significant blood loss.
          </p>
        </div>
        {/* div 2 */}
        <div className='  flex justify-center items-center flex-col shadow-2xl mt-10 ml-4 mr-4'>
          <img src={Collection} alt='' className='h-full' />
          <h3 className='mt-3 text-text-bg text-xl tracking-wide'>
            Blood Group Collection
          </h3>
          <p className='w-full text-center p-4 mt-2 text-text-about'>
            Accurate blood group collection is essential to prevent potential
            adverse reactions when matching donor and recipient blood.
          </p>
        </div>
        {/* div-3 */}
        <div className='flex justify-center items-center flex-col shadow-2xl mt-10 mr-8 ml-4'>
          <img src={Hero} alt='' className='h-full' />
          <h3 className='mt-3 text-text-bg text-xl tracking-wide'>
            Free Blood Checking
          </h3>
          <p className='w-full text-center p-4 mt-2 text-text-about'>
            Our skilled medical professionals employ advanced techniques to
            analyze your blood samples meticulously. Through this thorough
            examination, you can gain valuable insights into your overall
            well-being.
          </p>
        </div>
        {/* div 4 */}
        <div className='flex justify-center items-center flex-col shadow-2xl mt-10 ml-8 mr-4'>
          <img src={eventImg} alt='' className='h-full w-full' />
          <h3 className='mt-4 text-text-bg text-xl tracking-wide'>
            Donation Events
          </h3>
          <p className='w-full text-center p-4 mt-2 text-text-about'>
            Donating blood is a selfless act that leaves you with a profound
            sense of fulfillment.Our event offers supportive environment with
            skilled professionals to guide you through the process.
          </p>
        </div>
        {/* div 5 */}
        <div className='flex justify-center items-center flex-col shadow-2xl mt-10 ml-4 mr-4'>
          <img src={campImg} alt='' className='h-full' />
          <h3 className='mt-4 text-text-bg text-xl tracking-wide'>
            Our Mission
          </h3>
          <p className='w-full text-center p-4 mt-2 text-text-about'>
            Our primary mission is to facilitate and support blood donors. We
            provide a streamlined and safe process, conduct donor education,
            organize donation drives, and ensure the efficient collection.
          </p>
        </div>
        {/* div 6 */}
        <div className='  flex justify-center items-center flex-col shadow-2xl mt-10 mr-8 ml-4'>
          <img src={Bus} alt='' className='h-full'/>
          <h3 className='mt-4 text-text-bg text-xl tracking-wide'>
            Blood Donation Camps
          </h3>
          <p className='w-full text-center p-4 mt-2 text-text-about'>
            Your decision echoes with the promise of a healthier, stronger
            future for all. Embark on this journey with us, and let's paint a
            canvas of care and empathy that will be remembered forever."
          </p>
        </div>
      </div>

      <div>
        {/* !GRID */}
        <h2 className='text-footer-bg pt-10 text-2xl tracking-wide mx-auto font-medium'>
          {" "}
          Meet Our Volunteers{" "}
        </h2>

        <div className='bg-about-bg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 mb-10 pb-8'>
          {/* card 1*/}

          <div className='rounded-xl shadow-2xl bg-about-bg transition-transform hover:scale-110 cursor-pointer w-1/2 md:w-1/2 p-4 mx-auto mt-8 lg:translate-x-48'>
            <div className='rounded-3xl overflow-hidden'>
              <img src={jeetImage} alt='jeetImage' className='rounded-3xl w-64 h-64 mx-auto' />
            </div>
            <h5 className='text-text-bg text-2xl md:text-2xl font-medium mt-6 text-center'>
              Jeet Sharma
            </h5>
            <h5 className=' text-2xl md:text-xl font-medium mt-3 text-center'>
              Developer
            </h5>
            <p className='text-slate-500 text-md text-center mt-3 mx-auto'>
              I had a wonderful experience Donating Blood with this
              Organization.
            </p>
          </div>
          {/* card 2*/}
          <div className='rounded-xl shadow-2xl bg-about-bg transition-transform hover:scale-110 cursor-pointer w-1/2 md:w-1/2 p-4 mx-auto mt-8'>
            <div className='rounded-3xl overflow-hidden'>
              <img src={saraImage} alt='saraImage' className='rounded-3xl w-64 h-64 mx-auto' />
            </div>
            <h5 className='text-text-bg text-2xl md:text-2xl font-medium mt-6 text-center'>
              Sara
            </h5>
            <h5 className='text-2xl md:text-xl font-medium mt-3 text-center'>
              Accountant
            </h5>
            <p className='text-slate-500 text-md text-center mt-3 mx-auto'>
              A Truely impactful experience.I felt grateful for opportunity to
              contribute.
            </p>
          </div>
          {/* card 3*/}
          <div className='rounded-xl shadow-2xl bg-about-bg transition-transform hover:scale-110 cursor-pointer w-1/2 md:w-1/2 p-4 mx-auto mt-8 lg:-translate-x-48'>
            <div className='rounded-3xl overflow-hidden'>
              <img
                src={michealImage}
                alt='michaelImage'
                className='rounded-3xl w-64 h-64 mx-auto'
              />
            </div>
            <h5 className='text-text-bg text-2xl md:text-2xl font-medium mt-6 text-center'>
              Micheal
            </h5>
            <h5 className='text-2xl md:text-xl font-medium mt-3 text-center'>
              Student
            </h5>
            <p className='text-slate-500 text-md text-center mt-3 mx-auto'>
              Happy to Know how my donation could make a difference. It really
              motivated me.
            </p>
          </div>
        </div>
      </div>
      {/* div volunteer */}
      <div className='bg-random-bg p-20 flex justify-between text-white w-full h-1/2'>
        <p className='text-4xl tracking-wider '>
          Best Way to Make a Difference in the Lives of Others!
        </p>
        <Link to='/login'>
          <button className='px-8 py-8 bg-white text-text-bg hover:bg-footer-bg rounded-full font-semibold flex items-center'>
            <span className='mx-auto tracking-wider'>BECOME A VOLUNTEER</span>
          </button>
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;
