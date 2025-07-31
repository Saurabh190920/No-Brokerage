import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import SocialBar from "../components/SocialBar/SocialBar";
import BackToTop from "../components/BackToTop/BackToTop";
// This will hold the homepage content
const Homepage = () => {
  return (
    <>
      <Navbar />
      <SocialBar/>
      <main>
        <Hero />
      </main>
      <Footer />
      <BackToTop/>
    </>
  );
};

export default Homepage;
