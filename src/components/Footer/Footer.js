import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { 
    FooterContainer, 
    FooterWrapper, 
    Socials, 
    SocialsWrap, 
    SocialLogo, 
    SocialIcons, 
    SocialIconLink
} from './FooterElements';
import logo from '../../images/gustosologo.png';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Socials>
                    <SocialsWrap>
                        <SocialLogo to='/'>
                            <img src={logo} style={{width: 32, height: 40}}/> 
                            <h1>Gustoso </h1> 
                            <p>
                                    &#169; Gustoso 2020 - Created by <a href='https://www.d-march.com'>D-March</a>
                            </p>
                        </SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label='Facebook' rel='noopener noreferrer'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Instagram' rel='noopener noreferrer'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='YouTube' rel='noopener noreferrer'>
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Twitter' rel='noopener noreferrer'>
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialsWrap>
                </Socials>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
