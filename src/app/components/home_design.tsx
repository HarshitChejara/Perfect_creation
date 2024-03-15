"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const HomeDesign = () => {
  return (
      // <section className="text-gray-600 body-font">
      //   <div className="container mx-auto flex px-5 sm:px-20 py-24 md:flex-row flex-col items-center">
      //     <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      //       <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-[#781F19] font-serif tracking-widest">We have priority for can create dream home design</h1>
      //       <p className="py-12 leading-relaxed text-black font-serif">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      //       <div className="flex justify-center sm:mb-52">
      //         <button className="inline-flex text-white bg-[#89643F] border-0 py-4 px-6 focus:outline-none hover:bg-[#89643F]-600 rounded text-sm font-serif">PORTFOLIO</button>
      //       </div>
      //     </div>
      //     <div className=" md:w-1/2 w-5/6">
      //       <Image className="object-cover object-center rounded" alt="hero" width="700" height="360" src="/image15.png"/>
      //     </div>
      //   </div>
      // </section>

      <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 sm:px-20 sm:py-32 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
          <h6 className="text-[#C17777] text-sm font-bold mb-5">PERFECT PARTNER</h6>
          <h1 className="title-font sm:text-4xl text-3xl font-bold text-[#781F19] font-serif tracking-widest">We have priority for can create dream home design</h1>
          <p className="py-12 leading-relaxed text-black font-serif">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <div className="flex justify-center sm:mb-52">
            <Link href="project/project_detail"><button className="inline-flex text-white bg-[#89643F] border-0 py-4 px-6 focus:outline-none hover:bg-[#89643F]-600 rounded text-sm font-serif">PORTFOLIO</button></Link>
          </div>
        </div>
        <div className="md:w-1/2 w-5/6 container mx-auto">

        <div className="image-container relative">
          <Image className="z-10 ml-auto object-right-top rounded" alt="hero" width="500" height="300" src="/image38.png"/>
          <Image className="z-20 object-left inset-auto absolute relative rounded overflow" alt="hero" width="500" height="300" src="/image39.png"/>
          <Image className="z-10 ml-auto object-right-bottom rounded" alt="hero" width="500" height="300" src="/image15.png"/>
        </div>
          
          {/* <Image className="object-cover object-center rounded overflow" alt="hero" width="700" height="300" src="/image15.png"/> */}
        </div>
      </div>
   </section>
    );
};
export default HomeDesign;