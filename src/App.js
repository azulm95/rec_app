import NavBar from "./components/Navbar";
import { InfoAboutUs } from "./views/AboutUs"
import { Container, Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/NavBar.css'
function App() {
  const Box = props => <div className="box">{props.children} </div>;
  return (
    <div className="App">
      <Container>
      <Row>
          <Col>
            <Box>  
              <NavBar /> 
            </Box>
          </Col>
      </Row>
      <Row>
        <Col>
          <InfoAboutUs/>
        </Col>
      </Row>
        <Row>
          <Col>
            <InfoAboutUs/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
