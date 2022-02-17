import React from 'react';
import Link from 'next/link';
import styled from "styled-components";
import Facebook from '../../assets/img/facebook.svg';
import Instagram from '../../assets/img/instagram.svg';
import Twitter from '../../assets/img/twitter.svg';

const Wrap = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.65);
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  padding-top: 32px;
  padding-bottom: 67px;
`;
const A = styled.a`
  display: flex;
  cursor: pointer;
  padding: 8px;
  background: rgba(0, 0, 0, 0.04);
  border-radius: 8px
`;
const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`
const Phone = styled.p`
  font-size: 16px;
  line-height: 24px;`
const Copyright = styled.p`
  font-size: 14px;
  line-height: 18px;
  margin-top: 8px;
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;`;
const Footer = () => {
    return (
        <Wrap>
            <SocialMedia>
                Don’t missout on once-in-a-while-deals:
                <Link href={'https://twitter.com'} passHref={true}><A><Twitter/></A></Link>
                <Link href={'https://instagram.com'} passHref={true}><A><Instagram/></A></Link>
                <Link href={'https://facebook.com'} passHref={true}><A><Facebook/></A></Link>
            </SocialMedia>
            <Container>
                <Phone>Support line: <a href={'tel:+250788467808'}>+250 788 467 808</a></Phone>
                <Copyright>Copyright 2021 © Sneaker City ltd</Copyright>
            </Container>
        </Wrap>
    );
};

export default Footer;