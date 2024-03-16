import Image from "next/image";
import React from "react";
import Carousel from "../components/carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Choice from "../components/choice";
import HomeDesign from "../components/home_design";
import Team from "../components/team";


export default function About() {
    return (
    <React.Fragment>

    <section className="text-gray-600 body-font">
        <div className="container mx-auto flex sm:mb-52 md:flex-row flex-col items-center">
            <div className="flex flex-wrap lg:flex-grow lg:w-full relative md:w-1/2 mb-10 md:mb-0">
                <Image className="object-cover object-center w-full block absolute inset-0" width="600" height="360" alt="hero" src="/image32.png"/>
                <div className="text-right ml-auto relative z-10 bg-white sm:mt-12 sm:mb-24">
                  <h2 className="text-2xl sm:text-4xl text-[#781F19] font-serif tracking-widest font-bold title-font sm:mb-2 sm:py-5 px-5">ABOUT US</h2>
                </div>
            </div>
            <div className="container sm:w-5/6 md:w-1/2 lg:pr-28 flex flex-col md:items-start md:text-left items-center text-center p-5">
                {/* <h1 className="title-font sm:text-4xl text-3xl font-bold text-[#781F19] font-serif tracking-widest bg-white py-5"></h1> */}
                <p className="py-10 leading-relaxed text-[#781F19] text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div className="flex justify-center bottom-0 mt-auto">
                    <button className="bottom-0 inline-flex text-white bg-[#89643F] border-0 py-4 px-10 focus:outline-none rounded text-sm">PORTFOLIO</button>
                </div>
            </div>
        </div>
    </section>





<section className="text-gray-600 body-font">
  <div className="container px-12 py-48 mx-auto flex flex-wrap">
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap sm:w-1/2">
        <div className="md:p-2 p-1 w-full">
          <Image alt="gallery" className="w-full h-full object-cover object-center block" width="600" height="360" src="/image33.png"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image alt="gallery" className="w-full object-cover h-full object-center block" width="600" height="360" src="/image34.png"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image alt="gallery" className="w-full object-cover h-full object-center block" width="600" height="360" src="/image35.png"/>
        </div>
      </div>
        <div className="lg:flex-grow md:w-1/2 md:pl-5 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl font-bold text-[#781F19] font-serif tracking-widest">We are perfect team for home interior decoration</h1>
            <p className="py-10 leading-relaxed text-black text-lg tracking-widest">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>
            <div className="flex justify-center bottom-0 mt-auto mb-2">
                <button className="bottom-0 inline-flex text-white bg-[#89643F] border-0 py-4 px-10 focus:outline-none rounded text-sm">GET CONSULTATION</button>
            </div>
        </div>
    </div>
  </div>
</section>







    <section className="text-gray-600 body-font">
        <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-5xl text-4xl font-medium font-serif title-font mb-4 text-gray-900">Founder's diary</h1>
        </div>
        <div className="container mx-auto flex px-5 sm:px-12 sm:py-20 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 sm:w-5/6 md:mb-0 mb-5">
                <Image className="object-cover object-center" width="600" height="360" alt="hero" src="/Image Placeholder.png"/>
            </div>
            <div className="lg:flex-grow md:w-1/2 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <p className="title-font text-xl text-black">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <p className="py-5 leading-relaxed text-black text-xl">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <div className="flex justify-center bottom-0 sm:mt-32">
                    <button className="bottom-0 inline-flex text-white bg-[#89643F] border-0 py-4 px-10 focus:outline-none rounded text-sm">CONTACT</button>
                </div>
            </div>
        </div>
    </section>



<Team />


<section className="text-white body-font bg-[#855439]">
  <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
    <div className="md:w-1/2 sm:w-5/6 container mx-auto">
      <div className="image-container relative">
        <div className="bg-white p-7 sm:w-72 absolute inset-auto top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] z-10">
            <FontAwesomeIcon icon={faPhone} className="sm:w-8 sm:h-8 sm:mb-3 text-[#855439]"/>
            <h1 className="text-black font-bold font-serif mb-2">Call us now</h1>
            <p className="text-gray-500 text-xs">(+62) 123456789</p>
        </div>
        <Image className="object-cover absolute bottom-0 left-0" alt="hero3" width="400" height="300" src="/image36.png"/>
      </div>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pr-20 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-5xl text-3xl sm:mt-1 mt-16 font-bold font-serif tracking-widest">"Work hard & great quality is my priority"</h1>
      <p className=" leading-relaxed text-lg font-serif">"Work hard & great quality is my priority"</p>
    </div>
  </div>
</section>


  <div className="flex justify-center bottom-0 py-24">
    <button className="bottom-0 inline-flex text-white bg-[#89643F] border-0 py-4 px-10 focus:outline-none rounded text-sm">PORTFOLIO</button>
  </div>


    <HomeDesign />
    <Choice />
    <Carousel />

    </React.Fragment>
  );
}