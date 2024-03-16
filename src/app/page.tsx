import Image from "next/image";
import React from "react";
import WorkProcedure from "./components/work_procedure";
import ClientFeedback from "./components/client_feedback";
import Carousel from "./components/carousel";
import Choice from "./components/choice";
import HomeDesign from "./components/home_design";



export default function Home() {
  return (
    <React.Fragment>

        <section className="text-gray-600 body-font">
          <div className="container mx-auto relative flex py-24 md:flex-row flex-col items-center">
            <div className="w-5/6 md:w-1/2 sm:pl-12 flex flex-col md:items-start md:text-left mb-auto items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-[#63371E] font-serif tracking-widest py-5 text-left">Build your elegant dream home interior with Perfect Creation</h1>
              <p className="mb-8 leading-relaxed font-serif text-[#63371E] mr-auto">Your interior designing studio</p>
              <div className="flex justify-center py-5 mr-auto">
                <button className="shadow-xl inline-flex text-white bg-[#1E4119] border-0 py-5 px-3 focus:outline-none rounded text-xs font-serif">GET CONSULTATION</button>
              </div>
            </div>
            <div className="lg:flex-grow lg:w-full md:w-1/2">
              <Image className="object-cover object-center w-full" width="600" height="360" alt="hero" src="/Header.png"/>
            </div>
          </div>
        </section>


        <section className="text-gray-600 body-font bg-white">
          <div className="container py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-4xl text-2xl font-serif font-bold title-font mb-4 text-[#63371E] tracking-widest">Build your elegant dream home interior with <br/>perfect creation</h1>
            </div>
            <div className="flex flex-wrap">
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <Image  alt="gallery" width="600" height="360" src="/image1.png" />
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <Image  alt="gallery" width="600" height="360" src="/image2.png" />
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <Image  alt="gallery" width="600" height="360" src="/image3.png" />
              </div>
            </div>
          </div>
        </section>

      <WorkProcedure />
      <Carousel />
      <Choice />
      <HomeDesign />
      <ClientFeedback />
      <Carousel />

    </React.Fragment>
  );
}
