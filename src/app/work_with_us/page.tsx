import Image from "next/image";
import React from "react";
import Carousel from "../components/carousel";



export default function WorkWithUs() {
    return (
    <React.Fragment>

    <section className="text-gray-600 body-font">
        <div className="container mx-auto flex sm:mb-52 md:flex-row flex-col items-center">
            <div className="flex flex-wrap lg:flex-grow lg:w-full relative md:w-1/2 mb-10 md:mb-0">
                <Image className="object-cover object-center w-full block absolute inset-0" width="600" height="360" alt="hero" src="/image37.png"/>
                <div className="text-right ml-auto relative z-10 bg-white sm:mt-12 sm:mb-24">
                  <h2 className="text-2xl sm:text-4xl text-[#781F19] font-serif tracking-widest font-bold title-font mb-2 py-5 px-5">WHY WORK WITH US</h2>
                </div>
            </div>
            <div className="container w-5/6 md:w-1/2 lg:pr-28 flex flex-col md:items-start md:text-left items-center text-center p-5">
                {/* <h1 className="title-font sm:text-4xl text-3xl font-bold text-[#781F19] font-serif tracking-widest bg-white py-5"></h1> */}
                <p className="py-10 leading-relaxed text-[#781F19] text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div className="flex justify-center">
                    <button className="inline-flex text-white bg-[#89643F] border-0 py-4 px-10 focus:outline-none rounded text-sm">PORTFOLIO</button>
                </div>
            </div>
        </div>
    </section>







<section className="text-gray-600 body-font">
    <div className="flex flex-col text-center w-full sm:py-12"></div>
    <div className="container px-8 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <Image className="object-cover object-center" width="700" height="300" src="/Image Placeholder.png" alt="stats"/>
    </div>
    <div className="flex flex-wrap -mx-4 mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div className="w-full sm:ml-3 mb-6">
        <p className="text-sm font-bold mb-3">FIRST QUESTION ANSWER</p>
        <h1 className="title-font font-bold text-3xl mb-5 font-serif text-gray-900 tracking-widest">QUESTION ANSWER <br/>TRENDING WEEKLY</h1>
        <div className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
      </div>
    </div>
  </div>

  <div className="container px-8 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -mx-4 mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div className="w-full sm:p-4 px-4 mb-6">
        <p className="text-sm font-bold mb-3">SECOND QUESTION ANSWER</p>
        <h1 className="title-font font-bold text-3xl mb-5 font-serif text-gray-900 tracking-widest">USUALLY ASKED <br/>QUESTION CLIENTS</h1>
        <div className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
      </div>
    </div>
    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <Image className="object-cover object-center ml-auto" width="700" height="300" src="/image5.png" alt="stats"/>
    </div>
  </div>

  <div className="container px-8 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <Image className="object-cover object-center" width="700" height="300" src="/Image Placeholder.png" alt="stats"/>
    </div>
    <div className="flex flex-wrap -mx-4 mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div className="w-full sm:ml-3 mb-6">
        <p className="text-sm font-bold mb-3">FIRST QUESTION ANSWER</p>
        <h1 className="title-font font-bold text-3xl mb-5 font-serif text-gray-900 tracking-widest">QUESTION ANSWER <br/>TRENDING WEEKLY</h1>
        <div className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
      </div>
    </div>
  </div>

  <div className="container px-8 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -mx-4 mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div className="w-full sm:p-4 px-4 mb-6">
        <p className="text-sm font-bold mb-3">SECOND QUESTION ANSWER</p>
        <h1 className="title-font font-bold text-3xl mb-5 font-serif text-gray-900 tracking-widest">USUALLY ASKED <br/>QUESTION CLIENTS</h1>
        <div className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
      </div>
    </div>
    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <Image className="object-cover object-center ml-auto" width="700" height="300" src="/Image Placeholder.png" alt="stats"/>
    </div>
  </div>
</section>




    <div className="flex flex-col text-center w-full sm:mt-14">
        <h1 className="sm:text-5xl font-medium font-serif title-font text-gray-900">TITLE</h1>
    </div>
    <Carousel />

    </React.Fragment>
  );
}