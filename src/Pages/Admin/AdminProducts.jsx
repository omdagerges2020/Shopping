import React, { useEffect, useState } from "react";
import { Button, Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import {useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';


const AdminProducts = ({ setCheckDeleteitem, checkDleteitem }) => {
  const [adminProducts, setAdminProducts] = useState([]);

  // Navigation
  const navigate = useNavigate();


    // Get Data Function
    const getProducts = async () => {
      const data = await axios({
        method: "get",
        url: "http://localhost:6005/products",
      });
      setAdminProducts(data.data);
    };

  // Delete Function
  const deleteItem = (obj) => {
    // console.log(obj);
    const newArr = adminProducts.filter((item) => {
      return item !== obj;
    });
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setAdminProducts(newArr);
        axios({
          method: "delete",
          url: `http://localhost:6005/products/${obj.id}`,
        });
        setCheckDeleteitem(!checkDleteitem);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
    // console.log(newArr);
  };


  // UseEffect (getting data)
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="admin-products mt-3">
      <h1 className="text-center text-xl font-bold text-gray-900 mb-3">Products</h1>
      <Button color="green" onClick={()=>navigate("/admin/adminproducts/addproduct")}>Add Product</Button>
      <Card className="h-full w-full overflow-scroll mt-5">
        <table className="w-full h-screen min-w-max table-auto text-left border-separate">
          <thead>
            <tr>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70 text-center"
                >
                  Product
                </Typography>
              </th>

              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-center">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Price
                </Typography>
              </th>
              <th
                // key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-center"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Operations
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody className="bg-black">
            {adminProducts.map((prod, index) => (
              <tr key={index} className="mb-5 text-center bg-gray-600">
                <td className="text-center">
                  <img src={prod.image} style={{ width: "20px" }} />
                </td>
                <td className="text-white text-center">${prod.price}</td>
                <td className="items-center">
                  <Button
                    onClick={() =>
                      navigate(`/admin/adminproducts/showproduct/${prod.id}`)
                    }
                    color="blue"
                    className="me-[3em]"
                  >
                    View
                  </Button>
                  <Button
                    onClick={() =>
                      navigate(`/admin/adminproducts/editproduct/${prod.id}`)
                    }
                    color="amber"
                    className="me-[3em]"
                  >
                    Edit
                  </Button>
                  <Button color="red" onClick={() => deleteItem(prod)}  className="me-[3em]">
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default AdminProducts;
