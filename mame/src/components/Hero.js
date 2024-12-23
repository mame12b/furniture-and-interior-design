//import  React  from "react";
import { hero } from "../data";
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import AnimatedText from './AnimatedText'; // Correct import path
import { heroData } from '../data'; // Assuming heroData is exported from data.js
//import { heroData } from '../data'; 



const Hero = React.forwardRef((props, ref) => {
  const { title } = hero;
  
   const [animation, setAnimation] = useState('fadeIn'); 
    useEffect(() => {
  const intervalId = setInterval(() => {
    setAnimation(prevAnimation => 
      prevAnimation === 'fadeIn' ? 'slideInLeft' : 'fadeIn' 
    );
  }, 2000); // Change animation every 2 seconds
  return () => clearInterval(intervalId); 
}, []);
  //
  
  return (
    // <section className="w-full h-[850px] bg-hero bg-right bg-cover bg-no-repeat text-white pt-[225px] pb-[254px]  relative mb-12 lg:bg-cover lg:mb-28">
    <section ref={ref} className="w-full h-[850px] bg-hero bg-right text-white pt-[225px] pb-[254px]  relative mb-12">
      <div className="container mx-auto text-center">
        {/* title */}

   


        <div>
      <AnimatedText animationType={animation}>
        {heroData.title}
      </AnimatedText> 
    </div>
        
        <h1 className="text-2xl mx-auto font-semibold mb-[30px] lg:text-[64px] lg:leading-tight font-primary">
          {title}
        </h1>
        {/* Sub-Title */}
        <h2 className="mb-[30px] max-w-[672px] mx-auto lg:mb-[65px] lg:text-xl opacity-80">
          {/* {subtitle} */}
        </h2>
        {/* button */}
        {/* <button className="bg-[var(--btn-light)] hover:bg-[var(--btn-light)] backdrop-blur-md p-2 px-9 mb-[159px] rounded-md transition lg:px-[80px] lg:py-[16px] lg:mb-[194px] lg:text-xl">
          {buttonText}
        </button> */}
        {/* Stats */}
      </div>
    </section>
  );
});



export default Hero;
