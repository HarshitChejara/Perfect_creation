import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faPenRuler } from '@fortawesome/free-solid-svg-icons';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  return (
    <React.Fragment>


        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex py-24 md:flex-row flex-col items-center">
            <div className="w-5/6 md:w-1/2 sm:px-12 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-[#63371E] font-serif tracking-widest">Build your elegant dream home interior with Perfect Creation</h1>
              <p className="mb-8 leading-relaxed font-serif text-[#63371E]">Your interior designing studio</p>
              <div className="flex justify-center">
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
            <div className="flex flex-wrap -m-4">
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


        <section className="text-gray-600 body-font">
          <div className="flex flex-col w-full sm:px-40">
            <p className="leading-relaxed text-base font-serif text-[#CC8D69] mb-3">How We Work</p>
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 font-serif text-[#781F19] tracking-widest">Our work procedure</h1>
          </div>

          <div className="container mx-auto flex px-5 sm:px-32 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <div className="border p-12">
              <FontAwesomeIcon icon={faComments} className="w-10 h-10 text-[#855439]" />
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-serif sm:py-7">Client design consulation</h1>
              <p className="mb-8 leading-relaxed font-serif text-black text-lg">Define client requirements, conduct site analysis, and establish goals for the space.</p>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image className="object-cover object-center" alt="hero" width="600" height="360" src="/image4.png"/>
            </div>
          </div>

          <div className="container mx-auto flex px-5 sm:px-32 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <div className="bg-[#855439] border p-12">
              <FontAwesomeIcon icon={faPenRuler} className="w-10 h-10 text-white" />
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white font-serif sm:py-7">Concept development</h1>
              <p className="mb-8 leading-relaxed font-serif text-white text-lg">Create a cohesive design vision, present it through mood boards, and collaborate with the client for feedback.</p>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image className="object-cover object-center" alt="hero" width="600" height="360" src="/image5.png"/>
            </div>
          </div>

          <div className="container mx-auto flex px-5 sm:px-32 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <div className="border p-12">
              <FontAwesomeIcon icon={faHouseChimney} className="w-10 h-10 text-[#855439]" />
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-serif sm:py-7">Space planning</h1>
              <p className="mb-8 leading-relaxed font-serif text-black text-lg">Optimize furniture placement, consider traffic flow, and maintain balance for a functional and visually appealing layout.</p>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image className="object-cover object-center" alt="hero" width="600" height="360" src="/image6.png"/>
            </div>
          </div>

          <div className="container mx-auto flex px-5 sm:px-32 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <div className="bg-[#855439] border p-12">
              <FontAwesomeIcon icon={faPenRuler} className="w-10 h-10 text-white" />
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white font-serif sm:py-7">Material and colour selection</h1>
              <p className="mb-8 leading-relaxed font-serif text-white text-lg">Choose appropriate materials, finalize a complementary color palette, and integrate varied textures for depth.</p>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image className="object-cover object-center" alt="hero" width="600" height="360" src="/image7.png"/>
            </div>
          </div>

          <div className="container mx-auto flex px-5 sm:px-32 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <div className="border p-12">
              <FontAwesomeIcon icon={faHouseChimney} className="w-10 h-10 text-[#855439]" />
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-serif sm:py-7">Implementation and execution</h1>
              <p className="mb-8 leading-relaxed font-serif text-black text-lg">Develop detailed drawings, manage the budget, and supervise the installation for accurate execution of the design concept.</p>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image className="object-cover object-center" alt="hero" width="600" height="360" src="/image8.png"/>
            </div>
          </div>

          <div className="flex sm:px-36 mb-10">
            <button type="button" className="text-white bg-[#272E1C] rounded py-5 px-8 text-sm font-serif">CONTACT US</button>
          </div>
        </section>


        <section className="text-gray-600 body-font bg-white">
          <div className="container py-40 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/5 sm:w-1/2 p-4">
                <Image  alt="gallery" width="600" height="360" src="/image12.png" />
              </div>
              <div className="lg:w-1/5 sm:w-1/2 p-4">
                <Image  alt="gallery" width="600" height="360" src="/image10.png" />
              </div>
              <div className="lg:w-1/5 sm:w-1/2 p-4">
                <Image  alt="gallery" width="600" height="360" src="/image11.png" />
              </div>
              <div className="lg:w-1/5 sm:w-1/2 p-4">
                <Image  alt="gallery" width="600" height="360" src="/image12.png" />
              </div>
              <div className="lg:w-1/5 sm:w-1/2 p-4">
                <Image  alt="gallery" width="600" height="360" src="/image11.png" />
              </div>
            </div>
          </div>
        </section>



        <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 sm:px-20 py-24 md:flex-row flex-col items-center">
          <div className=" md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" width="700" height="360" src="/image14.png"/>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 sm:mb-52 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className=" title-font sm:text-4xl text-3xl mb-4 font-bold text-[#781F19] font-serif tracking-widest">Why choice our interior design services</h1>
            <p className="leading-relaxed font-serif text-black text-xl sm:py-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-gray-700 bg-[#D3DCEB] border-0 py-4 px-6 focus:outline-none hover:bg-gray-200 rounded text-sm font-serif">OUR SERVICES</button>
            </div>
          </div>
        </div>
      </section>


      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 sm:px-20 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-[#781F19] font-serif tracking-widest">We have priority for can create dream home design</h1>
            <p className="py-12 leading-relaxed text-black font-serif">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <div className="flex justify-center sm:mb-52">
              <button className="inline-flex text-white bg-[#89643F] border-0 py-4 px-6 focus:outline-none hover:bg-[#89643F]-600 rounded text-sm font-serif">PORTFOLIO</button>
            </div>
          </div>
          <div className=" md:w-1/2 w-5/6">
            <Image className="object-cover object-center rounded" alt="hero" width="700" height="360" src="/image15.png"/>
          </div>
        </div>
      </section>



      <section className="text-gray-600 body-font">

          <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
            <div className="md:w-1/2 lg:pr-10 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <div className=" p-12">
              <h3 className="font-serif">CLIENTS FEEDBACK</h3>
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 font-serif sm:py-7">Our testimonial from best clients</h1>
              <p className="mb-8 leading-relaxed font-serif text-gray-500 text-lg">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <div className="border p-12">
              <p className="mb-8 leading-relaxed font-serif text-gray-500 text-xl">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium </p>
              <div className="flex rounded-lg border-gray-200 border-opacity-50 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-[#855439] text-indigo-500 flex-shrink-0">
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-sm title-font font-medium mb-1 font-serif">JOHN DE</h2>
                  <p className="leading-relaxed text-base text-xs">ART DIRECTOR</p>
                </div>
              </div>
              </div>
            </div>
          </div>


          <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
            <div className="md:w-1/2 mr-5 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <div className="border p-12">
              <p className="mb-8 leading-relaxed font-serif text-gray-500 text-xl">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium </p>
              <div className="flex rounded-lg border-gray-200 border-opacity-50 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-[#855439] text-indigo-500 flex-shrink-0">
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-sm title-font font-medium mb-1 font-serif">JOHN DE</h2>
                  <p className="leading-relaxed text-base text-xs">ART DIRECTOR</p>
                </div>
              </div>
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <div className="border p-12">
              <p className="mb-8 leading-relaxed font-serif text-gray-500 text-xl">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium </p>
              <div className="flex rounded-lg border-gray-200 border-opacity-50 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-[#855439] text-indigo-500 flex-shrink-0">
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-sm title-font font-medium mb-1 font-serif">JOHN DE</h2>
                  <p className="leading-relaxed text-base text-xs">ART DIRECTOR</p>
                </div>
              </div>
              </div>
            </div>
          </div>

        </section>




        <section className="text-gray-600 body-font bg-white">
          <div className="container py-40 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/5 sm:w-1/2 p-4">
                <Image  alt="gallery" width="600" height="360" src="/image12.png" />
              </div>
              <div className="lg:w-1/5 sm:w-1/2 p-4">
                <Image  alt="gallery" width="600" height="360" src="/image10.png" />
              </div>
              <div className="lg:w-1/5 sm:w-1/2 p-4">
                <Image  alt="gallery" width="600" height="360" src="/image11.png" />
              </div>
              <div className="lg:w-1/5 sm:w-1/2 p-4">
                <Image  alt="gallery" width="600" height="360" src="/image12.png" />
              </div>
              <div className="lg:w-1/5 sm:w-1/2 p-4">
                <Image  alt="gallery" width="600" height="360" src="/image11.png" />
              </div>
            </div>
          </div>
        </section>

    </React.Fragment>  
  );
}
