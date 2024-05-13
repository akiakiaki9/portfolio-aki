import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

//
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Navbar1() {

    const location = useLocation()
    const [activePage, setActivePage] = useState(location.pathname)

    useEffect(() => {
        setActivePage(location.pathname)
    }, [location]);

    return (
        <>
            {['lg'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-dark">
                    <Container fluid>
                        <Navbar.Brand className='navbar-brand'>
                            <Link to='/' className='navbar-brand-link'>Akbar <span className="color-main">Dev</span></Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            className='navbar-offcanvas'
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title style={{color: 'white'}} id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Menu
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1">
                                    <Nav.Link>
                                        <Link className="navbar-link" to="/"
                                            style={{
                                                color: activePage === '/' ? 'var(--main-color)' : '',
                                                borderBottom: activePage === '/' ? '3px solid var(--main-color)' : ''
                                            }}>
                                            Home
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link className="navbar-link" to="/education"
                                            style={{
                                                color: activePage === '/education' ? 'var(--main-color)' : '',
                                                borderBottom: activePage === '/education' ? '3px solid var(--main-color)' : ''
                                            }}>
                                            Education
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link className="navbar-link" to="/skills"
                                            style={{
                                                color: activePage === '/skills' ? 'var(--main-color)' : '',
                                                borderBottom: activePage === '/skills' ? '3px solid var(--main-color)' : ''
                                            }}>
                                            Skills
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link className="navbar-link" to="/testimonials"
                                            style={{
                                                color: activePage === '/testimonials' ? 'var(--main-color)' : '',
                                                borderBottom: activePage === '/testimonials' ? '3px solid var(--main-color)' : ''
                                            }}>
                                            Testimonials
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link className="navbar-link" to="/projects"
                                            style={{
                                                color: activePage === '/projects' ? 'var(--main-color)' : '',
                                                borderBottom: activePage === '/projects' ? '3px solid var(--main-color)' : ''
                                            }}>
                                            Projects
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link className="navbar-link" to="/contacts"
                                            style={{
                                                color: activePage === '/contacts' ? 'var(--main-color)' : '',
                                                borderBottom: activePage === '/contacts' ? '3px solid var(--main-color)' : ''
                                            }}>
                                            Contacts
                                        </Link>
                                    </Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}