"use client";

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
// import Image from "next/image";

const Faq = () => {
  return (
    <section className="text-black body-font">
    <div className="py-24 px-24">
    <h1 className="text-[#781F19] font-bold font-serif p-3 text-3xl">FAQ</h1>

    <div className="flex justify-center">
        <div className=" w-full rounded-3xl ">
            <input type="checkbox" id="input1" className="absolute peer opacity-0"/>
            <div className="flex items-center flex-wrap mt-auto w-full">
              <label htmlFor="input1" className="flex items-center p-3 font-medium inline-flex font-serif text-xl tracking-widest">Frequently asked question number-1</label>
              <span className="text-black mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3" >
              <label htmlFor="input1"><FontAwesomeIcon icon={faChevronDown} className="w-5 h-5 ml-auto inline-flex"/></label>
              </span>
            </div>
            <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
                <p className="p-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
        </div>
    </div>

    <div className="flex justify-center sm:mt-5">
        <div className=" w-full rounded-3xl ">
            <input type="checkbox" id="input2" className="absolute peer opacity-0"/>
            <div className="flex items-center flex-wrap mt-auto w-full">
              <label htmlFor="input2" className="flex items-center p-3 font-medium inline-flex font-serif text-xl tracking-widest">Frequently asked question number-2</label>
              <span className="text-black mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3" >
              <label htmlFor="input2"><FontAwesomeIcon icon={faChevronDown} className="w-5 h-5 ml-auto inline-flex"/></label>
              </span>
            </div>
            <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
                <p className="p-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
        </div>
    </div>

    <div className="flex justify-center sm:mt-5">
        <div className=" w-full rounded-3xl ">
            <input type="checkbox" id="input3" className="absolute peer opacity-0"/>
            <div className="flex items-center flex-wrap mt-auto w-full">
              <label htmlFor="input3" className="flex items-center p-3 font-medium inline-flex font-serif text-xl tracking-widest">Frequently asked question number-3</label>
              <span className="text-black mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3" >
              <label htmlFor="input3"><FontAwesomeIcon icon={faChevronDown} className="w-5 h-5 ml-auto inline-flex"/></label>
              </span>
            </div>
            <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
                <p className="p-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
        </div>
    </div>

    <div className="flex justify-center sm:mt-5">
        <div className=" w-full rounded-3xl ">
            <input type="checkbox" id="input4" className="absolute peer opacity-0"/>
            <div className="flex items-center flex-wrap mt-auto w-full">
              <label htmlFor="input4" className="flex items-center p-3 font-medium inline-flex font-serif text-xl tracking-widest">Frequently asked question number-4</label>
              <span className="text-black mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3" >
              <label htmlFor="input4"><FontAwesomeIcon icon={faChevronDown} className="w-5 h-5 ml-auto inline-flex"/></label>
              </span>
            </div>
            <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
                <p className="p-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
        </div>
    </div>

    <div className="flex justify-center sm:mt-5">
        <div className=" w-full rounded-3xl ">
            <input type="checkbox" id="input5" className="absolute peer opacity-0"/>
            <div className="flex items-center flex-wrap mt-auto w-full">
              <label htmlFor="input5" className="flex items-center p-3 font-medium inline-flex font-serif text-xl tracking-widest">Frequently asked question number-5</label>
              <span className="text-black mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3" >
              <label htmlFor="input5"><FontAwesomeIcon icon={faChevronDown} className="w-5 h-5 ml-auto inline-flex"/></label>
              </span>
            </div>
            <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
                <p className="p-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
        </div>
    </div>

    </div>
  </section>  
  );
};
export default Faq;