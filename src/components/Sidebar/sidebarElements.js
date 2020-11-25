import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 350px;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: grid;
    align-items: center;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};
    transition: 300ms ease-in-out;

    @media screen and (max-width: 400px){
        width: 100%;
    }
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const SidebarIcon = styled.div`
    position: absolute;
    background: transparent;
    border: transparent;
    outline: none;
    top: 1.2rem;
    right: 1.5rem;
    font-size: 2rem;
    cursor: pointer;
`;

export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4, 60px);
    }
`;

export const SidebarLink = styled(HashLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    list-style: none;
    text-decoration: none;
    transition: 200ms ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #cd212a;
        transition: 200ms ease-in-out;
    }
`;

export const SidebarBtn = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarRoute = styled(Link)`
    white-space: nowrap;
    background: #008c45;
    padding: 16px 64px;
    outline: none;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 2px;
    text-decoration: none;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
        background: #cd212a;
        color: #fff;
        transition: 100ms ease-in-out;
    }
`;
