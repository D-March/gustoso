import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';

export const Nav = styled.nav`
    background: rgba(0, 0, 0, 0.2);
    height: 70px;
    display: flex;
    justify-content: center;
    font-weight: 700;
    position: sticky;
    top: 0;
`;

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    
    & > img {
        transform: rotate(0.95turn);
        margin-right: 5px;
    }

    @media screen and (max-width: 400px){
        position: absolute;
        top: 10px;
        left: 25px;
    }
`;

export const NavIcon = styled.div`
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;

    p {
        transform: translate(-175%, 80%);
        font-weight: bold;
        font-size: 1.3rem;

        @media screen and (max-width: 600px){
        transform: translate(-50%, 100%);
        }
    }
`;
export const Bars = styled(GiKnifeFork)`
    font-size: 2.2rem;
    transform: translate(-50%, -25%);

    @media screen and (max-width: 600px){
        display: none;
    }
`;