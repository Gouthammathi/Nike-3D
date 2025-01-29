import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '@fontsource/anton';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Logo Section */}
        <LogoSection>
          <Logo>Nike</Logo>
          <Description>
            Discover a world of amazing products at unbeatable prices.
          </Description>
        </LogoSection>

        {/* Quick Links */}
        <LinksSection>
          <LinksTitle>Quick Links</LinksTitle>
          <Links>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/shop">Shop</StyledLink>
            <StyledLink to="/about">About Us</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
            <StyledLink to="/faqs">FAQs</StyledLink>
          </Links>
        </LinksSection>

        {/* Social Media Section */}
        <SocialSection>
          <SocialTitle>Follow Us</SocialTitle>
          <SocialIcons>
            <Icon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter" /> Twitter
            </Icon>
            <Icon href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" /> Instagram
            </Icon>
            <Icon href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin" /> LinkedIn
            </Icon>
            <Icon href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook" /> Facebook
            </Icon>
          </SocialIcons>
        </SocialSection>

        {/* Newsletter Section */}
        <NewsletterSection>
          <NewsletterTitle>Stay Updated</NewsletterTitle>
          <NewsletterInput>
            <Input type="email" placeholder="Enter your email" />
            <Button>Subscribe</Button>
          </NewsletterInput>
          <NewsletterDescription>
            Get the latest updates, new arrivals, and exclusive offers straight to your inbox.
          </NewsletterDescription>
        </NewsletterSection>
      </FooterContent>

      {/* Footer Bottom */}
      <FooterBottom>
        <Copyright>
          © 2024 Nike E-Shop. All rights reserved. | Privacy Policy | Terms & Conditions
        </Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

/* Styled Components */
const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #000, #222);
  color: #fff;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    text-align: center;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Logo = styled.h1`
  font-family: 'Anton', sans-serif;
  font-size: 36px;
  color: #f44336;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #ccc;
  max-width: 250px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const LinksSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const LinksTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #fff;
`;

const Links = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledLink = styled(Link)`
  display: block;
  margin: 5px 0;
  font-size: 14px;
  color: #ccc;
  text-decoration: none;

  &:hover {
    color: #f44336;
    text-decoration: underline;
  }
`;

const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const SocialTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Icon = styled.a`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #ccc;
  text-decoration: none;

  &:hover {
    color: #f44336;
  }

  i {
    margin-right: 8px;
  }
`;

const NewsletterSection = styled.div`
  background: linear-gradient(135deg, #444, #222);
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const NewsletterTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  color: #fff;
  font-weight: bold;
`;

const NewsletterInput = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Input = styled.input`
  padding: 12px 15px;
  border: none;
  font-size: 14px;
  border-radius: 8px;
  background: #333;
  color: #fff;
  width: 70%;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 10px #f44336, 0 0 20px rgba(244, 67, 54, 0.5);
    transform: scale(1.02);
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  background: black;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  border-radius: 8px;
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #ff5722, #e64a19);
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(255, 87, 34, 0.5);
  }
`;

const NewsletterDescription = styled.p`
  font-size: 14px;
  color: #ddd;
  margin-top: 15px;
`;

const FooterBottom = styled.div`
  text-align: center;
  font-size: 12px;
  color: #999;
  margin-top: 20px;
`;

const Copyright = styled.p`
  margin: 0;
`;
