// React
import { useState } from 'react';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// Images
import logo from './assets/Images/LoginImg.png'

// Users
// import users from '../src/DataBase/User/User'

function App() {
  // const [userEmail, setUserEmail] = useState()

  // function VerifyUser(){
  //   console.log(userEmail)
  // }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className='w-100 bg-black' style={{height:"100vh"}}>
            <Image src={logo} fluid className='w-100 vh-100' style={{zIndex: 99}}/>
        </div>
        <div className='w-100 bg-black' style={{height:"100vh"}}>
          <div className="container d-flex jutify-content-center align-itens-center bg-primary">

            <Form className='mt-5 pt-5 w-50'>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control className='placeholder-text-light' type="email" placeholder="Email" style={
                  {
                    border: 'none',
                    background: 'none',
                    boxShadow: 'none',
                    borderBottom: '1px solid #fff',
                    color: '#fff',
                    borderRadius: '0' }} onChange={console.log(this.value)}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="password" placeholder="Senha" style={
                  {
                    border: 'none',
                    background: 'none',
                    boxShadow: 'none',
                    borderBottom: '1px solid #fff',
                    color: '#fff',
                    borderRadius: '0' }} />
              </Form.Group>
              <Button variant="dark" type="submit" onClick={VerifyUser()}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

