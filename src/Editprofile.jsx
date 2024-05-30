import React, { useEffect, useState } from "react";
import { Card, Typography, Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from './Components/Footer';



const Editprofile = () => {
  const [userInfo, setUserInfo] = useState("");
  // Labels state
  const [firstnameLabel, setfirstnameLabel] = useState(true);
  const [lastnameLabel, setlastnameLabel] = useState(true);
  const [usernameLabel, setusernameLabel] = useState(true);
  const [emailnameLabel, setemailnameLabel] = useState(true);
  const [passLabel, setpassLabel] = useState(true);
  const [imageLabel, setimageLabel] = useState(true);
  const [phoneLabel, setphoneLabel] = useState(true);
  const [cityLabel, setcityLabel] = useState(true);
  const [genderLabel, setgenderLabel] = useState(true);

  // Navigate Hoock
  const navigate = useNavigate();

  // Check Labels Function
  const checkLabels = ()=>{
    setfirstnameLabel(true);
    setlastnameLabel(true);
    setusernameLabel(true);
    setemailnameLabel(true);
    setpassLabel(true);
    setimageLabel(true);
    setphoneLabel(true);
    setcityLabel(true);
    setgenderLabel(true);
  }

  const getUserData = async () => {
    const data = await axios({
      method: "get",
      url: `http://localhost:6005/users/${localStorage.userId}`,
    });
    setUserInfo(data.data);
  };

  // Edit Profile Function
  const handleEdit = (e) => {
    e.preventDefault();
    if(userInfo.firstName == ""){
      setfirstnameLabel(false)
    }else if(userInfo.lastName == ""){
      checkLabels();
      setlastnameLabel(false)
    }else if(userInfo.userName == ""){
      checkLabels();
      setusernameLabel(false)
    }else if(userInfo.email == ""){
      checkLabels()
      setemailnameLabel(false)
    }else if(userInfo.password == ""){
      checkLabels();
      setpassLabel(false)
    }else if(userInfo.image == ""){
      checkLabels();
      setimageLabel(false)
    }else if(userInfo.phoneNumber == ""){
      checkLabels();
      setphoneLabel(false)
    }else if(userInfo.city == ""){
      checkLabels();
      setcityLabel(false)
    }else if(userInfo.gender == ""){
      checkLabels();
      setgenderLabel(false)
    }else {
      axios({
        method: "put",
        url: `http://localhost:6004/users/${localStorage.userId}`,
        data: userInfo,
      });
      setTimeout(() => {
        localStorage.userEmail = userInfo.email;
      }, 1000);
        navigate("/profile");
    }
  };


  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="main-edit w-full">
      <div className="user-info flex h-[100%]">
        <Card className=" rounded-none	border border-white border-t-0	border-b-0 border-l-0		 w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-gray-800">
          <div className="mb-2 p-4">
            <Typography variant="h5" color="white" className="text-center">
              {userInfo && userInfo.userName}
            </Typography>
            <div className="image ">
              <img src={localStorage.userImage} alt="profile" />
            </div>
          </div>
        </Card>
        <form onSubmit={(e)=>handleEdit(e)} className="mt-4 mb-2 w-[60%] max-w-screen-lg  flex flex-col ms-5">
          <div className="mb-1 flex flex-col gap-6 ">
            <div className="name flex">
              <Typography
                variant="h6"
                color="blue-gray"
                className={
                  firstnameLabel
                    ? "-mb-3 w-[35%]"
                    : "-mb-3 w-[35%] text-red-700"
                }
              >
                First Name:
              </Typography>
              <Input
                // size="md"
                placeholder="first name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 h-[30px] bg-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={userInfo && userInfo.firstName}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, firstName: e.target.value })
                }
              />
            </div>
            <div className="name flex">
              <Typography
                variant="h6"
                color="blue-gray"
                className={
                  lastnameLabel ? "-mb-3 w-[35%]" : "-mb-3 w-[35%] text-red-700"
                }
              >
                Last Name:
              </Typography>
              <Input
                // size="xs"
                placeholder="last name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 h-[30px] bg-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={userInfo && userInfo.lastName}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, lastName: e.target.value })
                }
              />
            </div>
            <div className="name flex">
              <Typography
                variant="h6"
                color="blue-gray"
                className={
                  usernameLabel ? "-mb-3 w-[35%]" : "-mb-3 w-[35%] text-red-700"
                }
              >
                User Name:
              </Typography>
              <Input
                // size="xs"
                placeholder="username"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 h-[30px] bg-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={userInfo && userInfo.userName}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, userName: e.target.value })
                }
              />
            </div>
            <div className="name flex">
              <Typography
                variant="h6"
                color="blue-gray"
                className={
                  emailnameLabel
                    ? "-mb-3 w-[35%]"
                    : "-mb-3 w-[35%] text-red-700"
                }
              >
                Email:
              </Typography>
              <div className="special flex flex-col w-full">
                <Input
                  // size="xs"
                  placeholder="email"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 h-[30px] bg-white"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  value={userInfo && userInfo.email}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, email: e.target.value })
                  }
                />
                <span className="text-red-700">
                  {emailnameLabel ? "" : "This Email Already signup before"}
                </span>
              </div>
            </div>
            <div className="name flex">
              <Typography
                variant="h6"
                color="blue-gray"
                className={
                  passLabel ? "-mb-3 w-[35%]" : "-mb-3 w-[35%] text-red-700"
                }
              >
                Password:
              </Typography>
              <Input
                // size="xs"
                placeholder="password"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 h-[30px] bg-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={userInfo && userInfo.password}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, password: e.target.value })
                }
              />
            </div>
            <div className="name flex">
              <Typography
                variant="h6"
                color="blue-gray"
                className={
                  imageLabel ? "-mb-3 w-[35%]" : "-mb-3 w-[35%] text-red-700"
                }
              >
                Image:
              </Typography>
              <Input
                // size="xs"
                placeholder="image"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 h-[30px] bg-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={userInfo && userInfo.image}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, image: e.target.value })
                }
              />
            </div>
            <div className="name flex">
              <Typography
                variant="h6"
                color="blue-gray"
                className={
                  phoneLabel ? "-mb-3 w-[35%]" : "-mb-3 w-[35%] text-red-700"
                }
              >
                M.Phone:
              </Typography>
              <Input
                // size="xs"
                placeholder="phone number"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 h-[30px] bg-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={userInfo && userInfo.phoneNumber}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, phoneNumber: e.target.value })
                }
              />
            </div>
            <div className="last flex">
              <div className="box">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className={
                    cityLabel ? "mb-3 w-[35%]" : "mb-3 w-[35%] text-red-700"
                  }
                >
                  City:
                </Typography>
                <Input
                  // size="xs"
                  placeholder="enter city"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 h-[30px] bg-white max-w-44		"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  value={userInfo && userInfo.city}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, city: e.target.value })
                  }
                />
              </div>
              <div className="box">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className={
                    genderLabel ? "mb-3 w-[35%]" : "mb-3 w-[35%] text-red-700"
                  }
                >
                  Gender:
                </Typography>
                <select
                  value={userInfo && userInfo.gender}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, gender: e.target.value })
                  }
                  className="h-[30px] w-[100%] rounded"
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
          </div>
          <Button
            type="submit"
            className="mt-6"
            fullWidth
          >
            Edit
          </Button>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Editprofile;
