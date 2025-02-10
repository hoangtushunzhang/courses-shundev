"use client";

import { useEffect } from "react";
import About from "./About/About";
import ClientReview from "./ClientReview/ClientReview";
import Feature from "./Feature/Feature";
import Hero from "./Hero/Hero";
import Header from "./Navbar/Header";
import Pricing from "./Pricing/Pricing";
import Services from "./Services/Services";
import Team from "./Team/Team";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);
  return (
    <div>
      <div className="sticky top-0 w-full z-50">
        <Header />
      </div>
      <Hero />
      <About />
      <Feature />
      <Services />
      <ClientReview />
      <Team />
      <Pricing />
    </div>
  );
};

export default Home;
