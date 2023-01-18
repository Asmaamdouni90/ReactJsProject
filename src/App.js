import logo from "./logo.svg";
import "./App.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Icone from "./icon.png";
function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <img src={Icone} width={50}></img>
          <Nav className="navb">
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#jobs">Jobs</Nav.Link>
            <Navbar.Brand href="#login">Log In</Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>
      <h1>Welcome to your Website</h1>
      <img src={Icone} width={50}></img>

      <h2>
        Login up! <br></br>
      </h2>

      <Form className="formeauth">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div className="check">
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
        </div>
        <Button variant="primary" type="submit" className="btn">
          Submit
        </Button>
      </Form>
      <hr></hr>
      <h2> GO! It's your time!</h2>
      <br></br>
    </div>
  );
}

export default App;
