import React, { useState } from "react";
import Footer from "../../Components/Footer";
import "./signin.css";
import { Checkbox, Typography } from "@material-tailwind/react";

import { Link, useNavigate } from "react-router-dom";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { Input, Button } from "@material-tailwind/react";
import axios from "axios";

const SignIn = () => {
  // Inputs state
  const [emailInput, setEmailInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const [checkLogin, setCheckLogin] = useState(true);

  // label state
  const [emailLabel, setEmailLabel] = useState(true);
  const [passLabel, setPassLabel] = useState(true);

  // password type check state
  const [checkPassType, setCheckPassType] = useState(true);

  // Navigation
  const navigate = useNavigate();

  // check Labels function
  const checkLabels = () => {
    setEmailLabel(true);
    setPassLabel(true);
  };

  const handleForm = (e) => {
    e.preventDefault(e);
    if (emailInput == "") {
      setEmailLabel(false);
    } else if (passInput == "") {
      checkLabels();
      setPassLabel(false);
    } else {
      axios({
        method: "get",
        url: "http://localhost:6005/users",
      }).then((data) => {
        const emailObj = data.data.find((user) => {
          return user.email == emailInput;
        });
        console.log(emailObj); // array of one object which is contain same email login by it
        if (typeof emailObj != "object") {
          setEmailLabel(false);
        } else if (emailObj.password != passInput) {
          checkLabels();
          setPassLabel(false);
        } else if (localStorage.log == "ok") {
          checkLabels();
          console.log("login already");
          setCheckLogin(!checkLogin);
        } else {
          checkLabels();
          navigate("/");
          localStorage.log = "ok";
          localStorage.userId = emailObj.id;
          localStorage.userImage = emailObj.image;
          localStorage.userEmail = emailObj.email;
          localStorage.userR = emailObj.role;
        }
      });
    }
  };

  // Check Pass Type function
  const checkType = () => {
    // console.log("hello");
    setCheckPassType(!checkPassType);
  };

  return (
    <div>
      <div className="main-sign flex justify-center items-center w-full h-screen">
        <form
          onSubmit={(e) => handleForm(e)}
          action=""
          className="items-center"
        >
          {/* email */}
          <div className="email flex flex-col">
            <label
              className={emailLabel ? "font-bold" : "font-bold text-red-700"}
            >
              {emailLabel ? "Email address" : "Invalid email address"}
            </label>
            <Input
              type="text"
              label="Email Address"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="pr-20 bg-white"
              containerProps={{
                className: "min-w-0",
              }}
            />

            <span className="text-xs">
              We'll never share your email with anyone else.
            </span>
          </div>
          {/* password */}
          <div className="password flex flex-col mt-4">
            <label
              className={passLabel ? "font-bold" : "font-bold text-red-700"}
            >
              {passLabel ? "Password" : "Invalid Pass"}
            </label>

            <div className="relative flex w-full max-w-[24rem]">
              <Input
                type={checkPassType ? "password" : "text"}
                label="Password"
                value={passInput}
                onChange={(e) => setPassInput(e.target.value)}
                className="pr-20 bg-white"
                containerProps={{
                  className: "min-w-0",
                }}
              />
              <Button
                size="sm"
                color="white"
                // disabled={!email}
                className="!absolute right-1 top-1 rounded shadow-none	hover:shadow-none"
                onClick={() => checkType()}
              >
                {checkPassType ? <BiShow /> : <BiHide />}
              </Button>
            </div>
          </div>

          {!checkLogin && (
            <span className="text-red-700">You have to sign out first</span>
          )}

          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-bold"
              >
                Remember Me
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />

          <div className="buttons">
            <button
              type="submit"
              className="bg-blue-700 me-2 p-2 rounded "
              variant="primary"
            >
              Login
            </button>
            <Link to="/signup">
              <button className="bg-blue-700 p-2 rounded " variant="primary">
                Create New Account
              </button>
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
