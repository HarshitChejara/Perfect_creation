"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const HomeDesign = () => {
  return (
      <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 sm:px-20 sm:py-32 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
          <h6 className="text-[#C17777] text-sm font-bold mb-5">PERFECT PARTNER</h6>
          <h1 className="title-font sm:text-4xl text-3xl font-bold text-[#781F19] font-serif tracking-widest">We have priority for can create dream home design</h1>
          <p className="py-12 leading-relaxed text-black font-serif">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <div className="flex justify-center sm:mb-52">
            <Link href="project/project_detail"><button className="inline-flex text-white bg-[#89643F] border-0 mb-5 py-4 px-6 focus:outline-none hover:bg-[#89643F]-600 rounded text-sm font-serif">PORTFOLIO</button></Link>
          </div>
        </div>
        <div className="md:w-1/2 w-1/2 container mx-auto mb-28 mt-32">
        <div className="image-container relative">
          <Image className="object-cover absolute top-0 right-0 z-10 rounded-lg mt-10" alt="hero1" width="500" height="300" src="/image15.png"/>
          <Image className="object-cover absolute inset-auto sm:top-1/2 sm:left-1/2 translate-y-[-50%] translate-x-[-50%] z-0 rounded-lg" alt="hero2" width="500" height="300" src="/image39.png"/>
          <Image className="object-cover absolute bottom-0 right-0 z-10 rounded-lg" alt="hero3" width="500" height="300" src="/image38.png"/>
        </div>
        {/* <Image className="object-cover object-center rounded overflow" alt="hero" width="700" height="300" src="/image15.png"/> */}
        </div>
      </div>
   </section>
    );
};
export default HomeDesign;