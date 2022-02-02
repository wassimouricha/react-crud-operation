import React from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container

} from 'reactstrap';

export const Heading = () => {
  return (
    <Navbar color='dark' dark >
        <Container>
            <NavbarBrand href='/'> Mon Equipe </NavbarBrand>
            <Nav style={ {display: "inline-block"}} >
                <NavItem>
                    <Link   className='btn btn-primary ms-5' to="/add"> Ajouter un utilisateur </Link>
                </NavItem>
            </Nav>
        </Container>
    </Navbar>
  );
};
