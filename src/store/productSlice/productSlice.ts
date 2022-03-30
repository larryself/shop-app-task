import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Product} from "../../types";
import {productsApi} from "../product/product";

type ProduceState = {
    open: Product | null,
    rating : number[],
    price: number[],
}


export const productSlice = createSlice({
    name: 'product',
    initialState: {open: null , rating: [], price: []} as ProduceState,
    reducers: {
        openCart: (state, action: PayloadAction<Product>) => {
            state.open = action.payload;
            },
        closeCart: (state) => {
            state.open = null;
            },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            productsApi.endpoints.getProducts.matchFulfilled,
            (state, {payload}) => {
                debugger
                const price = payload.map(el=> el.price);
                const rating = payload.map(el=>el.rating.rate);
                const priceMax = Math.max(...price);
                const priceMin = Math.min(...price);
                const ratingMax = Math.max(...rating);
                const ratingMin = Math.min(...rating);
                state.price = [priceMin,priceMax];
                state.rating = [ratingMin,ratingMax]
            }
        )
    }
});
export const productReducer = productSlice.reducer;
export const productActions = productSlice.actions;
