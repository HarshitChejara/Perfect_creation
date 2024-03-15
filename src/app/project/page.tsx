import Image from "next/image";
import React from "react";
import Link from "next/link";
import Faq from "../components/faq";
import HomeDesign from "../components/home_design";


export default function ProjectDetail() {
    return (
    <React.Fragment>

    <section className="text-gray-600 body-font">
        <div className="container mx-auto flex sm:mb-52 md:flex-row flex-col items-center">
            <div className="flex flex-wrap lg:flex-grow lg:w-full relative md:w-1/2 mb-10 md:mb-0">
                <Image className="object-cover object-center w-full block absolute inset-0" width="600" height="360" alt="hero" src="/image24.png"/>
                <div className="text-right ml-auto relative z-10 bg-white sm:mt-12 sm:mb-24">
                  <h2 className="text-2xl sm:text-4xl text-[#781F19] font-serif tracking-widest font-bold title-font mb-2 py-5 px-5">PROJECTS</h2>
                </div>
            </div>
            <div className="container w-5/6 md:w-1/2 lg:pr-28 flex flex-col md:items-start md:text-left items-center text-center p-5">
                {/* <h1 className="title-font sm:text-4xl text-3xl font-bold text-[#781F19] font-serif tracking-widest bg-white py-5"></h1> */}
                <p className="py-10 leading-relaxed text-[#781F19] text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div className="flex justify-center">
                    <Link href="project/project_detail"><button className="inline-flex text-white bg-[#89643F] border-0 py-4 px-10 focus:outline-none rounded text-sm">PORTFOLIO</button></Link>
                </div>
            </div>
        </div>
    </section>


     <HomeDesign />


      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container sm:px-24 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">

            <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
              <div className="flex flex-wrap w-full bg-gray-100 sm:py-44 sm:px-10 px-6 relative">
                <Image alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0" width="600" height="360" src="/image25.png"/>
                <div className="relative z-10 w-full ">
                  <h2 className="absolute inset-x-0 top-0 text-2xl text-[#781F19] font-bold title-font sm:mt-24 bg-white py-5 px-5 tracking-widest">Pre made home consultation</h2>
                </div>
              </div>
              <div className="h-full p-14 rounded-lg flex flex-col relative overflow-hidden">
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#0F0E0E] text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Office Meeting
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#0F0E0E] text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Working Time Call
                </p>
                <p className="flex items-center text-gray-600 mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#0F0E0E] text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Come to Place
                </p>
                <div>
                <button className="mt-auto text-white bg-[#89643F] border-0 py-4 px-8 text-xs font-medium rounded">CONTACT US</button>
                </div>
              </div>
            </div>


            <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
              <div className="flex flex-wrap w-full bg-gray-100 sm:py-44 sm:px-10 px-6 relative">
                <Image alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0" width="600" height="360" src="/image26.png"/>
                <div className="relative z-10 w-full ">
                  <h2 className="absolute inset-x-0 top-0 text-2xl text-[#781F19] font-bold title-font sm:mt-24 bg-white py-5 px-5 tracking-widest">Interior design repair &nbsp;</h2>
                </div>
              </div>
              <div className="h-full p-14 rounded-lg flex flex-col relative overflow-hidden">
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#0F0E0E] text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Office Meeting
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#0F0E0E] text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Working Time Call
                </p>
                <p className="flex items-center text-gray-600 mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#0F0E0E] text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Come to Place
                </p>
                <div>
                <button className="mt-auto text-white bg-[#89643F] border-0 py-4 px-8 text-xs font-medium rounded">CONTACT US</button>
                </div> 
              </div>
            </div>

            <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
              <div className="flex flex-wrap w-full bg-gray-100 sm:py-44 sm:px-10 px-6 relative">
                <Image alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0" width="600" height="360" src="/image27.png"/>
                <div className="relative z-10 w-full ">
                  <h2 className="absolute inset-x-0 top-0 text-2xl text-[#781F19] font-bold title-font sm:mt-24 bg-white py-5 px-5 tracking-widest">Experience frame design</h2>
                </div>
              </div>
              <div className="h-full p-14 rounded-lg flex flex-col relative overflow-hidden">
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#0F0E0E] text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Office Meeting
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#0F0E0E] text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Working Time Call
                </p>
                <p className="flex items-center text-gray-600 mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#0F0E0E] text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Come to Place
                </p>
                <div>
                <button className="mt-auto text-white bg-[#89643F] border-0 py-4 px-8 text-xs font-medium rounded">CONTACT US</button>
                </div> 
              </div>
            </div>

          </div>


          <div className="flex flex-wrap -m-4 sm:mt-32">

            <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
              <div className="flex flex-wrap w-full bg-gray-100 sm:py-44 sm:px-10 px-6 relative">
                <Image alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0" width="600" height="360" src="/image28.png"/>
                <div className="relative z-10 w-full ">
                  <h2 className="absolute inset-x-0 top-0 text-2xl text-[#781F19] font-bold title-font sm:mt-24 bg-white py-5 px-5 tracking-widest font-serif">Full house decoration</h2>
                </div>
              </div>
              <div className="h-full p-14 rounded-lg flex flex-col relative overflow-hidden">
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#0F0E0E] text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Office Meeting
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#0F0E0E] text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Working Time Call
                </p>
                <p className="flex items-center text-gray-600 mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#0F0E0E] text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Come to Place
                </p>
                <div>
                <button className="mt-auto text-white bg-[#89643F] border-0 py-4 px-8 text-xs font-medium rounded">CONTACT US</button>
                </div>
              </div>
            </div>


            <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
              <div className="flex flex-wrap w-full bg-gray-100 sm:py-44 sm:px-10 px-6 relative">
                <Image alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0" width="600" height="360" src="/image29.png"/>
                <div className="relative z-10 w-full ">
                  <h2 className="absolute inset-x-0 top-0 text-2xl text-[#781F19] font-bold title-font sm:mt-24 bg-white py-5 px-5 tracking-widest font-serif">Pre building home design</h2>
                </div>
              </div>
              <div className="h-full p-14 rounded-lg flex flex-col relative overflow-hidden">
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#0F0E0E] text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Office Meeting
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#0F0E0E] text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Working Time Call
                </p>
                <p className="flex items-center text-gray-600 mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#0F0E0E] text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Come to Place
                </p>
                <div>
                <button className="mt-auto text-white bg-[#89643F] border-0 py-4 px-8 text-xs font-medium rounded">CONTACT US</button>
                </div> 
              </div>
            </div>

            <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
              <div className="flex flex-wrap w-full bg-gray-100 sm:py-44 sm:px-10 px-6 relative">
                <Image alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0" width="600" height="360" src="/image30.png"/>
                <div className="relative z-10 w-full ">
                  <h2 className="absolute inset-x-0 top-0 text-2xl text-[#781F19] font-bold title-font sm:mt-24 bg-white py-5 px-5 tracking-widest font-serif">Full package decoration</h2>
                </div>
              </div>
              <div className="h-full p-14 rounded-lg flex flex-col relative overflow-hidden">
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#0F0E0E] text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Office Meeting
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#0F0E0E] text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Working Time Call
                </p>
                <p className="flex items-center text-gray-600 mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#0F0E0E] text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Come to Place
                </p>
                <div>
                <button className="mt-auto text-white bg-[#89643F] border-0 py-4 px-8 text-xs font-medium rounded">CONTACT US</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Faq />

    </React.Fragment>
  );
}