import React from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='general'> 
                    <Link to={"/data"}><li>Data</li></Link>
                    <Link to={"/addproduct"}><li>AddProduct</li></Link>
                    <Link to={"/admin"}><li>Admin</li></Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar