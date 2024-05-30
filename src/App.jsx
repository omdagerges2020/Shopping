import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/Home/About";
import { Route, Routes, useNavigate } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import SignIn from "./Pages/Login/SignIn";
import SignUp from "./Pages/Login/SignUp";
import Admin from "./Pages/Admin/Admin";
import AdminProducts from "./Pages/Admin/AdminProducts";
import AdminUsers from "./Pages/Admin/AdminUsers";
import Profile from "./Pages/Profile";
import axios from "axios";
import Editprofile from "./Editprofile";
import ShowProduct from "./Pages/Admin/ShowProduct";
import EditProduct from "./Pages/Admin/EditProduct";
import AddProduct from "./Pages/Admin/AddProduct";
import ShowUser from "./Pages/Admin/ShowUser";
import Error from "./Error";
import EditUser from "./Pages/Admin/EditUser";
import "./index.css"

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setcartProducts] = useState([]);
  const [checkDleteitem, setCheckDeleteitem] = useState(true);

  // Navigation
  const navigate = useNavigate();

  // Get Products Function
  const getProducts = async () => {
    const data = await axios({
      method: "get",
      url: "http://localhost:6005/products",
    });
    setProducts(data.data);
  };

  // Decrement function
  const decrement = (item) => {
    // console.log(item);
    const counter = cartProducts.map((prod) => {
      if (prod.id === item.id) {
        if (item.items > 1) {
          prod.items--;
        }
      }
      return prod;
    });
    setcartProducts(counter);
  };

  // Increment function
  const increment = (item) => {
    // console.log(item);
    const counter = cartProducts.map((prod) => {
      if (prod.id === item.id) {
        prod.items++;
      }
      return prod;
    });
    setcartProducts(counter);
  };

  // Handle cart Function
  const handleCart = (obj) => {
    const checkArr = cartProducts.some((prod) => {
      return prod.id == obj.id;
    });
    if (!checkArr) {
      setcartProducts([...cartProducts, obj]);
      // setTimeout(() => {
      //   navigate("/cart");
      // }, 1500);
    } else {
      const counter = cartProducts.map((prod) => {
        if (prod.id === obj.id) {
          prod.items++;
        }
        return prod;
      });
      setcartProducts(counter);
    }
  };

  // Delete Function
  const deleteItem = (obj) => {
    console.log(obj);

    const delItems = cartProducts.filter((prod) => {
      return prod.id !== obj.id;
    });
    setcartProducts(delItems);
  };

  // UseEffect
  useEffect(() => {
    getProducts();
  }, [checkDleteitem]);

  return (
    <div>
      <Header cartProducts={cartProducts.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop products={products} handleCart={handleCart} />}
        />
        <Route path="/aboutus" element={<About />} />
        <Route
          path="/admin"
          element={
            localStorage.userR == "admin" ? (
              <Admin
                lastproduct={products[products.length - 1]}
                productsLength={products.length}
              />
            ) : (
              <SignIn />
            )
          }
        />
        <Route
          path="/admin/adminproducts"
          element={
            localStorage.userR == "admin" ? (
              <AdminProducts
                checkDleteitem={checkDleteitem}
                setCheckDeleteitem={setCheckDeleteitem}
              />
            ) : (
              <SignIn />
            )
          }
        />
        <Route
          path="/admin/adminproducts/showproduct/:prodId"
          element={localStorage.userR == "admin" ? <ShowProduct /> : <SignIn />}
        />
        <Route
          path="/admin/adminproducts/editproduct/:prodId"
          element={localStorage.userR == "admin" ? <EditProduct /> : <SignIn />}
        />
        <Route
          path="/admin/adminproducts/addproduct"
          element={localStorage.userR == "admin" ? <AddProduct /> : <SignIn />}
        />
        <Route
          path="/admin/adminusers"
          element={localStorage.userR == "admin" ? <AdminUsers /> : <SignIn />}
        />
        <Route
          path="/admin/adminusers/showuser/:prodId"
          element={localStorage.userR == "admin" ? <ShowUser /> : <SignIn />}
        />
        <Route
          path="/admin/adminusers/edituser/:prodId"
          element={localStorage.userR == "admin" ? <EditUser /> : <SignIn />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartProducts={cartProducts}
              increment={increment}
              decrement={decrement}
              deleteItem={deleteItem}
            />
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<Editprofile />} />
        <Route path="/aboutus" element={<About />} />

        <Route path="*" element={<Error />} />
      </Routes>

      
    </div>
  );
};

export default App;
