import React, {useEffect, FC} from 'react';
import styled from "styled-components";
import {useAction} from "../../hooks/useAction";
import CountSelector from "../countSelector/countSelector";
import Favorite from "../../assets/img/favorites.svg";
import {Product} from "../../types";

const ModalBox = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(196, 196, 196, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`
const ContentInner = styled.div`
  display: flex;
  background: #fff;
  padding: 32px 64px;
`
const Content = styled.div`
  width: 100%;
  max-width: 500px;
`

const Button = styled.button`
  padding: 10px 24px;
  background: #D90429;
  color: #ffffff;

  &:hover, &:focus {
    opacity: 0.4;
  }`
const Modal: FC<{product:Product}> = ({product}) => {
    const {closeCart, addItem} = useAction();
    const {handleFavorite}=useAction();
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
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <button onClick={()=>handleFavorite(product)}><Favorite/></button>
                <div>
                    <img src={product.image} width={584} height={456} alt=""/>
                </div>
                <Content>
                    <h3>Description</h3>
                    <p>{product.description}</p>
                    <CountSelector id={product.id} />
                    <Button type="button" onClick={() => {addItem(product), closeModal()}}>Add to cart</Button>
                </Content>
            </ContentInner>
        </ModalBox>
    );
};

export default Modal;