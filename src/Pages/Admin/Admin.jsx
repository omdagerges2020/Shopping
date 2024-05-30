import { Button } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// length
const Admin = ({ lastproduct, productsLength }) => {
  // console.log(lastproduct);
  const [users, setUsers] = useState([]);

  // Get Users Function
  const getUsers = () => {
    axios({
      method: "get",
      url: "http://localhost:6005/users",
    }).then((data) => setUsers(data.data));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const lastUser = users[users.length - 1];
  // console.log(lastUser);

  return (
    <div className="main-admin w-full h-screen flex justify-between">
      <div className="side-menue lg:flex lg:flex-col xl:flex xl:flex-col md:hidden hidden gap-[8em] font-bold text-white text-xl justify-center px-7 flex-none bg-teal-900 h-[100%]">
        <Link to={`/admin`}>DashBoard</Link>
        <Link to={`/admin/adminusers`}>Users</Link>
        <Link to={`/admin/adminproducts`}>Products</Link>
      </div>
      <div className="flex gap-7 flex-col lg:flex-row xl:flex-row justify-center mt-[5em] flex-1 h-fit">
        {/* Users */}
        <div className="users text-center font-bold bg-gradient-to-b from-[#1e293b] to-[#020617] p-[4em] rounded-md text-white min-w-[40%] min-h-[40%]">
          <h1 className="text-2xl	text-blue-400">Users</h1>
          <h3 className="mt-5">
            Number Of Users:{" "}
            <span className="text-green-600">{users.length}</span>
          </h3>
          <h3 className="mt-5">
            Last User Registered is:{" "}
            <span className="text-green-600">
              {lastUser ? lastUser.userName : ""}
            </span>
          </h3>
          <Button className="bg-blue-400 mt-5	p-3 text-sm	rounded-md text-black">
            <Link to="/admin/adminusers">Show Users</Link>
          </Button>
        </div>

        {/* Products */}
        <div className="products text-center font-bold bg-gradient-to-b from-[#1e293b] to-[#020617] p-[4em] rounded-md text-white min-w-[40%] min-h-[40%]">
          <h1 className="text-2xl	text-blue-400">Products</h1>
          <h3 className="mt-5">
            Number Of Products:{" "}
            <span className="text-green-600">{productsLength}</span>
          </h3>
          <h3 className="mt-5">
            Last products Added is:{" "}
            <span className="text-green-600">
              {lastproduct ? lastproduct.title : ""}
            </span>
          </h3>
          <Button className="bg-blue-400 mt-5	p-3 text-sm	rounded-md text-black">
            <Link to="/admin/adminproducts">Show Products</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
