import React from 'react'
import { 
    SidebarContainer, 
    SidebarIcon, 
    CloseIcon, 
    SidebarMenu, 
    SidebarLink, 
    SidebarBtn, 
    SidebarRoute
    } from './sidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <SidebarIcon onClick={toggle}>
                <CloseIcon />
            </SidebarIcon>
            <SidebarMenu>
                <SidebarLink smooth to='#pasta'>Pasta</SidebarLink>
                <SidebarLink smooth to='#pizza'>Pizza</SidebarLink>
                <SidebarLink smooth to='#desserts'>Desserts</SidebarLink>
            </SidebarMenu>
            <SidebarBtn>
                <SidebarRoute to='/'>Order Now</SidebarRoute>
            </SidebarBtn>
        </SidebarContainer>
    )
}

export default Sidebar
