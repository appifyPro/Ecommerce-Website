

import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = (props) => {
    const {Component}=props
    const navigate=useNavigate()


        
    useEffect(()=>
    {
        let login=localStorage.getItem('token')
        let pathname=sessionStorage.getItem('pathname')

        if(!login)
        {
       navigate('/Login')
        }
        else if(pathname)
        {
          navigate('/checkout')
          sessionStorage.setItem('pathname',"")
        }
    })
  return (
    <div>
 <Component/>
    </div>
  )
}

export default ProtectedRoute