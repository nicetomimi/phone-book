import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';

function App() {
  return (
    <div>
     <h1 className='title-area'>연락처</h1>
     <Container>
      <Row>
        <Col>
        <ContactForm />
        </Col>
        <Col>
        <ContactList/>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
