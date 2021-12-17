import './App.css';
import {Button, Container, Row, Col} from 'react-bootstrap'
import FileSearch from './components/FileSearch.js'
function App() {
  return (
    <Container className='App' fluid>
      <Row>
        <Col className='bg-danger' xs md="3">
          <FileSearch></FileSearch>
        </Col>
        <Col className='bg-primary' xs md="9"> 2 of 2</Col>
      </Row>
    </Container>
  );
}

export default App;
