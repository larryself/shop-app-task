import type {NextPage} from 'next'
import CardList from "../components/cardList/cardList";
import Footer from "../components/footer/footer";
import styled from "styled-components";
import TypeBar from "../components/typeBar/typeBar";
import {Wrapper} from "../components/wrapper/wrapper";

const Container = styled.div`
  max-width: 978px`;
const Main = styled.main`
  padding-top: 32px;
  display: flex;`
const Index: NextPage = () => {
    return (
        <Main>
            <TypeBar/>
            <Wrapper>
            <Container>
                    <section>
                        <h2>Category name</h2>
                        <CardList/>
                    </section>
                    <Footer/>
            </Container>
        </Wrapper>
        </Main>
    )
}


export default Index
