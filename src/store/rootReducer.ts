import {combineReducers} from '@reduxjs/toolkit';
import loginSlice from '@/store/login-slice';
import homeSlice from '@/store/home-slice';
import productSlice from '@/store/product-slice';
import categorySlice from '@/store/category-slice';
const rootReducer = combineReducers({
  login: loginSlice.reducer,
  home: homeSlice.reducer,
  product: productSlice.reducer,
  category: categorySlice.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
