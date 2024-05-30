import React, { useMemo, useState } from "react";
import "./cart.css";
import { MdPayment } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import emptyPic from "../images/empty-shopping.jpg";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

const Cart = ({ cartProducts, increment, decrement, deleteItem }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  useMemo(() => {
    let updatedTotalAmount =
      cartProducts.length > 0 &&
      cartProducts
        .map((item) => item.items * item.price)
        .reduce((x, y) => x + y)
        .toFixed(2);
    console.log("memo");
    setTotalAmount(updatedTotalAmount);
  }, [cartProducts]);

  return (
    <div className="mt-7 w-full h-screen">
      <div className="main-cart w-full flex xl:flex-row lg:flex-row md:flex-row flex-col  justify-evenly mb-5">
        {/* product details */}
        <div className="product-details xl:w-[70%] lg:w-[70%] md:w-[60%] w-[100%]  items-center flex flex-col">
          {cartProducts.length == 0 ? (
            <div className="mb-3">
              <div className="image flex justify-center h-[80%]">
                {" "}
                <img src={emptyPic} alt="" style={{ width: "50%" }} />
              </div>
              <div className="btn flex justify-center">
                {" "}
                <Button color="green" className="text-center">
                  <Link to="/shop">SHOP NOW</Link>
                </Button>
              </div>
            </div>
          ) : (
            cartProducts.map((item, index) => (
              <div
                key={index}
                className="card border-b-[3px] border-gray-500 flex items-center mb-5 justify-evenly w-full  text-black"
              >
                {/* Image */}
                <div className="image pb-2 ">
                  <img
                    src={item.image}
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>

                {/* prodcut details and price and quantity */}
                <div className="title flex justify-evenly w-full items-center">
                  {/* title && price */}
                  <div className="flex flex-col justify-center w-[30%]">
                    <h6>{item.title}</h6>
                    <span>${item.price}</span>
                  </div>

                  {/* increment & decrement & totla & delete */}
                  <div className="operations flex justify-between items-center w-[60%]">
                    <button
                      className="p-2"
                      onClick={() => decrement(item)}
                    >
                      -
                    </button>
                    <span>{item.items}</span>
                    <button
                      className="p-2"
                      onClick={() => increment(item)}
                    >
                      +
                    </button>
                    <span>${(item.items * item.price).toFixed(2)}</span>
                    <button
                      onClick={() => deleteItem(item)}
                    >
                      <AiFillDelete className="text-gray-800" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* cart total */}
        <div className="total xl:w-[15%] lg:w-[15%] md:w-[30%] w-[100%] h-[20%] p-3">
          <h6>CART TOTAL</h6>
          <div className="price flex justify-between">
            <span>
              ${" "}
              {/* {cartProducts.length > 0
                ? cartProducts
                    .map((item) => item.items * item.price)
                    .reduce((x, y) => x + y)
                    .toFixed(2)
                : "0"} */}
              {totalAmount}
            </span>
            <MdPayment />
          </div>
          <button className="text-center text-white bg-gray-700 w-full">
            Pay
          </button>
        </div>
      </div>
      <Footer/>

    </div>
  );
};

export default Cart;
