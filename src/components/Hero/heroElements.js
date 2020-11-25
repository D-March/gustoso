import styled from 'styled-components';
import ImgBground from '../../images/heroImage.jpg';

export const LandingContainer = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.1)), url(${ImgBground});
    height: 100vh;
    background-position: center;
    background-size: cover;
    margin: 0;
    padding: 0;
`;

export const LandingContent = styled.div`
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0rem calc((100vw - 1300px) /2);
`;

export const LandingItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    width: 800px;
    height: 100vh;
    max-height: 100%;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 1;

    @media screen and (max-width: 650px) {
        width: 100%;
    }
`;

export const LandingBtn = styled.button`
    font-size: 1.4rem;
    border: none;
    padding: 1rem 4rem;
    background: #008c45;
    color: #f4f5f0;
    outline: none;
    transition: 200ms ease-in-out;

    &:hover {
        background: #cd212a;
        transition: 100ms ease-in-out;
        cursor: pointer;
        color: #f4f5f0;
    }
`;

export const LandingP = styled.p`
    font-size: clamp(1rem, 2vw, 1.3rem);
    margin-bottom: 2rem;
    font-weight: normal;
    text-transform: capitalize;
`;

export const LandingH1 = styled.h1`
    font-size: clamp(1.8rem, 10vw, 2.3rem);
    font-weight: normal;
    letter-spacing: 3px;
    margin-bottom: 1rem;
    background: linear-gradient(to left, #cd212a, #f4f5f0, #008c45); 
    background-size:100% 3px;
    background-position: bottom 0 left 0;
    background-repeat:no-repeat;
`;