import { FC } from 'react';
import { Logo } from '../icon/logo/logo';
import { Menu } from '../menu/menu';
import { Wrapper } from '../wrapper/wrapper';
import Link from 'next/link'
import { UserArea } from '../userArea/userArea';
import { Container, A, Header, Title } from './style';

const PageHeader: FC = () => {
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

export default PageHeader;
