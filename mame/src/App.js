import React, { useRef } from "react";
import Features from "./components/Features";
import FeaturesSecond from "./components/FeaturesSecond";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import HeroSection from "./components/heroSection";
import NewItems from "./components/NewItems";
import NewsLetters from "./components/NewsLetters";
import Products from "./components/Products";
import Testimonial from "./components/Testimonial";
import Stats from "./components/Stats";
import Location from "./components/Location"; // Import the Location component
import AnimatedText from "./components/AnimatedText";

function App() {
  const heroRef = useRef(null);
  // const heroSection = useRef(null);
  const featuresRef = useRef(null);
  const productsRef = useRef(null);
  const testimonialRef = useRef(null);
  const statsRef = useRef(null);
  const featuresSecondRef = useRef(null);
  const newItemsRef = useRef(null);
  const locationRef = useRef(null); // Add a ref for Location component
  const animatedTextRef = useRef(null);

  return (
    <div className="w-full mx-auto bg-black text-white" >
      <Header
        heroRef={heroRef}
        // heroSectionRef={heroSection}
        featuresRef={featuresRef}
        productsRef={productsRef}
        testimonialRef={testimonialRef}
        statsRef={statsRef}
        featuresSecondRef={featuresSecondRef}
        newItemsRef={newItemsRef}
        locationRef={locationRef} // Pass the ref to Header
        animatedTextRef={animatedTextRef}
      />
      <Hero ref={heroRef} />
      {/* <HeroSection ref={heroSectionRef} /> */}
      <Stats ref={statsRef} />
      <Features ref={featuresRef} />
      <NewItems ref={newItemsRef} />
      <FeaturesSecond ref={featuresSecondRef} />
      <Products ref={productsRef} />
      <Location ref={locationRef} /> {/* Add the Location component here */}
      <Testimonial ref={testimonialRef} />
      <AnimatedText ref={animatedTextRef} />
      <NewsLetters />
      <Footer />
    </div>
  );
}
export default App;
