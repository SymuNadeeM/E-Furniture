import React from "react";
import Footer from "../components/Footer/Footer";
import Articles from "../components/home/Articles";
import Banner from "../components/home/Banner";
import Feature from "../components/home/Feature";
import Furniture from "../components/home/Furniture";
import Navbar from "../components/home/Navbar";
import NewProducts from "../components/home/NewProducts";
import OurProduct from "../components/home/OurProduct";
import Sidbar from "../components/home/Sidbar";
import SpeOffer from "../components/home/SpeOffer";
import Topbar from "../components/home/Topbar";

const HomePage = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Sidbar />
      <Banner />
      <Feature />
      <Furniture />
      <NewProducts />
      <SpeOffer />
      <OurProduct />
      <Articles />
      <Footer />
    </>
  );
};

export default HomePage;
