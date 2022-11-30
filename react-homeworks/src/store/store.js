import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart-reducer";
import { logger } from "./middlewares/logger";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },

  middleware: [logger],
})