// React
import { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

// Images
import logo from '../../assets/Images/LoginImg.png'

import main from '../../components/SendResetEmail'

function ForgotPassword() {
  const navigate = useNavigate();

  const backLogin = () =>{
    return navigate("/")
  }

  const sendResetPasswordEmail = () => {
    main()
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className='w-100 bg-black' style={{height:"100vh"}}>
        <IoIosArrowBack onClick={backLogin} size={25} color='black' style={{cursor: "pointer", position:'absolute', top: 45, left: 45}}/>
            <Image src={logo} fluid={true} className='w-100 vh-100' style={{height:"100vh"}}/>
        </div>
        <div className='w-100' style={{height:"100vh", backgroundColor: "#08090B"}}>
          <div className="container d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
            <Form:post className='w-75'>
              <div className='text-light w-100' >
                <h1 className='w-100'>Recuperar Senha</h1>
              </div>
              <div>
                
                <input className='w-100 mt-4' type="email" placeholder='E-mail' style={
                  {
                    border: 'none',
                    background: 'none',
                    boxShadow: 'none',
                    borderBottom: '1px solid #fff',
                    color: '#fff',
                    borderRadius: '0',
                    outline: 'none' }}/>
              </div>
              <div className='d-flex'>
                <input className='w-100 mt-5' type='text' placeholder='Confirmar E-maill' style={
                  {
                    border: 'none',
                    background: 'none',
                    boxShadow: 'none',
                    borderBottom: '1px solid #fff',
                    color: '#fff',
                    borderRadius: '0',
                    outline: 'none' }}/>
              </div>
              <div className='d-flex text-light mt-4'>
                <p className='me-2'>Não recebeu o e-mail?</p><a className='text-light' href="" onClick={sendResetPasswordEmail}> Reenviar e-mail</a>
              </div>
              <div className='d-flex justify-content-center align-items-center mt-5'>
                <Button type='submit' variant='dark' >
                  Resgatar
                </Button>

              </div>
            </Form:post>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword

