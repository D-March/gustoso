import styled from 'styled-components';

export const FeaturedContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-height: 500px;
    color: #f8f8f8;
    padding: 0;
`;

export const FeaturedHeader = styled.h1`
    text-align: center;
    font-size: clamp(2rem, 5vw, 3rem);
    width: 100%;
    margin-bottom: 5rem;
    padding: 0 0 0.5rem 0;
    background: rgba(0, 0, 0, 0.2);
`;

export const FeaturedCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    margin-left: 3rem;
    margin-top: 1rem;
`;

export const FeaturedTitle = styled.h1`
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    margin-bottom: 1rem;
`;

export const FeaturedDesc = styled.p`
    font-family: 'Kanit', sans-serif;
    font-weight: 200;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 1.3rem);
`;

export const FeaturedBtn = styled.button`
    font-size: 1.2rem;
    border: none;
    padding: 1rem;
    width: 70%;
    background: #cd212a;
    color: #f4f5f0;
    outline: none;
    transition: 200ms ease-in-out;

    &:hover {
        background: #008c45;
        transition: 100ms ease-in-out;
        cursor: pointer;
        color: #f4f5f0;
    }

    @media screen and (max-width: 768px){
        width: 100%
    }
`;


