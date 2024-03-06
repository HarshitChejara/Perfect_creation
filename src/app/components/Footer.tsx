"use client";

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Footer()
{
    return(
        <React.Fragment>
        <footer className="text-white body-font bg-[#855439]">
        <div className="flex flex-col text-center w-full">
            <h1 className="sm:text-5xl text-2xl mt-8 font-serif font-medium title-font tracking-widest">LETS CHANGE YOUR OWN HOME <br/>INTERIOR DESIGN NOW</h1>
        </div>
        <div className="container px-5 py-24 sm:px-14 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center">
                <h1 className="text-2xl font-bold">CONTACT US</h1>
            </a>
            <p className="mt-5 text-sm"><FontAwesomeIcon icon={faLocationDot} className="w-4 h-4"/> &nbsp;Lumbung Hidup East Java</p>
            <p className="mt-3 text-sm"><FontAwesomeIcon icon={faEnvelope} className="w-4 h-4"/> Hello@Homco.com</p>
            <form action="#">
              <div className="items-center border-b-4 border-white mx-auto mb-3 mt-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div className="relative w-full">
                      <input className="block p-3 text-white w-full text-sm bg-white bg-opacity-30 border border-white dark:bg-white-700 placeholder-white dark:text-white" placeholder="Email Address" type="email" id="email" required/>
                  </div>
                  <div>
                      <button type="submit" className="py-3 px-3 w-full text-sm font-medium text-center text-white border cursor-pointer bg-primary-700 border-primary-600 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"><FontAwesomeIcon icon={faArrowRight} className="w-4 h-4"/></button>
                  </div>
              </div>
            </form>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-5 justify-center sm:justify-start">
                <a href="https://facebook.com" target="_blank">
                    <FontAwesomeIcon icon={faSquareFacebook} className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" className="ml-3">
                    <FontAwesomeIcon icon={faSquareTwitter} className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" className="ml-3">
                    <FontAwesomeIcon icon={faSquareInstagram} className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" className="ml-3">
                    <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                </a>
            </span>
            </div>
            <div className="flex-grow flex flex-wrap md:pl-44 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font tracking-widest text-2xl font-bold mb-3">NAVIGATION</h2>
                <nav className="list-none mb-10">
                <li>
                    <a href="/"><FontAwesomeIcon icon={faAngleRight} className="w-4 h-4"/> Homepage</a>
                </li>
                <li>
                    <a href="#"><FontAwesomeIcon icon={faAngleRight} className="w-4 h-4"/> About US</a>
                </li>
                <li>
                    <a href="project"><FontAwesomeIcon icon={faAngleRight} className="w-4 h-4"/> Our Projects</a>
                </li>
                </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-2xl mb-3"> &nbsp; </h2>
                <nav className="list-none mb-10">
                <li>
                    <a href="project_detail"><FontAwesomeIcon icon={faAngleRight} className="w-4 h-4"/> Project Details</a>
                </li>
                <li>
                    <a href="#"><FontAwesomeIcon icon={faAngleRight} className="w-4 h-4"/> Careers</a>
                </li>
                </nav>
            </div>
            </div>
        </div>
        <div className="">
            <div className="border-t border-white container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-sm text-center sm:text-left">ALLRIGHT RESERVED -
                <a href="#" rel="noopener noreferrer" className="ml-1" target="_blank">HOMCO INTERIOR</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a className="text-sm">DISCLAIMER</a>
                <a className="ml-16 text-sm">PRIVACY POLICY</a>
                <a className="ml-16 text-sm">TERM OF USE</a>
            </span>
            </div>
        </div>
        </footer>
        </React.Fragment>
    );
}