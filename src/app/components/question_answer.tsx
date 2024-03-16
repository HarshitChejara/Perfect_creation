"use client";
import Image from "next/image";
import React from "react";


const QuestionAnswer = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="flex flex-col text-center w-full sm:py-12"></div>
    <div className="container px-8 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-1/2 sm:w-1/3 w-full overflow-hidden mt-6 sm:mt-0">
      <Image className="object-cover object-center" width="700" height="300" src="/Image Placeholder.png" alt="stats"/>
    </div>
    <div className="flex flex-wrap mt-3 mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div className="w-full sm:ml-3 sm:mb-6">
        <p className="text-sm font-bold mb-3">FIRST QUESTION ANSWER</p>
        <h1 className="title-font font-bold sm:text-4xl text-2xl mb-5 font-serif text-gray-900 tracking-widest">QUESTION ANSWER <br/>TRENDING WEEKLY</h1>
        <div className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
      </div>
    </div>
  </div>

  <div className="container px-8 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -mx-4 mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div className="w-full sm:p-4 px-4 sm:mb-6">
        <p className="text-sm font-bold mb-3">SECOND QUESTION ANSWER</p>
        <h1 className="title-font font-bold sm:text-4xl text-2xl mb-5 font-serif text-gray-900 tracking-widest">USUALLY ASKED <br/>QUESTION CLIENTS</h1>
        <div className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
      </div>
    </div>
    <div className="lg:w-1/2 sm:w-1/3 w-full overflow-hidden mt-6 sm:mt-0">
      <Image className="object-cover object-center ml-auto" width="700" height="300" src="/image5.png" alt="stats"/>
    </div>
  </div>

  <div className="container px-8 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-1/2 sm:w-1/3 w-full overflow-hidden mt-6 sm:mt-0">
      <Image className="object-cover object-center" width="700" height="300" src="/Image Placeholder.png" alt="stats"/>
    </div>
    <div className="flex flex-wrap mt-3 mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div className="w-full sm:ml-3 sm:mb-6">
        <p className="text-sm font-bold mb-3">FIRST QUESTION ANSWER</p>
        <h1 className="title-font font-bold sm:text-4xl text-2xl mb-5 font-serif text-gray-900 tracking-widest">QUESTION ANSWER <br/>TRENDING WEEKLY</h1>
        <div className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
      </div>
    </div>
  </div>

  <div className="container px-8 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -mx-4 mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div className="w-full sm:p-4 px-4 sm:mb-6">
        <p className="text-sm font-bold mb-3">SECOND QUESTION ANSWER</p>
        <h1 className="title-font font-bold sm:text-4xl text-2xl mb-5 font-serif text-gray-900 tracking-widest">USUALLY ASKED <br/>QUESTION CLIENTS</h1>
        <div className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
      </div>
    </div>
    <div className="lg:w-1/2 sm:w-1/3 w-full overflow-hidden mt-6 sm:mt-0">
      <Image className="object-cover object-center ml-auto" width="700" height="300" src="/Image Placeholder.png" alt="stats"/>
    </div>
  </div>
</section>
    );
};
export default QuestionAnswer;