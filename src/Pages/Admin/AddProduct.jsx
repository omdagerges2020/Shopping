import React, { useState } from "react";
import { Button, Input, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  // Inputs
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productItems, setProductItems] = useState("");
  // Labels
  const [productNameLabel, setProductNameLabel] = useState(true);
  const [productPriceLabel, setProductPriceLabel] = useState(true);
  const [productCategoryLabel, setProductCategoryLabel] = useState(true);
  const [productImageLabel, setProductImageLabel] = useState(true);
  const [productDescriptionLabel, setProductDescriptionLabel] = useState(true);
  const [productItemsLabel, setProductItemsLabel] = useState(true);

  // Navigate Hoock
  const navigate = useNavigate();

  // Check Labels Function
  const checkLabels = () => {
    setProductNameLabel(true);
    setProductPriceLabel(true);
    setProductCategoryLabel(true);
    setProductDescriptionLabel(true);
    setProductImageLabel(true);
    setProductItemsLabel(true);
  };

  // Adding Function
  const handleAdd = (e) => {
    e.preventDefault();
    if (productName == "") {
      setProductNameLabel(false);
    } else if (productPrice == "") {
      checkLabels();
      setProductPriceLabel(false);
    } else if (productCategory == "") {
      checkLabels();
      setProductCategoryLabel(false);
    } else if (productDescription == "") {
      checkLabels();
      setProductDescriptionLabel(false);
    } else if (productImage == "") {
      checkLabels();
      setProductImageLabel(false);
    } else if (productItems == "") {
      checkLabels();
      setProductItemsLabel(false);
    } else {
      axios({
        method: "post",
        url: "http://localhost:6005/products",
        data: {
          title: productName,
          price: productPrice,
          description: productDescription,
          category: productCategory,
          image: productImage,
          items: 1,
        },
      });
      setTimeout(() => {
        navigate(-1);
      }, 1500);
    }
  };



  return (
    <div className="flex justify-center items-center mt-5">
      <form
        onSubmit={(e) => handleAdd(e)}
        className="mt-4 mb-2 w-[60%] max-w-screen-lg items-center p-5 flex flex-col ms-5 bg-gray-600"
      >
        {/* Product Name */}
        <div className="mb-1 flex flex-col gap-6 w-full">
          <div className="name flex">
            <Typography
              variant="h6"
              color="blue-gray"
              // className="-mb-3 w-[30%]"
              className={
                productNameLabel
                  ? "-mb-3 w-[35%]"
                  : "-mb-3 w-[35%] text-red-700"
              }
            >
              Product Name:
            </Typography>
            <Input
              // size="md"
              placeholder="first name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 h-[30px] bg-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          {/* Product Price */}
          <div className="name flex">
            <Typography
              variant="h6"
              color="blue-gray"
              // className="-mb-3 w-[30%]"
              className={
                productPriceLabel
                  ? "-mb-3 w-[35%]"
                  : "-mb-3 w-[35%] text-red-700"
              }
            >
              Product Price:
            </Typography>
            <Input
              // size="xs"
              placeholder="last name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 h-[30px] bg-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </div>

          {/* Category */}
          <div className="name flex">
            <Typography
              variant="h6"
              color="blue-gray"
              // className="-mb-3 w-[30%]"
              className={
                productCategoryLabel
                  ? "-mb-3 w-[35%]"
                  : "-mb-3 w-[35%] text-red-700"
              }
            >
              Product Category:
            </Typography>
            <Input
              // size="xs"
              placeholder="username"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 h-[30px] bg-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
            />
          </div>

          {/* Image */}
          <div className="name flex">
            <Typography
              variant="h6"
              color="blue-gray"
              // className="-mb-3 w-[30%]"
              className={
                productImageLabel
                  ? "-mb-3 w-[35%]"
                  : "-mb-3 w-[35%] text-red-700"
              }
            >
              Product Image:
            </Typography>
            <div className="special flex flex-col w-full">
              <Input
                // size="xs"
                placeholder="email"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 h-[30px] bg-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={productImage}
                onChange={(e) => setProductImage(e.target.value)}
              />
            </div>
          </div>

          {/* Description */}
          <div className="name flex">
            <Typography
              variant="h6"
              color="blue-gray"
              className={
                productDescriptionLabel
                  ? "-mb-3 w-[35%]"
                  : "-mb-3 w-[35%] text-red-700"
              }
            >
              Product Description:
            </Typography>
            <Input
              // size="xs"
              placeholder="password"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 h-[30px] bg-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </div>

          {/* Items */}
          <div className="name flex">
            <Typography
              variant="h6"
              color="blue-gray"
              className={
                productItemsLabel
                  ? "-mb-3 w-[35%]"
                  : "-mb-3 w-[35%] text-red-700"
              }
            >
              Product Items:
            </Typography>
            <Input
              // size="xs"
              placeholder="password"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 h-[30px] bg-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={productItems}
              onChange={(e) => setProductItems(e.target.value)}
            />
          </div>
        </div>
        <Button type="submit" color="green" className="mt-6 w-fit">
          Adding New Product
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
