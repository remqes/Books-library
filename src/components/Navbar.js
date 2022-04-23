import { Button, Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { isAuthenticated, logout } from '../services/authService'
import './NavBar.css'

const NavBar = () => {
    const user = isAuthenticated()
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to='/'>Strona główna</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav>
                            { user && user.role === 'ADMIN' && (
                                    <Button><Link to='/addBook'> Dodaj książkę </Link></Button>
                            )}
                        </Nav>
                        <Nav>
                            {
                                user ? (<><h4 style={{margin: 5}}>{user.username}</h4><Button onClick={logout} className='btn btn-outline-dark'>Wyloguj się</Button></>) : (
                            <>
                            <Button><Link to='/register'> Zarejestruj się </Link></Button>
                            <Button><Link to='/login'> Zaloguj się </Link></Button>
                            </>
                                )
                            }   
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar