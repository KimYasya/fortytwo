import { createSlice } from "@reduxjs/toolkit";

export const FavSlice = createSlice({
  name: "favorite",

  initialState: {
    products: JSON.parse(localStorage.getItem('favSliceProducts')) || [],
  },

  reducers: {

    addProductToFav: (prevState, action) => {

      const product = action.payload;
      localStorage.setItem('favSliceProducts', JSON.stringify([...prevState.products, action.payload]))
      
      return {
        ...prevState,

        products: [...prevState.products, product],
        
      };
    },

    removeProductFromFav: (prevState, action) => {
      const product = action.payload;
      localStorage.removeItem('favSliceProducts', JSON.stringify(prevState.products.filter((item) => item === action.payload)))
     

      return {
        ...prevState, products: prevState.products.filter(
          (prevProduct) => {
            return prevProduct.id !== product.id;
          })

      
      }
    },
  },
});

export const { addProductToFav, removeProductFromFav } = FavSlice.actions;

export default FavSlice.reducer;
