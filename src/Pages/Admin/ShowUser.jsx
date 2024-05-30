import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Avatar } from "@material-tailwind/react";

const ShowUser = () => {
  const [user, setUser] = useState(null);
  const { prodId } = useParams();

  const navigate = useNavigate();

  // Get User Data Function
  const getUserData = async () => {
    try {
      const data = await axios({
        method: "get",
        url: `http://localhost:6005/users/${prodId}`,
      });
      setUser(data.data);
    } catch {
      navigate("/admin");
    }
  };

  // useEffect
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="h-screen w-full">
      <div className="flex">
        <div className="side-menue w-fit bg-teal-900 px-[2em] hidden xl:flex xl:flex-col lg:flex lg:flex-col gap-[8em] justify-center font-bold text-xl text-white">
          <Link to={`/admin`}>DashBoard</Link>
          <Link to={`/admin/adminusers`}>Users</Link>
          <Link to={`/admin/adminproducts`}>Products</Link>
        </div>
        <div className="w-full h-screen flex justify-center mt-[4em]">
          <Card className="w-96 h-fit	pb-2 bg-gray-600">
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
              size="xxl"
              className="mx-auto"
            />

            <CardBody className="text-center p-0">
              <Typography
                color="blue-gray"
                className="mb-2 font-medium text-white"
              >
                UserName: {user && user.userName}
              </Typography>
              <Typography
                color="blue-gray"
                className="mb-2 font-medium text-white"
              >
                First Name: {user && user.firstName}
              </Typography>
              <Typography
                color="blue-gray"
                className="mb-2 font-medium text-white"
              >
                Last Name: {user && user.lastName}
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium text-white"
                textGradient
              >
                Email: {user && user.email}
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium text-white"
                textGradient
              >
                Gender: {user && user.gender}
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium text-white"
                textGradient
              >
                City: {user && user.city}
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium text-white"
                textGradient
              >
                Role: {user && user.role}
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium text-white"
                textGradient
              >
                Phone Number: {user && user.phoneNumber}
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium text-white"
                textGradient
              >
                Password: {user && user.password}
              </Typography>
            </CardBody>
            <CardFooter className="flex justify-center  p-0">
              <Button className="bg-green-500 capitalize	">
                <Link to={-1}>Back To Users</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ShowUser;
