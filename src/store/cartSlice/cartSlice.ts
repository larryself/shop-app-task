import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Product} from "../../types";

interface CartItem {
    product?: Product,
    count: number,
}

export interface CartState {
    count: number,
    cart: CartItem[]
}

const initialState: CartState = {
    count: 1,
    cart: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        handleCount: (state,action) => {
            if(action.payload){
                console.log(action.payload)
            } else {
                state.count = action.payload
            }
        },
        addItem: (state, action) => {
            console.log(state)
        },
        removeItem: (state, action: PayloadAction<{ id: number }>) => state.cart.filter(element => element.product?.id !== action.payload.id),
    },
});
export const cartReducer = cartSlice.reducer;


export const cartActions = cartSlice.actions;
