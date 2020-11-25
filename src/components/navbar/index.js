import React from 'react'
import { Nav, NavLink, NavIcon, Bars } from './navbarElements';
import logo from '../../images/gustosologo.png';


const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to='/'><img src={logo} style={{width: 48, height: 60}}/> Gustoso</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    );
};

export default Navbar;
