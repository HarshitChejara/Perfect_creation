import Image from "next/image";
import React from "react";
import Carousel from "../components/carousel";
import QuestionAnswer from "../components/question_answer";



export default function WorkWithUs() {
    return (
    <React.Fragment>

    <section className="text-gray-600 body-font">
        <div className="container mx-auto flex sm:mb-52 md:flex-row flex-col items-center">
            <div className="flex flex-wrap lg:flex-grow lg:w-full relative md:w-1/2 mb-10 md:mb-0">
                <Image className="object-cover object-center w-full block absolute inset-0" width="600" height="360" alt="hero" src="/image37.png"/>
                <div className="text-right ml-auto relative z-10 bg-white sm:mt-12 sm:mb-24">
                  <h2 className="text-2xl sm:text-4xl text-[#781F19] font-serif tracking-widest font-bold title-font mb-2 sm:py-5 px-5">WHY WORK WITH US</h2>
                </div>
            </div>
            <div className="container sm:w-5/6 md:w-1/2 lg:pr-28 flex flex-col md:items-start md:text-left items-center text-center p-5">
                {/* <h1 className="title-font sm:text-4xl text-3xl font-bold text-[#781F19] font-serif tracking-widest bg-white py-5"></h1> */}
                <p className="py-10 leading-relaxed text-[#781F19] text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div className="flex justify-center">
                    <button className="inline-flex text-white bg-[#89643F] border-0 py-4 px-10 focus:outline-none rounded text-sm">PORTFOLIO</button>
                </div>
            </div>
        </div>
    </section>

    <QuestionAnswer />

    <div className="flex flex-col text-center w-full sm:mt-16">
        <h1 className="sm:text-5xl text-4xl font-medium font-serif title-font text-gray-900">TITLE</h1>
    </div>
    <Carousel />

    </React.Fragment>
  );
}