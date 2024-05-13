import React from 'react'
import { useState,useEffect } from 'react'
import "./Data.scss"

function Data() {

useEffect(() => {
  getAllproduct()
}, [])

    const [mydata, setmydata] = useState([])
    async function getAllproduct() {
        const res = await fetch("http://localhost:3000/products")
        const data = await res.json()
        setmydata(data)
    }
    return (
        <>
        <div className='cards' >
            {
                mydata.map((x) => {
                    return <> 
                        <div className='card' key={x.id}>
                            <h2>{x.name}</h2>
                            <h2>{x.title}</h2>
                            <button>{x.price}</button>
                        </div>
                    
                    </>
                })
            }</div>
        </>
    )
}

export default Data