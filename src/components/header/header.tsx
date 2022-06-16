import { FC } from 'react';
import { Logo, Menu, Wrapper, UserArea } from 'components';
import Link from 'next/link';
import { Container, A, Header, Title } from 'components/header/style';

export const PageHeader: FC = () => (
  <Header>
    <Wrapper>
      <Container>
        <Link href={'/'} passHref>
          <A>
            <Logo/>
            <Title>SC.</Title>
          </A>
        </Link>
        <Menu/>
        <UserArea/>
      </Container>
    </Wrapper>
  </Header>
);
