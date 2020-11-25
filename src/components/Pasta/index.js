import React from 'react'
import {
    MainContainer,
    MainHeading,
    ItemWrapper,
    ItemCard,
    ItemImg,
    ItemInfo,
    ItemTitle,
    ItemDesc,
    ItemPrice,
    ItemBtn
} from './itemElements';

const Pasta = ({ data }) => {
    return (
        <MainContainer>
            <MainHeading id='pasta'>Pasta</MainHeading>
                <ItemWrapper>
                    {data.map((item, index) => {
                        return (
                            <ItemCard key={index}>
                                <ItemImg src={item.img} alt={item.alt} />
                                <ItemInfo>
                                    <ItemTitle>{item.name}</ItemTitle>
                                    <ItemDesc>{item.desc}</ItemDesc>
                                    <ItemPrice>{item.price}</ItemPrice>
                                    <ItemBtn>{item.button}</ItemBtn>
                                </ItemInfo>
                            </ItemCard>
                        )
                    })}
                </ItemWrapper>
        </MainContainer>
    )
}

export default Pasta
