import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";


const Cards = () => {
  return (
    <div className="cards flex flex-wrap justify-center	items-center px-7 gap-4 mt-4 mb-4">
      <Card className="w-[100%]  md:w-[40%] lg:w-[20%] xl:w-[20%]">
        <CardHeader floated={false} className="h-80">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt="profile-picture"
          />
        </CardHeader>
        <CardBody className="text-start">
          <Typography variant="h6" color="blue-gray" className="mb-2">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            men's clothing
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-start gap-7 pt-2 ">
          Price: $200
        </CardFooter>
      </Card>

      <Card className="w-[100%]  md:w-[40%] lg:w-[20%] xl:w-[20%]">
        <CardHeader floated={false} className="h-80">
          <img
            src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
            alt="profile-picture"
          />
        </CardHeader>
        <CardBody className="text-start">
          <Typography variant="h6" color="blue-gray" className="mb-2">
            BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            women's clothing
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-start gap-7 pt-2">
           Price: $290
        </CardFooter>
      </Card>

      <Card className="w-[100%]  md:w-[40%] lg:w-[20%] xl:w-[20%]">
        <CardHeader floated={false} className="h-80">
          <img
            src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
            alt="profile-picture"
          />
        </CardHeader>
        <CardBody className="text-start">
          <Typography variant="h6" color="blue-gray" className="mb-2">
            Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            women's clothing
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-stat gap-7 pt-2">
           Price: $300
        </CardFooter>
      </Card>

      <Card className="w-[100%]  md:w-[40%] lg:w-[20%] xl:w-[20%]">
        <CardHeader floated={false} className="h-80">
          <img
            src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
            alt="profile-picture"
          />
        </CardHeader>
        <CardBody className="text-start">
          <Typography variant="h6" color="blue-gray" className="mb-2">
            Rain Jacket Women Windbreaker Striped Climbing Raincoats
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            women's clothing
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-start gap-7 pt-2">
           Price: $320
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cards;
