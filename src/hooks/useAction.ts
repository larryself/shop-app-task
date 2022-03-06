import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {cartActions} from "../store/cartSlice/cartSlice";
import {openProductActions} from "../store/productSlice/productSlice";
import {favoritesActions} from "../store/favoritesSlice/favoritesSlice";

const allActions = {
    ...cartActions, ...openProductActions, ...favoritesActions
}
export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(allActions, dispatch)
}