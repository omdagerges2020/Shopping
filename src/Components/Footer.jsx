import React from "react";
import footerlogo from "../images/footer-logo.png";
import paymentimg from "../images/payment.png";
import img1 from "../images/clients/client-1.png";
import img3 from "../images/clients/client-3.png";
import img4 from "../images/clients/client-4.png";
import img5 from "../images/clients/client-5.png";
import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <div className="main-footer bg-black">
      <div className=" flex flex-wrap justify-evenly pt-4 px-7">

        <div className="sec-1 flex flex-col items-start xl:w-[20%] lg:w-[20%] md:w-[40%] w-[40%]">
          <img src={footerlogo} alt="" />
          <p className="text-white mt-3 text-sm	">
            the customer is at the heart of our unique business model, which
            includes design
          </p>
          <img className="mt-3" src={paymentimg} alt="" />
        </div>

        <div className="sec-2 xl:w-[20%] lg:w-[20%] md:w-[40%] w-[40%]">
          <h1 className="text-white">SHOPPING</h1>
          <Typography
            as="li"
            variant="small"
            color="white"
            className="p-1 font-medium"
          >
            <a
              href="#"
              className="flex items-center hover:text-blue-500 transition-colors"
            >
              Home
            </a>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="white"
            className="p-1 font-medium"
          >
            <a
              href="#"
              className="flex items-center hover:text-blue-500 transition-colors"
            >
              Shop
            </a>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="white"
            className="p-1 font-medium"
          >
            <a
              href="#"
              className="flex items-center hover:text-blue-500 transition-colors"
            >
              About us
            </a>
          </Typography>
          <span>wewewq</span>
        </div>

        <div className="sec-3 text-white xl:w-[20%] lg:w-[20%] md:w-[40%] w-[40%]">
          <h1>PARTNER</h1>
          <div className="top-icons flex justify-cnter">
            <img src={img1} alt="" style={{width: "40px", height: "40px"}} className="me-3"/>
            <img src={img3} alt="" style={{width: "40px", height: "40px"}}/>
          </div>
          <div className="buttom-icons flex mt-3">
            <img src={img4} alt="" style={{width: "40px", height: "40px"}} className="me-3"/>
            <img src={img5} alt="" style={{width: "40px", height: "40px"}}/>
          </div>
        </div>

        <div className="sec-4 text-white xl:w-[20%] lg:w-[20%] md:w-[40%] w-[40%]">
          <h1>NEWLETTER</h1>
          <p className="text-sm text-gray-500">Be the first to know about new arrivals, look books, sales & promos!</p>
          <div>
          <input type="email" placeholder="Your Email" className="bg-black border mt-3"/>
          </div>
          
        </div>
      </div>

      <div className="end text-center">
        <span className="text-gray-500 ">copyright@2023 & 2020</span>
      </div>
      

    </div>
  );
};

export default Footer;
