import React from "react";
import img1 from "../../images/banner/banner-1.jpg";
import img2 from "../../images/banner/banner-2.jpg";
import img3 from "../../images/banner/banner-3.jpg";


const About = () => {
  return (
    <div className=" mt-4 ">
      <div className="right flex justify-evenly">
        <div className="box flex flex-col mt-[10em]">
          <div className="image">
            <img src={img2} style={{ width: "250px", height: "200px" }} />
          </div>
          <div className="text justify-center flex flex-col">
            <h3 className="text-xl">Accessories</h3>
            <span className="text-sm underline decoration-1">shop now</span>
          </div>
        </div>

        <div className="box flex flex-col">
          <div className="p-1 flex">
            <div className="text justify-center flex flex-col">
              <h3 className="text-xl">Clothing</h3>
              <h3 className="text-xl">Collections 2023</h3>
              <span className="text-sm underline decoration-1">shop now</span>
            </div>
            <div className="image">
              <img src={img1} style={{ width: "250px", height: "200px" }} />
            </div>
          </div>

          <div className="p-1 flex">
            <div className="text justify-center flex flex-col">
              <h3 className="text-xl">Shoes Spring</h3>
              <h3 className="text-xl"> 2023</h3>
              <span className="text-sm underline decoration-1">shop now</span>
            </div>
            <div className="image">
              <img src={img3} style={{ width: "250px", height: "200px" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-aboutimg bg-cover bg-top text-white text-center w-full">
        <p>Free shipping, 30-day return or refund guarante</p>
      </div>
    </div>
  );
};

export default About;

//  <div className="text flex flex-col justify-center">
// <h3 className="text-lg	">Clothing</h3>
// <h3 className="text-lg	">Collections 2023</h3>
// <span className="underline decoration-1 text-sm">shop now</span>
// </div>
// <div className="image">
// <img src={img1} style={{ width: "250px", height: "200px" }} />
//  </div>
