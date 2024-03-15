"use client";
import Image from "next/image";
import React from "react";


const Carousel = () => {
  return (
        <section className="text-gray-600 body-font bg-white">
          <div className="container py-40 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/5 sm:w-1/2 p-4">
                <Image  alt="gallery" width="600" height="360" src="/image12.png" />
              </div>
              <div className="lg:w-1/5 sm:w-1/2 p-4">
                <Image  alt="gallery" width="600" height="360" src="/image10.png" />
              </div>
              <div className="lg:w-1/5 sm:w-1/2 p-4">
                <Image  alt="gallery" width="600" height="360" src="/image11.png" />
              </div>
              <div className="lg:w-1/5 sm:w-1/2 p-4">
                <Image  alt="gallery" width="600" height="360" src="/image12.png" />
              </div>
              <div className="lg:w-1/5 sm:w-1/2 p-4">
                <Image  alt="gallery" width="600" height="360" src="/image11.png" />
              </div>
            </div>
          </div>
        </section>
    );
};
export default Carousel;