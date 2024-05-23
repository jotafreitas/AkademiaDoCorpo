// React
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'


function HomeAdm(){
   
   
    // Navigate
      const navigate = useNavigate();
  

    return (
      
        <>
      
      <Link to="/" relative="path"> Back </Link>
         
        </>
    )
}

export default HomeAdm

