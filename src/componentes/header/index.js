
import {Navbar, Container, Nav,NavDropdown } from 'react-bootstrap';


function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" style={{ borderBottom:'solid 5px #00d2df'}} >
        <Container>
        <Navbar.Brand href="#home" className='titulo destaquePrimeiraLetra'>Bruno Moreira</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/brunom764">GitHub</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/bruno-miguel-a08022239/">Linkedin</Nav.Link>
            <NavDropdown title="Projetos" id="collasible-nav-dropdown">
                <NavDropdown.Item href="https://brafoods.vercel.app/">BraFood</NavDropdown.Item>
                <NavDropdown.Item href="https://events-calendar-lovat.vercel.app/">Calendário</NavDropdown.Item>
                <NavDropdown.Item href="https://a-bendita-italia.vercel.app/">A Bendita Italia</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://typer-game-9hkt3ut6u-brunom764.vercel.app/">TyperGame</NavDropdown.Item>
                <NavDropdown.Item href="https://mochila-de-viagem.vercel.app/">Lista para viagem</NavDropdown.Item>
                <NavDropdown.Item href="https://nutricionista-seven.vercel.app/">Nutricionista</NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header