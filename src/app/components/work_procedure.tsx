"use client";

import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faPenRuler } from '@fortawesome/free-solid-svg-icons';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
// import Image from "next/image";

const WorkProcedure = () => {
  return (

    <section className="text-gray-600 body-font">
    <div className="flex flex-col w-full sm:px-40">
      <p className="leading-relaxed text-base font-serif text-[#CC8D69] mb-3">How We Work</p>
      <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 font-serif text-[#781F19] tracking-widest">Our work procedure</h1>
    </div>

    <div className="container mx-auto flex px-5 sm:px-32 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <div className="border p-12">
        <FontAwesomeIcon icon={faComments} className="w-10 h-10 text-[#855439]" />
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-serif sm:py-7">Client design consulation</h1>
        <p className="mb-8 leading-relaxed font-serif text-black text-lg">Define client requirements, conduct site analysis, and establish goals for the space.</p>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image className="object-cover object-center" alt="hero" width="600" height="360" src="/image4.png"/>
      </div>
    </div>

    <div className="container mx-auto flex px-5 sm:px-32 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <div className="bg-[#855439] border p-12">
        <FontAwesomeIcon icon={faPenRuler} className="w-10 h-10 text-white" />
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white font-serif sm:py-7">Concept development</h1>
        <p className="mb-8 leading-relaxed font-serif text-white text-lg">Create a cohesive design vision, present it through mood boards, and collaborate with the client for feedback.</p>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image className="object-cover object-center" alt="hero" width="600" height="360" src="/image5.png"/>
      </div>
    </div>

    <div className="container mx-auto flex px-5 sm:px-32 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <div className="border p-12">
        <FontAwesomeIcon icon={faHouseChimney} className="w-10 h-10 text-[#855439]" />
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-serif sm:py-7">Space planning</h1>
        <p className="mb-8 leading-relaxed font-serif text-black text-lg">Optimize furniture placement, consider traffic flow, and maintain balance for a functional and visually appealing layout.</p>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image className="object-cover object-center" alt="hero" width="600" height="360" src="/image6.png"/>
      </div>
    </div>

    <div className="container mx-auto flex px-5 sm:px-32 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <div className="bg-[#855439] border p-12">
        <FontAwesomeIcon icon={faPenRuler} className="w-10 h-10 text-white" />
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white font-serif sm:py-7">Material and colour selection</h1>
        <p className="mb-8 leading-relaxed font-serif text-white text-lg">Choose appropriate materials, finalize a complementary color palette, and integrate varied textures for depth.</p>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image className="object-cover object-center" alt="hero" width="600" height="360" src="/image7.png"/>
      </div>
    </div>

    <div className="container mx-auto flex px-5 sm:px-32 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <div className="border p-12">
        <FontAwesomeIcon icon={faHouseChimney} className="w-10 h-10 text-[#855439]" />
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-serif sm:py-7">Implementation and execution</h1>
        <p className="mb-8 leading-relaxed font-serif text-black text-lg">Develop detailed drawings, manage the budget, and supervise the installation for accurate execution of the design concept.</p>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image className="object-cover object-center" alt="hero" width="600" height="360" src="/image8.png"/>
      </div>
    </div>

    <div className="flex sm:px-36 mb-10">
      <button type="button" className="text-white bg-[#272E1C] rounded py-5 px-8 text-sm font-serif">CONTACT US</button>
    </div>
  </section>

    );
};
export default WorkProcedure;