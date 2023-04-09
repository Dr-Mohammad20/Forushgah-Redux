import { combineReducers } from "redux";

import productsReducer from "./products/productsReducer";
import cartReducer from "./shopingCart/cartReducer";

const rootReducer = combineReducers({
    productsState : productsReducer,
    cartState : cartReducer
});

export default rootReducer;