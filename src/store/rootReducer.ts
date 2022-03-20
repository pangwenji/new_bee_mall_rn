import {combineReducers} from '@reduxjs/toolkit';
import loginSlice from '@/store/login-slice';
const rootReducer = combineReducers({
  login: loginSlice.reducer,
});

export default rootReducer;
