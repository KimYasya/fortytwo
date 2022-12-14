import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart-reducer";
import { logger } from "./middlewares/logger";
import favReducer from "./reducers/fav-reducer";
import selectedItemReducer from "./reducers/selectedItem-reducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    fav: favReducer,
    selectedItem: selectedItemReducer,
  },

  middleware: [logger],
})