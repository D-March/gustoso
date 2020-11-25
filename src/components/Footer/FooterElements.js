import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.95);
`;

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    margin: 0 auto;
    max-width: 1300px;
`;

export const Socials = styled.section`
    max-width: 1300px;
    width: 100%;
`;

export const SocialsWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 16px auto 0 auto;
    max-width: 1100px;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`;

export const SocialLogo = styled(Link)`
    display: flex;
    align-items: center;
    justify-self: start;
    margin-bottom: 16px;
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;

    & > img {
        transform: rotate(0.95turn);
        margin-right: 5px;
    }

    & > p {
        font-family: 'Kanita', sans-serif !important;
        font-weight: 200;
        font-size: 0.8rem;
        margin-left: 1rem;
        margin-top: 1rem;

        & > a {
            font-family: inherit;
        }
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`;