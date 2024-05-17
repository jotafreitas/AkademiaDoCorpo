import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import Image from 'react-bootstrap/Image'

function App() {
  return (
    <>
      <Row style={{width: "100.8%"}}>
        <Col style={{backgroundColor:"yellow", height: "100vh"}}>
          <Image></Image>
        </Col>
        <Col style={{backgroundColor:"black", height: "100vh"}}>
          <InputGroup>
            <input type="text" />
          </InputGroup>
        </Col>
      </Row>
    </>
  )
}

export default App

