import React, { useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar';
import { 
    LandingContainer, 
    LandingContent, 
    LandingItems, LandingH1, 
    LandingP, 
    LandingBtn 
} from './heroElements';


const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <LandingContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <LandingContent>
                <LandingItems>
                    <LandingH1>Ristorante & Pizzeria</LandingH1>
                    <LandingP>Traditional Italian Cuisine</LandingP>
                    <LandingBtn>Place Order</LandingBtn>
                </LandingItems>
            </LandingContent>
        </LandingContainer>
    )
}

export default Hero
