import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import About from "./About";
import Cards from "./Cards";
import "./home.css";
import { Link } from "react-router-dom";
import Footer from './../../Components/Footer';


const Home = () => {

  return (
    <div className="main w-full	">
      {/* sec-1 */}
      <div className=" w-full h-screen bg-homeimg bg-left lg:bg-cover lg:bg-homeimg">
        <div className="flex flex-col justify-center w-full h-full px-7">
          <span className="text-red-700	mb-1">SUMMER COLLECTION</span>
          <h1 className="mb-1 text-2xl">Fall - Winter</h1>
          <h1 className="mb-1 text-2xl">Collections 2023</h1>
          <p className="lg:w-[50%] mb-1">
            A specialist label creating luxury essentials. Ethically crafted
            with an unwavering commitment to exceptional quality.
          </p>
          <div className="arrow flex items-center w-[10em] mt-2 bg-red-700 justify-center text-white p-[1em]">
            <Link to={"/shop"}><span>Shop Now</span></Link>
            <FaLongArrowAltRight className="ml-1" />
          </div>
        </div>
      </div>
      <About/>
      <Cards/>
      <Footer/>
    
    </div>
  );
};

export default Home;
