import React, { FC } from 'react';
import Link from 'next/link';
import Facebook from '../../assets/img/facebook.svg';
import Instagram from '../../assets/img/instagram.svg';
import Twitter from '../../assets/img/twitter.svg';
import { Wrap, SocialMedia, A, Phone, Copyright, Container } from './style';

const Footer: FC = () => {
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
