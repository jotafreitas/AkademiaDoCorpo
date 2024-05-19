// React
import { useState } from 'react';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

// Images
import logo from './assets/Images/LoginImg.png'

// Users
import User from '../../database/User/User'

import Home from './Pages/Home/Home';

function App() {
  const [userEmail, setUserEmail] = useState('')
  const [loginError, setLoginError] = useState(false)
  const [loadHome, setLoadHome] = useState(false)

  function VerifyUser(){
    var newUserEmail = userEmail.replace(/[@.]/g, '')
    if(User[newUserEmail]){
      setLoginError(false)
    }
    else{
      setLoginError(true)
    }
    // console.log(document.querySelector('#email').value)
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className='w-100 bg-black' style={{height:"100vh"}}>
            <Image src={logo} fluid className='w-100 vh-100' style={{zIndex: 99}}/>
        </div>
        <div className='w-100 bg-black' style={{height:"100vh"}}>
          <div className="container d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
            <Form:post className='w-75'>
              <div>
                <div style={{display: loginError ? 'block':'none'}}>
                  <h5 className="text-light text-center rounded py-2" style={{
                      background: 'rgba(255, 0, 0, 0.30)',
                      borderRadius: 16,
                      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                      backdropFilter: 'blur(13.1px)',
                      WebkitBackdropFilter: 'blur(13.1px)',
                      
                  }}>Login ou Senha Incorretos</h5>
                </div>
                <input className='w-100 mt-4' type="email" style={
                  {
                    border: 'none',
                    background: 'none',
                    boxShadow: 'none',
                    borderBottom: loginError ? '1px solid rgba(255, 0, 0, 0.30)': '1px solid #fff',
                    color: '#fff',
                    borderRadius: '0',
                    outline: 'none' }} onChange={e => setUserEmail(e.target.value)}/>
              </div>
              <div>
                <input className='w-100 mt-5' type="password" style={
                  {
                    border: 'none',
                    background: 'none',
                    boxShadow: 'none',
                    borderBottom: loginError ? '1px solid rgba(255, 0, 0, 0.30)': '1px solid #fff',
                    color: '#fff',
                    borderRadius: '0',
                    outline: 'none' }}/>
              </div>
              <div className='d-flex justify-content-center align-items-center mt-5'>
                <Button type='submit' variant='dark' onClick={VerifyUser}>
                  "Entrar"
                </Button>
              </div>
            </Form:post>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

