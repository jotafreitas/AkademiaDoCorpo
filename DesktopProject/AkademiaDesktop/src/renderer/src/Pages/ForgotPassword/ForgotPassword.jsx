// React
import { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

// Images
import logo from '../../assets/Images/LoginImg.png'


function ForgotPassword() {


  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className='w-100 bg-black' style={{height:"100vh"}}>
            {/* <Image src={logo} fluid={true} className='w-100 vh-100' style={{height:"100vh"}}/> */}
        </div>
        <div className='w-100 bg-black' style={{height:"100vh"}}>
          <div className="container d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
            <Form:post className='w-75'>
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
                <input className='w-100 mt-5' type='text' placeholder='Senha' style={
                  {
                    border: 'none',
                    background: 'none',
                    boxShadow: 'none',
                    borderBottom: '1px solid #fff',
                    color: '#fff',
                    borderRadius: '0',
                    outline: 'none' }}/>
              </div>
              <div><a href="/src/Pages/Home/Home.jsx">Esqueceu a senha?</a></div>
              <div className='d-flex justify-content-center align-items-center mt-5'>
                <Button type='submit' variant='dark' >
                  Entrar
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

