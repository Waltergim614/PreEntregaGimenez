import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">Gaga Nails</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Esmalte tradicional</Nav.Link>
                    <Nav.Link href="#features">Semipermanente</Nav.Link>
                    <Nav.Link href="#pricing">Cabina UV</Nav.Link>
                    </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    );
};
