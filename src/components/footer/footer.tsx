import React from 'react';
import Link from 'next/link';
import { Facebook } from 'components/icon/facebook/facebook';
import { Instagram } from 'components/icon/instagram/instagram';
import { Twitter } from 'components/icon/twitter/twitter';
import { Wrap, SocialMedia, A, Phone, Copyright } from 'components/footer/style';

export const Footer = () => {
  return (
    <Wrap>
      <SocialMedia>
        Don’t missout on once-in-a-while-deals:
        <Link href={'https://twitter.com'} passHref><A><Twitter/></A></Link>
        <Link href={'https://instagram.com'} passHref><A><Instagram/></A></Link>
        <Link href={'https://facebook.com'} passHref><A><Facebook/></A></Link>
      </SocialMedia>
      <Phone>Support line: <Link href={'tel:+250788467808'}>+250 788 467 808</Link></Phone>
      <Copyright>Copyright 2021 © Sneaker City ltd</Copyright>
    </Wrap>
  );
};
