import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Avatar } from "@material-tailwind/react";
import "./showproduct.css";

const ShowProduct = () => {
  const [product, setProduct] = useState("");
  const { prodId } = useParams();
  // console.log(prodId);

  // Get Prduct Data Function
  const getProdObj = async () => {
    const data = await axios({
      method: "get",
      url: `http://localhost:6005/products/${prodId}`,
    });
    setProduct(data.data);
  };

  // UseEffect (get product data)
  useEffect(() => {
    getProdObj();
  }, []);

  return (
    <div>
      <div className="flex w-full h-screen">
        <div className="side-menue w-fit flex-none bg-teal-900 px-[2em] hidden xl:flex xl:flex-col lg:flex lg:flex-col gap-[8em] justify-center font-bold text-xl text-white">
          <Link to={`/admin`}>DashBoard</Link>
          <Link to={`/admin/adminusers`}>Users</Link>
          <Link to={`/admin/adminproducts`}>Products</Link>
        </div>
        <div className="prod-card flex justify-center flex-1 mt-[6em]">
          <Card className="w-96 h-fit	pb-2 bg-gray-600 px-2">
            <Avatar
              src={product?.image}
              alt="avatar"
              size="xxl"
              className="mx-auto product-img mt-1"
            />
            <CardBody className="text-center p-0">
              <Typography className="mb-2 text-md text-white">
                Name: {product && product.title}
              </Typography>
              <Typography className="mb-2 text-md text-white">
                Description: {product && product.description}
              </Typography>
              <Typography className="mb-2 text-md text-white">
                Category: {product && product.category}
              </Typography>
              <Typography className="mb-2 text-md text-white">
                Price: {product && product.price}
              </Typography>
            </CardBody>
            <CardFooter className="flex justify-center  p-0">
              <Button className="capitalize bg-green-500">
                <Link to={-1}>Back To Products</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
