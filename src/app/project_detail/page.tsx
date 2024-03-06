import Image from "next/image";
import React from "react";


export default function ProjectDetail() {
    return (
    <React.Fragment>

    <section className="text-gray-600 body-font">
        <div className="container mx-auto flex py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full w-5/6 md:w-1/2 mb-10 md:mb-0">
                <Image className="object-cover object-center rounded" width="600" height="360" alt="hero" src="/image23.png"/>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pr-28 md:pl-10 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl font-bold text-[#781F19] font-serif tracking-widest bg-white py-5 px-5">PROJECT NAME</h1>
                <p className="py-10 leading-relaxed text-[#781F19] text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div className="flex justify-center">
                    <button className="inline-flex text-white bg-[#89643F] border-0 py-4 px-10 focus:outline-none rounded text-sm">PORTFOLIO</button>
                </div>
            </div>
        </div>
    </section>



    <div className="px-32">
      <div className="flex flex-wrap w-full bg-gray-100 py-12 relative mb-4">
        <Image alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" width="600" height="360" src="/image23.png"/>
        <div className="text-right ml-auto relative z-10 bg-white mb-24">
          <h2 className="text-2xl text-gray-900 font-medium title-font mb-2 py-5 px-5">Shooting Stars dvdvdvdvsds</h2>
        </div>
      </div>
    </div>


    <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 sm:px-32 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <Image className="object-cover object-center rounded" width="600" height="360" alt="hero" src="/image16.png"/>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl font-bold text-[#781F19] font-serif tracking-widest">PROJECT-1 FOR A SMALL STARTUPS INTERIOR</h1>
            <p className="py-10 leading-relaxed text-black text-lg">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            <div className="flex justify-center">
                <button className="inline-flex text-white bg-[#89643F] border-0 py-4 px-10 focus:outline-none rounded text-sm">PORTFOLIO</button>
            </div>
            </div>
        </div>
    </section>


        <section className="text-gray-600 body-font bg-white">
          <div className="container py-24 sm:px-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-4xl text-2xl font-serif font-bold title-font mb-4 text-[#781F19] tracking-widest">PROJECT STAGES</h1>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/3 sm:w-1/2 p-10">
                <Image  alt="gallery" width="600" height="360" src="/image17.png" />
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-10">
                <Image  alt="gallery" width="600" height="360" src="/image18.png" />
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-10">
                <Image  alt="gallery" width="600" height="360" src="/image19.png" />
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-10">
                <Image  alt="gallery" width="600" height="360" src="/image20.png" />
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-10">
                <Image  alt="gallery" width="600" height="360" src="/image21.png" />
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-10">
                <Image  alt="gallery" width="600" height="360" src="/image22.png" />
              </div>
            </div>
          </div>
        </section>
    </React.Fragment>  
  );
}