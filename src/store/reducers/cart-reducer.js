import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",

  initialState: {
    products: JSON.parse(localStorage.getItem('cartSliceProducts')) || [],
  },

  reducers: {

    addProduct: (prevState, action) => {

      const product = action.payload;
      const hasInCart = prevState.products.some((prevProduct) => prevProduct.id === product.id);
      localStorage.setItem('cartSliceProducts', JSON.stringify([...prevState.products, action.payload]))
      
      if (hasInCart) {
        return { ...prevState }
      };

      return {
        ...prevState,

        products: [...prevState.products, product],
        
      };
    },

    removeProduct: (prevState, action) => {
      const product = action.payload;
      localStorage.removeItem('cartSliceProducts', JSON.stringify(prevState.products.filter((item) => item === action.payload)))
     

      return {
        ...prevState, products: prevState.products.filter(
          (prevProduct) => {
            return prevProduct.id !== product.id;
          })

      
      }
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;

