import { createSlice } from "@reduxjs/toolkit";


export const selectedItemSlice = createSlice({
  name: "selectedItem",

  initialState: {
    products: [],
  },

  reducers: {

    addProduct: (prevState, action) => {

      const product = action.payload;
      const currentSelectedItem = prevState.products.some((prevProduct) => prevProduct === product);
      
      
      if (currentSelectedItem) {
        return { ...prevState }
      };

      return {
        ...prevState,

        products: [...prevState.products, product],
        
      };
    },

    removeProduct: (prevState, action) => {
      const product = action.payload;
      
     

      return {
        ...prevState, products: prevState.products.filter(
          (prevProduct) => {
            return prevProduct !== product;
          })

      
      }
    },
  },
});

export const { addProduct, removeProduct } = selectedItemSlice.actions;

export default selectedItemSlice.reducer;

