/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice} from '@reduxjs/toolkit';

const initialState: PRODUCT.isShoose = {
  recommend: false,
  newProduct: false,
  price: false,
};
const changeStatus = (
  state,
  reValue: boolean,
  neValue: boolean,
  price: boolean,
) => {
  state.recommend = reValue;
  state.newProduct = neValue;
  state.price = price;
};
const ProductSlice = createSlice({
  name: 'Product',
  initialState: initialState,
  reducers: {
    isShoose: (state, action) => {
      switch (action.payload) {
        case 1:
          changeStatus(state, true, false, false);
          break;
        case 2:
          changeStatus(state, false, true, false);
          break;
        case 3:
          changeStatus(state, false, false, true);
          break;
      }
    },
  },
});
export let {isShoose} = ProductSlice.actions;
export default ProductSlice;
