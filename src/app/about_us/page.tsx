import Image from "next/image";
import React from "react";
import Carousel from "../components/carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Choice from "../components/choice";
import HomeDesign from "../components/home_design";


export default function About() {
    return (
    <React.Fragment>

    <section className="text-gray-600 body-font">
        <div className="container mx-auto flex sm:mb-52 md:flex-row flex-col items-center">
            <div className="flex flex-wrap lg:flex-grow lg:w-full relative md:w-1/2 mb-10 md:mb-0">
                <Image className="object-cover object-center w-full block absolute inset-0" width="600" height="360" alt="hero" src="/image32.png"/>
                <div className="text-right ml-auto relative z-10 bg-white sm:mt-12 sm:mb-24">
                  <h2 className="text-2xl sm:text-4xl text-[#781F19] font-serif tracking-widest font-bold title-font mb-2 py-5 px-5">ABOUT US</h2>
                </div>
            </div>
            <div className="container w-5/6 md:w-1/2 lg:pr-28 flex flex-col md:items-start md:text-left items-center text-center p-5">
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
      <div className="flex flex-wrap w-1/2">
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
            <h1 className="sm:text-5xl font-medium font-serif title-font mb-4 text-gray-900">Founder's diary</h1>
        </div>
        <div className="container mx-auto flex px-5 sm:px-12 sm:py-20 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0">
                <Image className="object-cover object-center" width="600" height="360" alt="hero" src="/Image Placeholder.png"/>
            </div>
            <div className="lg:flex-grow md:w-1/2 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <p className="title-font text-lg text-black">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <p className="py-5 leading-relaxed text-black text-lg">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <div className="flex justify-center bottom-0 sm:mt-36">
                    <button className="bottom-0 inline-flex text-white bg-[#89643F] border-0 py-4 px-10 focus:outline-none rounded text-sm">CONTACT</button>
                </div>
            </div>
        </div>
    </section>



<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col w-full mb-20">
      <h1 className="text-sm title-font font-bold mb-4 text-gray-500">OUR TEAM</h1>
      <h1 className="sm:text-5xl text-3xl font-serif font-bold title-font text-[#781F19]">How we work</h1>
    </div>
    <div className="flex flex-wrap -m-4">

      <div className="p-4 lg:w-1/3 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center border hover:bg-[#855439] hover:text-white text-gray-800">
          <img alt="team" className="flex-shrink-0 w-full h-62 object-cover object-center" src="https://dummyimage.com/201x201"/>
          <div className="w-full">
            <h3 className="py-3 text-xs">FOUNDER</h3>
            <h2 className="title-font font-bold text-xl">JOHN LENO</h2>
            <span className="inline-flex py-5">
              <a href="https://facebook.com" target="_blank">
                <FontAwesomeIcon icon={faFacebookF} className="w-7 h-7"/>
              </a>
              <a href="https://twitter.com" target="_blank" className="ml-4">
                <FontAwesomeIcon icon={faTwitter} className="w-7 h-7"/>
              </a>
              <a href="https://linkedin.com" target="_blank" className="ml-4">
                <FontAwesomeIcon icon={faLinkedinIn} className="w-7 h-7"/>
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="p-4 lg:w-1/3 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center border hover:bg-[#855439] hover:text-white text-gray-800">
          <img alt="team" className="flex-shrink-0 w-full h-62 object-cover object-center" src="https://dummyimage.com/201x201"/>
          <div className="w-full">
            <h3 className="py-3 text-xs">FOUNDER</h3>
            <h2 className="title-font font-bold text-xl">JOHN LENO</h2>
            <span className="inline-flex py-5">
              <a href="https://facebook.com" target="_blank">
                <FontAwesomeIcon icon={faFacebookF} className="w-7 h-7"/>
              </a>
              <a href="https://twitter.com" target="_blank" className="ml-4">
                <FontAwesomeIcon icon={faTwitter} className="w-7 h-7"/>
              </a>
              <a href="https://linkedin.com" target="_blank" className="ml-4">
                <FontAwesomeIcon icon={faLinkedinIn} className="w-7 h-7"/>
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="p-4 lg:w-1/3 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center border hover:bg-[#855439] hover:text-white text-gray-800">
          <img alt="team" className="flex-shrink-0 w-full h-62 object-cover object-center" src="https://dummyimage.com/201x201"/>
          <div className="w-full">
            <h3 className="py-3 text-xs">FOUNDER</h3>
            <h2 className="title-font font-bold text-xl">JOHN LENO</h2>
            <span className="inline-flex py-5">
              <a href="https://facebook.com" target="_blank">
                <FontAwesomeIcon icon={faFacebookF} className="w-7 h-7"/>
              </a>
              <a href="https://twitter.com" target="_blank" className="ml-4">
                <FontAwesomeIcon icon={faTwitter} className="w-7 h-7"/>
              </a>
              <a href="https://linkedin.com" target="_blank" className="ml-4">
                <FontAwesomeIcon icon={faLinkedinIn} className="w-7 h-7"/>
              </a>
            </span>
          </div>
        </div>
      </div>

    </div>
    <div className="flex justify-center bottom-0 sm:mt-24">
        <button className="bottom-0 inline-flex text-white bg-[#89643F] border-0 py-4 px-10 focus:outline-none rounded text-sm">CONTACT US!</button>
    </div>
  </div>
</section>


<section className="text-white body-font bg-[#855439]">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="./image36.png"/>
    </div>
    <div className="bg-white p-4 ">
        <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-[#855439]"/>
        <h1 className="text-black font-bold font-serif">Call us now</h1>
        <p className="text-gray-500">(+62) 123456789</p>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold font-serif">"Work hard & great quality is my priority"</h1>
      <p className="mb-8 leading-relaxed text-lg font-serif">"Work hard & great quality is my priority"</p>
    </div>
  </div>
</section>

  <div className="flex justify-center bottom-0 sm:mt-24">
    <button className="bottom-0 inline-flex text-white bg-[#89643F] border-0 py-4 px-10 focus:outline-none rounded text-sm">PORTFOLIO</button>
  </div>


    <HomeDesign />
    <Choice />
    <Carousel />

    </React.Fragment>
  );
}