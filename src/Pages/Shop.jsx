import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Footer from "../Components/Footer";



const Shop = ({ products, handleCart }) => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 mt-6 container mx-auto mb-3">
        {products.map((product, index) => (
          <Card key={index} className="w-[15em] min-h-[80%]">
            <CardHeader floated={false}>
              <img src={product.image} alt="profile" />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h6" color="blue-gray" className="mb-2">
                {product.title}
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                {product.category}
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                <Button onClick={() => handleCart(product)}>
                  Add To Cart
                </Button>
              </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 p-0">
              Price: ${product.price}
            </CardFooter>
          </Card>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Shop;
