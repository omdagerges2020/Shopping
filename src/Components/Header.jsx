import React from "react";
import {
  Collapse,
  IconButton,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { LuShoppingBasket } from "react-icons/lu";

import { FiLogIn } from "react-icons/fi";
import logoImg from "../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import Swal from "sweetalert2";
import "./header.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          to="/"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          to="/shop"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Shop
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          to="/aboutus"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          About Us
        </NavLink>
      </Typography>
    </ul>
  );
}

const Header = ({ cartProducts }) => {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // Logout Function
  const handleLogout = () => {
    Swal.fire({
      title: "Logged Out",
      color: "#FF0000",
      timer: 1500,
    });
    localStorage.clear();
  };

  // console.log(cartProducts);
  return (
    <Navbar className=" px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-[3em] cursor-pointer py-1.5"
        >
          <img src={logoImg} />
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>

        <div className="flex items-center justify-end	 w-[20%]">
          <div className="cart-icon flex me-2">
            <Link to="/cart">
              <LuShoppingBasket />
            </Link>
            <span className="text-red-700 text-xs	">{cartProducts}</span>
          </div>

          {localStorage.log == "ok" ? (
            <Menu>
              <MenuHandler>
                <Avatar
                  variant="circular"
                  alt="tania andrew"
                  className="cursor-pointer"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
              </MenuHandler>
              <MenuList>
                <MenuItem className="flex items-center gap-2">
                  <Typography variant="small" className="font-medium">
                    <Link to="/profile">My Profile</Link>
                  </Typography>
                </MenuItem>
                {localStorage.userR == "admin" && (
                  <MenuItem className="flex items-center gap-2">
                    <Typography variant="small" className="font-medium">
                      <Link to="/admin">Control</Link>
                    </Typography>
                  </MenuItem>
                )}
                <hr className="my-2 border-blue-gray-50" />
                <MenuItem className="flex items-center gap-2 ">
                  <Typography variant="small" className="font-medium">
                    <Link to="/" onClick={() => handleLogout()}>
                      Log Out
                    </Link>
                  </Typography>
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Link to="/signin">
              <FiLogIn className="text-indigo-700	ml-2	" />
            </Link>
          )}
        </div>
    

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default Header;
