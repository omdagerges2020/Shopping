import { Button, Input, Typography } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "@material-tailwind/react";

const EditUser = () => {
  const [user, setUser] = useState("");

  // Labels
  const[firstnameLabel, setfirstnameLabel] = useState(true);
  const[lastnameLabel, setlastnameLabel] = useState(true);
  const[usernameLabel, setusernameLabel] = useState(true);
  const[emailLabel, setemailLabel] = useState(true);
  const[passwordLabel, setpasswordLabel] = useState(true);
  const[imageLabel, setimageLabel] = useState(true);
  const[cityLabel, setcityLabel] = useState(true);
  const[phoneLabel, setphoneLabel] = useState(true);
  const[genderLabel, setgenderLabel] = useState(true);
  const[roleLabel, setroleLabel] = useState(true);

  // Checl Labels Function
  const checkLabels = ()=>{
    setfirstnameLabel(true);
    setlastnameLabel(true);
    setusernameLabel(true);
    setemailLabel(true);
    setpasswordLabel(true);
    setimageLabel(true);
    setcityLabel(true);
    setphoneLabel(true);
    setgenderLabel(true);
    setroleLabel(true);
  }

  // UseParams
  const { prodId } = useParams();

  // Navigation
  const navigate = useNavigate();

  // Get User-data Function
  const getDataUser = async () => {
    const data = await axios({
      method: "get",
      url: `http://localhost:6005/users/${prodId}`,
    });
    setUser(data.data);
  };

  // HandleForm Function
  const handleEdit = (e) => {
    e.preventDefault();
    // console.log("edit done");
    if(user.firstName == ""){
      setfirstnameLabel(false)
    }else if(user.userName == ""){
      checkLabels();
      setusernameLabel(false)
    }else if(user.lastName == ""){
      checkLabels();
      setlastnameLabel(false)
    }else if(user.gender == ""){
      checkLabels()
      setgenderLabel(false)
    }else if(user.password == ""){
      checkLabels()
      setpasswordLabel(false)
    }else if(user.email == ""){
      checkLabels();
      setemailLabel(false)
    }else if(user.phoneNumber == ""){
      checkLabels();
      setphoneLabel(false)
    }else if(user.city == ""){
      checkLabels();
      setcityLabel(false)
    }else if(user.role == ""){
      checkLabels();
      setroleLabel(false)
    }else if(user.image == ""){
      checkLabels();
      setimageLabel(false)
    }else {
      axios({
        method: "put",
        url: `http://localhost:6005/users/${prodId}`,
        data: {
          firstName: user.firstName,
          lastName: user.lastName,
          userName: user.userName,
          gender: user.gender,
          email: user.email,
          password: user.password,
          city: user.city,
          image: user.image,
          phoneNumber: user.phoneNumber,
          role: user.role
        }
      })
      setTimeout(() => {
        navigate(-1)
      }, 1000);
    }
  };
  

  // UseEffect
  useEffect(() => {
    getDataUser();
  }, []);

  return (
    <div className="flex justify-center items-center mt-5">
      <Card color="transparent" shadow={false}>
        <form
          onSubmit={(e) => handleEdit(e)}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 flex flex-col"
        >
          <div className="field flex justify-evenly">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                First Name
              </Typography>
              <Input
                value={user && user.firstName}
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Last Name
              </Typography>
              <Input
                value={user && user.lastName}
                onChange={(e)=>setUser({...user, lastName: e.target.value})}
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                value={user && user.password}
                onChange={(e)=>setUser({...user, password: e.target.value})}
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                PhoneNumber
              </Typography>
              <Input
                value={user && user.phoneNumber}
                onChange={(e)=>setUser({...user, phoneNumber: e.target.value})}
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Role
              </Typography>
              <Input
                value={user && user.role}
                onChange={(e)=>setUser({...user, role: e.target.value})}
                type="text"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Username
              </Typography>
              <Input
                value={user && user.userName}
                onChange={(e)=>setUser({...user, userName: e.target.value})}
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Gender
              </Typography>
              <Input
                value={user && user.gender}
                onChange={(e)=>setUser({...user, gender: e.target.value})}
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Email
              </Typography>
              <Input
                value={user && user.email}
                onChange={(e)=>setUser({...user, email: e.target.value})}
                type="text"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                City
              </Typography>
              <Input
                value={user && user.city}
                onChange={(e)=>setUser({...user, city: e.target.value})}
                type="text"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Image
              </Typography>
              <Input
                value={user && user.image}
                onChange={(e)=>setUser({...user, image: e.target.value})}
                type="text"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>
          <Button type="submit" className="mt-6" fullWidth>
            Edit User
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default EditUser;
