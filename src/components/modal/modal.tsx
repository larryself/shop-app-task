import React, {useEffect, FC, useState} from 'react';
import {useAction} from "../../hooks/useAction";
import CountSelector from "../countSelector/countSelector";
import {Product} from "../../types";
import {ModalBox, ContentInner, Content, Button, Img, Container, Header, TitleInner, Title, FavoriteBtn, Price} from "./style";
import Favorites from "../icon/favorites/favorites";

const Modal: FC<{product:Product}> = ({product}) => {
    const {closeCart, addItem} = useAction();
    const {handleFavorite}=useAction();
    const [count, setCount] = useState(1);
    const closeModal = () => {
        closeCart();
        const body = document.querySelector('body')
        if (body !== null) {
            body.classList.remove('no-scroll');
        }
    };
    const outsideClickHandler = (evt: any) => {
        if (!evt.target.classList.contains('modal')) return;
        closeModal();
    };
    const escHandler = (evt: any) => {
        if (evt.keyCode !== 27) return;
        closeModal();
    };

    useEffect(() => {
        const body = document.querySelector('body')
        if (body !== null) {
            body.classList.add('no-scroll');
            document.addEventListener('click', outsideClickHandler);
            document.addEventListener('keydown', escHandler);
        }
        return () => {
            document.removeEventListener('click', outsideClickHandler);
            document.removeEventListener('keydown', escHandler);
        };
    }, []);

    return (
        <ModalBox className={'modal'}>
            <ContentInner>
                <Container>
                    <Header>
                        <TitleInner>
                            <Title>{product.title}</Title>
                            <FavoriteBtn onClick={()=>handleFavorite(product)}><Favorites/></FavoriteBtn>
                        </TitleInner>
                        <Price>{product.price}</Price>
                    </Header>
                <div>
                    <Img src={product.image} alt={product.title}/>
                </div>
                </Container>
                <Content>
                    <h3>Description</h3>
                    <p>{product.description}</p>
                    <CountSelector count={count} setCount={setCount} />
                    <Button type="button" onClick={() => {addItem({...product, piece: count}), closeModal()}}>Add to cart</Button>
                </Content>
            </ContentInner>
        </ModalBox>
    );
};

export default Modal;
