"use client";
import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Team = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col w-full mb-20">
        <h1 className="text-sm title-font font-bold mb-4 text-gray-500">OUR TEAM</h1>
        <h1 className="sm:text-5xl text-3xl font-serif font-bold title-font text-[#781F19]">How we work</h1>
      </div>
      <div className="flex flex-wrap -m-4">
  
        <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex flex-col items-center text-center border hover:bg-[#855439] hover:text-white text-gray-800">
            <Image alt="team" className="flex-shrink-0 object-cover object-center h-96" width="600" height="300" src="/Image Placeholder.png"/>
            <div className="w-full">
              <h3 className="py-3 text-xs">FOUNDER</h3>
              <h2 className="title-font font-bold text-xl">JOHN LENO</h2>
              <span className="inline-flex py-5">
                <a href="https://facebook.com" target="_blank">
                  <FontAwesomeIcon icon={faFacebookF} className="w-7 h-7"/>
                </a>
                <a href="https://twitter.com" target="_blank" className="ml-4">
                  <FontAwesomeIcon icon={faTwitter} className="w-7 h-7"/>
                </a>
                <a href="https://linkedin.com" target="_blank" className="ml-4">
                  <FontAwesomeIcon icon={faLinkedinIn} className="w-7 h-7"/>
                </a>
              </span>
            </div>
          </div>
        </div>
  
        <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex flex-col items-center text-center border hover:bg-[#855439] hover:text-white text-gray-800">
          <Image alt="team" className="flex-shrink-0 object-cover object-center h-96" width="600" height="300" src="/Image Placeholder.png"/>
            <div className="w-full">
              <h3 className="py-3 text-xs">FOUNDER</h3>
              <h2 className="title-font font-bold text-xl">JOHN LENO</h2>
              <span className="inline-flex py-5">
                <a href="https://facebook.com" target="_blank">
                  <FontAwesomeIcon icon={faFacebookF} className="w-7 h-7"/>
                </a>
                <a href="https://twitter.com" target="_blank" className="ml-4">
                  <FontAwesomeIcon icon={faTwitter} className="w-7 h-7"/>
                </a>
                <a href="https://linkedin.com" target="_blank" className="ml-4">
                  <FontAwesomeIcon icon={faLinkedinIn} className="w-7 h-7"/>
                </a>
              </span>
            </div>
          </div>
        </div>
  
        <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex flex-col items-center text-center border hover:bg-[#855439] hover:text-white text-gray-800">
          <Image alt="team" className="flex-shrink-0 object-cover object-center h-96" width="600" height="300" src="/Image Placeholder.png"/>
            <div className="w-full">
              <h3 className="py-3 text-xs">FOUNDER</h3>
              <h2 className="title-font font-bold text-xl">JOHN LENO</h2>
              <span className="inline-flex py-5">
                <a href="https://facebook.com" target="_blank">
                  <FontAwesomeIcon icon={faFacebookF} className="w-7 h-7"/>
                </a>
                <a href="https://twitter.com" target="_blank" className="ml-4">
                  <FontAwesomeIcon icon={faTwitter} className="w-7 h-7"/>
                </a>
                <a href="https://linkedin.com" target="_blank" className="ml-4">
                  <FontAwesomeIcon icon={faLinkedinIn} className="w-7 h-7"/>
                </a>
              </span>
            </div>
          </div>
        </div>
  
      </div>
      <div className="flex justify-center bottom-0 py-32">
          <button className="bottom-0 inline-flex text-white bg-[#89643F] border-0 py-4 px-10 focus:outline-none rounded text-sm">CONTACT US!</button>
      </div>
    </div>
  </section>
    );
};
export default Team;