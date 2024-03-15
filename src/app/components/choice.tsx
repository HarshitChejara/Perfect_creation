"use client";
import Image from "next/image";
import React from "react";


const Choice = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 sm:px-20 py-24 md:flex-row flex-col items-center">
      <div className=" md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Image className="object-cover object-center rounded" alt="hero" width="700" height="360" src="/image14.png"/>
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 sm:mb-52 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className=" title-font sm:text-4xl text-3xl mb-4 font-bold text-[#781F19] font-serif tracking-widest">Why choice our interior design services</h1>
        <p className="leading-relaxed font-serif text-black text-xl sm:py-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-[#89643F] border-0 py-4 px-6 focus:outline-none hover:bg-gray-200 rounded text-sm font-serif">OUR SERVICES</button>
        </div>
      </div>
    </div>
  </section>
    );
};
export default Choice;