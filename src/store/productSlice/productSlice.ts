import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Product} from "../../types";

interface OpenProduceState {
    product: Product[],
}

const initialState: OpenProduceState = {
    product: [],
};
export const openProductSlice = createSlice({
    name: 'openProduct',
    initialState,
    reducers: {
        openCart: (state, action: PayloadAction<Product>) => {
            state.product.push({...action.payload});
        },
        closeCart: (state) => {
            state.product.pop()
        },
    },
});
export const openProductReducer = openProductSlice.reducer;
export const openProductActions = openProductSlice.actions;