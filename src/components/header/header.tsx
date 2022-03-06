import Menu from "../menu/menu";
import styled from 'styled-components';
import {Wrapper} from "../wrapper/wrapper";
import Link from 'next/link'
import Logo from '../../assets/img/logo.svg';
import UserArea from "../userArea/userArea";

const Header = styled.header`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-top: 26px;
  padding-bottom: 18px;

`;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const A = styled.a`
  display: flex;
  align-items: center;
  column-gap: 8px;
`
const PageHeader = () => {
    return (
        <Header>
            <Wrapper>
                <Container>
                    <Link href={'/'} passHref>
                        <A>
                            <Logo/>
                            <h1>SC.</h1>
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