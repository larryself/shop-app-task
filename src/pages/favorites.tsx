import React from 'react';
import {NextPage} from "next";
import Layout from "../components/layout/layout";
import CardList from "../components/cardList/cardList";
import {useAppSelector} from "../hooks/useAppSelector";

const Favorites: NextPage = () => {
    const favorites = useAppSelector(state=> state.favorites)
    console.log(Boolean(favorites))
    return (
        <Layout>
            <h2>Your favorites</h2>
            {favorites.length ? 'not favorite':<CardList products={ favorites}/>}
        </Layout>
    );
};

export default Favorites;