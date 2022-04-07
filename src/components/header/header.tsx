import { FC } from 'react';
import { Logo } from 'components/icon/logo/logo';
import { Menu } from 'components/menu/menu';
import { Wrapper } from 'components/wrapper/wrapper';
import Link from 'next/link'
import { UserArea } from 'components/userArea/userArea';
import { Container, A, Header, Title } from 'components/header/style';

export const PageHeader: FC = () => {
  return (
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
};
