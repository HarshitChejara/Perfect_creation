"use client";

import React from "react";
import Image from "next/image";

const ProjectStages = () => {
  return (
    <section className="text-gray-600 body-font bg-white">
    <div className="container py-24 sm:px-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-4xl text-2xl font-serif font-bold title-font mb-4 text-[#781F19] tracking-widest">PROJECT STAGES</h1>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="lg:w-1/3 sm:w-1/2 p-10">
          <Image  alt="gallery" width="600" height="360" src="/image17.png" />
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-10">
          <Image  alt="gallery" width="600" height="360" src="/image18.png" />
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-10">
          <Image  alt="gallery" width="600" height="360" src="/image19.png" />
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-10">
          <Image  alt="gallery" width="600" height="360" src="/image20.png" />
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-10">
          <Image  alt="gallery" width="600" height="360" src="/image21.png" />
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-10">
          <Image  alt="gallery" width="600" height="360" src="/image22.png" />
        </div>
      </div>
    </div>
  </section>
    );
};
export default ProjectStages;