import { Button, Input, Typography } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const [product, setProduct] = useState("");
  const {prodId} = useParams();
  // console.log(prodId);
  const [productNameLabel, setProductNameLabel] = useState(true);
  const [productPriceLabel, setProductPriceLabel] = useState(true);
  const [productCategoryLabel, setProductCategoryLabel] = useState(true);
  const [productImageLabel, setProductImageLabel] = useState(true);
  const [productDescriptionLabel, setProductDescriptionLabel] = useState(true);


  // Navigate Hoock
  const navigate = useNavigate()

  

  // Get data product function
  const getProduct = ()=>{
    axios({
      method: "get",
      url: `http://localhost:6005/products/${prodId}` 
    }).then(data=>setProduct(data.data))
  }

  // Check Labels Function
  const checkLabels = ()=>{
    setProductNameLabel(true)
    setProductPriceLabel(true)
    setProductCategoryLabel(true)
    setProductImageLabel(true)
    setProductDescriptionLabel(true)
  }

  // Handle form function
  const handleEdit = (e)=>{
    e.preventDefault()
    if(product.title == ""){
      setProductNameLabel(false)
    }else if(product.price == ""){
      checkLabels();
      setProductPriceLabel(false)
    }else if(product.category == ""){
      checkLabels();
      setProductCategoryLabel(false)
    }else if(product.image == ""){
      checkLabels();
      setProductImageLabel(false)
    }else if(product.description == ""){
      checkLabels();
      setProductDescriptionLabel(false)
    }else {
      axios({
        method: "put",
        url: `http://localhost:6005/products/${prodId}`,
        data: {
          title: product.title,
          price: product.price,
          description: product.description,
          category: product.category,
          image: product.image,
          items: product.items
        },
      })
      setTimeout(() => {
        navigate(-1)
      }, 1500);
    }
  }


  useEffect(()=>{
    getProduct();
  },[])



  return (
    <div className="flex justify-center items-center mt-5">
      <form
        onSubmit={(e) => handleEdit(e)}
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
                productNameLabel ? "-mb-3 w-[35%]" : "-mb-3 w-[35%] text-red-700"
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
              value={product && product.title}
              onChange={(e) =>
                setProduct({ ...product, title: e.target.value })
              }
            />
          </div>

          {/* Product Price */}
          <div className="name flex">
            <Typography
              variant="h6"
              color="blue-gray"
              // className="-mb-3 w-[30%]"
              className={
                productPriceLabel ? "-mb-3 w-[35%]" : "-mb-3 w-[35%] text-red-700"
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
              value={product && product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
            />
          </div>

          {/* Category */}
          <div className="name flex">
            <Typography
              variant="h6"
              color="blue-gray"
              // className="-mb-3 w-[30%]"
              className={
                productCategoryLabel ? "-mb-3 w-[35%]" : "-mb-3 w-[35%] text-red-700"
              }
            >
              Product  Category:
            </Typography>
            <Input
              // size="xs"
              placeholder="username"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 h-[30px] bg-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={product && product.category}
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
            />
          </div>

          {/* Image */}
          <div className="name flex">
            <Typography
              variant="h6"
              color="blue-gray"
              // className="-mb-3 w-[30%]"
              className={
                productImageLabel ? "-mb-3 w-[35%]" : "-mb-3 w-[35%] text-red-700"
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
                value={product && product.image}
                onChange={(e) =>
                  setProduct({ ...product, image: e.target.value })
                }
              />
            </div>
          </div>

          {/* Description */}
          <div className="name flex">
            <Typography
              variant="h6"
              color="blue-gray"
              className={
                productDescriptionLabel ? "-mb-3 w-[35%]" : "-mb-3 w-[35%] text-red-700"
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
              value={product && product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
            />
          </div>
        </div>
        <Button type="submit" color="green" className="mt-6 w-fit">
          Edit
        </Button>
      </form>
    </div>
  );
};

export default EditProduct;
