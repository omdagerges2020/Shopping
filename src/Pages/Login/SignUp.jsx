import React, { useState } from "react";
import "./signup.css";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  // Checkbox State
  const [termsChecked, setTermsChecked] = useState(false);
  const [termsLabel, setTermsLabel] = useState(true);
  // Inputs State
  const [firstnameInput, setFirstNameInput] = useState("");
  const [lastnameInput, setLastNameInput] = useState("");
  const [usernameInput, setUserNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [gender, setGender] = useState("Male");

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

  // Check Labels Function
  const checkLabels = () => {
    setfirstnameLabel(true);
    setlastnameLabel(true);
    setusernameLabel(true);
    setemailnameLabel(true);
    setpassLabel(true);
    setimageLabel(true);
    setphoneLabel(true);
    setcityLabel(true);
    setgenderLabel(true);
  };

  // Navigate
  const navigate = useNavigate();

  // Handle signup Form Function
  const handleForm = (e) => {
    e.preventDefault();
    if (firstnameInput === "") {
      setfirstnameLabel(false);
    } else if (lastnameInput === "") {
      checkLabels();
      setlastnameLabel(false);
    } else if (usernameInput === "") {
      checkLabels();
      setusernameLabel(false);
    } else if (emailInput === "") {
      checkLabels();
      setemailnameLabel(false);
    } else if (passInput === "") {
      checkLabels();
      setpassLabel(false);
    } else if (imageInput === "") {
      checkLabels();
      setimageLabel(false);
    } else if (phoneInput === "") {
      checkLabels();
      setphoneLabel(false);
    } else if (cityInput === "") {
      checkLabels();
      setcityLabel(false);
    } else if (gender === "") {
      checkLabels();
      setgenderLabel(false);
    } else if (!termsChecked) {
      checkLabels();
      setTermsLabel(false);
    } else {
      checkLabels();
      axios({
        method: "get",
        url: "http://localhost:6005/users",
      }).then((data) => {
        const Arr = data.data.some((em) => {
          return em.email === emailInput;
        });
        if (!Arr) {
          axios({
            method: "post",
            url: "http://localhost:6005/users",
            data: {
              firstName: firstnameInput,
              lastName: lastnameInput,
              userName: usernameInput,
              gender: gender,
              email: emailInput,
              password: passInput,
              city: cityInput,
              image: imageInput,
              phoneNumber: phoneInput,
              role: "user",
            },
          });
          navigate("/signin");
        } else {
          setemailnameLabel(false);
        }
      });
    }
  };

  return (
    <div>
      <div className="signup bg-gray-300 flex justify-center items-center">
        <Card color="transparent" shadow={false}>
          <form
            onSubmit={(e) => handleForm(e)}
            className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
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
                  value={firstnameInput}
                  onChange={(e) => setFirstNameInput(e.target.value)}
                />
              </div>
              <div className="name flex">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className={
                    lastnameLabel
                      ? "-mb-3 w-[35%]"
                      : "-mb-3 w-[35%] text-red-700"
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
                  value={lastnameInput}
                  onChange={(e) => setLastNameInput(e.target.value)}
                />
              </div>
              <div className="name flex">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className={
                    usernameLabel
                      ? "-mb-3 w-[35%]"
                      : "-mb-3 w-[35%] text-red-700"
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
                  value={usernameInput}
                  onChange={(e) => setUserNameInput(e.target.value)}
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
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
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
                  value={passInput}
                  onChange={(e) => setPassInput(e.target.value)}
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
                  value={imageInput}
                  onChange={(e) => setImageInput(e.target.value)}
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
                  value={phoneInput}
                  onChange={(e) => setPhoneInput(e.target.value)}
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
                    value={cityInput}
                    onChange={(e) => setCityInput(e.target.value)}
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
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="h-[30px] w-[100%] rounded"
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
              checked={termsChecked}
              onChange={() => setTermsChecked(!termsChecked)}
            />
            {!termsLabel && (
              <p style={{ color: "red" }}>
                You must agree to the terms and conditions
              </p>
            )}

            <Button type="submit" className="mt-6" fullWidth>
              sign up
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <Link to="/signin" className="font-medium text-gray-900">
                Sign In
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
