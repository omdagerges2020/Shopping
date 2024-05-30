import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import { Button, Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);

  const navigate = useNavigate();

  // get user data function
  const getUserInfo = async () => {
    const data = await axios({
      method: "get",
      url: "http://localhost:6005/users",
    });
    // console.log(data.data);
    const loginObj = data.data.filter((obj) => {
      return obj.email == localStorage.userEmail;
    });
    // console.log(loginObj);
    setUserInfo(loginObj);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="main w-full h-screen">
      {userInfo &&
        userInfo.map((userinfo, index) => (
          <div
            key={index}
            className="main-profile bg-gray-400 w-full flex lg:gap-[5em] xl:gap-[5em] gap-[2em] border-0 px-3"
          >
            <div className="avatar xl:block lg:block md:block w-fit  rounded-none	border border-white border-t-0	border-b-0 border-l-0	 p-4 bg-gray-400">
              <div className="w-24">
                <img className="rounded-full" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="px-4">
              <div className="items-center">
                <div className="user-info mt-5 grid xl:grid-cols-2 lg:grid-cols-2 md:rid-cols-2 grid-cols-1 gap-4">
                  <div className="box flex justify-center mb-[2em]">
                    <h6>UserName: </h6>
                    <span className="text-blue-500 font-bold">
                      {userinfo.userName}
                    </span>
                  </div>

                  <div className="box flex justify-center mb-[2em]">
                    <h6>FirstName: </h6>
                    <span className="text-blue-500 font-bold">
                      {userinfo.firstName}
                    </span>
                  </div>

                  <div className="box flex justify-center mb-[2em]">
                    <h6>LastName: </h6>
                    <span className="text-blue-500 font-bold">
                      {userinfo.lastName}
                    </span>
                  </div>

                  <div className="box flex justify-center mb-[2em]">
                    <h6>Email: </h6>
                    <span className="text-blue-500 font-bold">
                      {userinfo.email}
                    </span>
                  </div>

                  <div className="box flex justify-center mb-[2em]">
                    <h6>Password: </h6>
                    <span className="text-blue-500 font-bold">
                      {userinfo.password}
                    </span>
                  </div>

                  <div className="box flex justify-center mb-[2em]">
                    <h6>Gender: </h6>
                    <span className="text-blue-500 font-bold">
                      {userinfo.gender}
                    </span>
                  </div>

                  <div className="box flex justify-center mb-[2em]">
                    <h6>City: </h6>
                    <span className="text-blue-500 font-bold">
                      {userinfo.city}
                    </span>
                  </div>

                  <div className="box flex justify-center mb-[2em]">
                    <h6>PhoneNumber: </h6>
                    <span className="text-blue-500 font-bold">
                      {userinfo.phoneNumber}
                    </span>
                  </div>

                  <div className="box flex justify-center mb-[2em]">
                    <h6>Role: </h6>
                    <span className="text-blue-500 font-bold">
                      {userinfo.role}
                    </span>
                  </div>
                </div>
                <div className="edit-btn w-full text-center">
                  <Button
                    onClick={() => navigate("/editprofile")}
                    color="green"
                    className="mb-4"
                  >
                    Edit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      <Footer />
    </div>
  );
};

export default Profile;
