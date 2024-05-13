import React from 'react'
import "./Admin.scss"

import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'


function Admin() {

  const [mydata, setmydata] = useState([])
  useEffect(() => {
    getAllproduct()
  }
    , [])

  async function getAllproduct() {
    const res = await fetch("http://localhost:3000/products");
    const data = await res.json();
    setmydata(data)
  }

  async function handleDelete(id) {
    const res = await fetch("http://localhost:3000/products/"+id,{
      method:"delete"
    });
    const data = await res.json();
    return getAllproduct();
  }

  return (
  
  <>
    {mydata.map((x) => 
        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Title</th>
            <th>Option</th>
          </tr>
          <tr>
            <td>{x.name}</td>
            <td>{x.price}</td>
            <td>{x.title}</td>
            <td>
              <td><button onClick={()=>AddProduct()}><Link to={"/AddProduct"}>Add</Link></button></td>
              <td><button onClick={()=>handleDelete(x.id)}>Delete</button></td>
              <td><button ><Link to={`/UptadeProduct/${x.id}`}>Edit</Link></button></td>
            </td>
          </tr>
        </table>

    )}
  
    </>
  )}

    export default Admin