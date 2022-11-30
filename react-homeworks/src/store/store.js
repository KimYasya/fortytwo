import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart-reducer";
import { logger } from "./middlewares/logger";
import favReducer from "./reducers/fav-reducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    fav: favReducer,
  },

  middleware: [logger],
})