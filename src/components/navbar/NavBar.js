import { Container, Navbar } from 'react-bootstrap';
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar className='navbar' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>Pokemon</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
