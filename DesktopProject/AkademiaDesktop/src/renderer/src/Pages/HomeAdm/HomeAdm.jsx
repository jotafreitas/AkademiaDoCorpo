// React
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'


function HomeAdm(){
   
   
    // Navigate
      const navigate = useNavigate();
  

    return (
        <>
        <Button type='submit' variant='dark'>
        TELA ADM
      </Button>
         
        </>
    )
}

export default HomeAdm

