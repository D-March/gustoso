import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) /2);
    background: #161616;
    color: #fff;
    border-top: 5px solid;
    border-image: linear-gradient(to left, #cd212a, #f4f5f0, #008c45) 5;
`;

export const MainHeading = styled.h1`
    text-align: center;
    font-size: clamp(2rem, 3vw, 4rem);
    margin-bottom: 5rem;
`;

export const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`;

export const ItemCard = styled.div`
    width: 300px;
    min-height: min-content;
    margin: 0 2.5rem;
    margin-bottom: 1.5rem;
    line-height: 2;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 5px 5px rgba(255, 255, 255, 0.1);
`;

export const ItemImg = styled.img`
    height: 300px;
    object-fit: cover;
    min-width: 300px;
    max-width: 100%;
`;

export const ItemTitle = styled.h2`
    font-weight: 500;
    font-size: 1.5rem;
    color: #f4f5f0;
`;

export const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    text-align: center;
`;

export const ItemDesc = styled.p`
    font-family: 'Kanit', sans-serif;
    font-weight: 200;
    margin-bottom: 1rem;
    word-wrap: break-word;
`;

export const ItemPrice = styled.p`
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;

export const ItemBtn = styled.button`
    padding: 1rem 4rem;
    font-size: 1rem;
    border: none;
    outline: none;
    background: #008c45;
    color: #fff;
    cursor: pointer;
    transition: 200ms ease-out;

    &:hover {
        background: #cd212a;
        transition: 100ms ease-out;
    }
`;