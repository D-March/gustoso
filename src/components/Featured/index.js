import React from 'react'
import {FeaturedContainer, FeaturedCard, FeaturedHeader, FeaturedTitle, FeaturedDesc, FeaturedBtn} from './featuredElements';

const Featured = ({ pizzas }) => {

    const keys = Object.keys(pizzas);
    const randomIndex = keys[Math.floor(Math.random() * keys.length)];
    const item = pizzas[randomIndex];
    const containerStyle = {
        background: `linear-gradient(to right, rgba(0, 0, 0, 0.9),
        rgba(0, 0, 0, 0.1)), url(${item.img})`,
        backgroundPosition: `left`,
        backgroundSize: `fill`
    };

    return (
        <FeaturedContainer style={containerStyle}>
            <FeaturedHeader>Gustoso's Choice</FeaturedHeader>
            <FeaturedCard>
                <FeaturedTitle>{item.name} Pizza</FeaturedTitle>
                <FeaturedDesc>{item.desc}</FeaturedDesc>
                <FeaturedBtn>Order Now</FeaturedBtn>
            </FeaturedCard>
        </FeaturedContainer>
    )
}

export default Featured