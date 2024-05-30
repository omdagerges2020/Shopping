import React, { useState } from "react";
import { Button, Card, Typography } from "@material-tailwind/react";
import  axios  from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AdminUsers = () => {
  const [users, setUsers] = useState([])

  // Navigation
  const navigate = useNavigate()

  
  // Get Users Function
  const getUsers = async ()=>{
    const data = await axios({
      method: "get",
      url: "http://localhost:6005/users"
    })
    setUsers(data.data);
  }


  // Delete User Function
  const deleteUser = (user)=>{
    const arrUsers = users.filter((u)=>{
      return u !== user
    })
    // console.log(arrUsers);
    setUsers(arrUsers)
    axios({
      method: "delete",
      url: `http://localhost:6005/users/${user.id}` 
    })
  }


  const handleRole = async (obj)=>{
    console.log(obj);
      const data = await axios({
        method: "patch",
        url: `http://localhost:6005/users/${obj.id}`,
        data: {
          role: obj.role == "admin" ? "member" : "admin"
        }
      })
      setUsers([...users, data.data])
      setTimeout(()=>{
        navigate("/admin/adminusers")
      },1000)
    getUsers();
  }


  // UseEffect
  useState(()=>{
    getUsers();
  },[])


  return (
    <div className="admin-users mt-3">
      <h1 className="text-center text-xl font-bold text-gray-900 mb-3">Products</h1>
      <Button color="green">Add New User</Button>
      <Card className="h-full w-full overflow-scroll mt-5">
        <table className="w-full min-w-max table-auto text-left border-separate">
          <thead>
            <tr>
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70 text-center"
                >
                  Username
                </Typography>
              </th>

              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-center">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  Role
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
            {users.map((user, index)=>(
                <tr key={index}>
                <td className="text-center text-white p-2">
                  {user.userName}
                </td>
                <td className="text-white text-center p-2">{user.role}</td>
                <td className="text-center flex justify-center p-2">
                  <Button color="blue" onClick={()=>navigate(`/admin/adminusers/showuser/${user.id}`)}>View</Button>
                  <Button onClick={()=>navigate(`/admin/adminusers/edituser/${user.id}`)} color="amber" className="ms-4">Edit</Button>
                  <Button onClick={()=>deleteUser(user)} color="red" className="ms-4">Delete</Button> 
                  <Button onClick={()=>handleRole(user)} color={user.role == "admin" ? "black" : "green"} className="ms-[3em] hover:bg-white hover:text-black">{user.role == "admin" ? "Remove Admin" : "Make Admin"}</Button>
                </td>
              </tr>
            ))}
          
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default AdminUsers;
