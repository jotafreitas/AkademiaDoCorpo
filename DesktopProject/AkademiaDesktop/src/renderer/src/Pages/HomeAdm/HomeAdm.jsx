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

// Users
import User from '../../../../database/User/User'


function HomeAdm() {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [loginError, setLoginError] = useState(false)

  // Password
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(<FaEyeSlash size={23} color='#FAE00D'/>);

  // Navigate
    const navigate = useNavigate();

  const handleToggle = () => {
    if (type==='password'){
       setIcon(<FaEye size={23} color='#FAE00D'/>);
       setType('text')
    } else {
       setIcon(<FaEyeSlash size={23} color='#FAE00D'/>)
       setType('password')
    }
 }

    const forgotPassword = () => {
        return navigate("forgotPassword")
    }
                    
  function VerifyUser(){
    var newUserEmail = userEmail.replace(/[@.]/g, '')
    if(User[newUserEmail]){
      if(User[newUserEmail].password == userPassword){
        setLoginError(false)
        useNavigate('/Home', {replace: true})
      }
      else{
        setLoginError(true)
      }
    }
    else{
      setLoginError(true)
    }
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className='w-100 bg-black' style={{height:"100vh"}}>
            <Image src={logo} fluid={true} className='w-100 vh-100' style={{height:"100vh"}}/>
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
                <input className='w-100 mt-4' type="email" placeholder='E-mail' style={
                  {
                    border: 'none',
                    background: 'none',
                    boxShadow: 'none',
                    borderBottom: loginError ? '1px solid rgba(255, 0, 0, 0.30)': '1px solid #fff',
                    color: '#fff',
                    borderRadius: '0',
                    outline: 'none' }} onChange={e => setUserEmail(e.target.value)}/>
              </div>
              <div className='d-flex'>
                <input className='w-100 mt-5' type={type} placeholder='Senha' style={
                  {
                    border: 'none',
                    background: 'none',
                    boxShadow: 'none',
                    borderBottom: loginError ? '1px solid rgba(255, 0, 0, 0.30)': '1px solid #fff',
                    color: '#fff',
                    borderRadius: '0',
                    outline: 'none' }} onChange={e => setUserPassword(e.target.value)}/>
                    <span class="d-flex justify-content-around align-items-center" onClick={handleToggle}>
                      <p class="position-absolute me-5 mt-5">{icon}</p>
                    </span>
              </div>
              <div className='text-end mt-2'><a href="#" onClick={forgotPassword} className='text-light'>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA?</a></div>
              <div className='d-flex justify-content-center align-items-center mt-5'>
                <Button type='submit' variant='dark' onClick={VerifyUser}>
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

export default HomeAdm

