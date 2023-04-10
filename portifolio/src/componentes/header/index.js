import './header.scss'
import {Navbar, Container, Nav} from 'react-bootstrap';


function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top' className='navbar' >
        <Container>
        <Navbar.Brand href="#home" className='titulo destaquePrimeiraLetra'>Bruno Moreira</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/brunom764" className='subtitulo destaquePrimeiraLetra textoNegrito' target="_blank">GitHub</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/bruno-miguel-a08022239/" className='subtitulo destaquePrimeiraLetra textoNegrito' target="_blank">Linkedin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header
