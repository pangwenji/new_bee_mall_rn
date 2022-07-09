import {configureStore} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';
import rootReducer, {RootState} from './rootReducer';
const store = configureStore({
  reducer: rootReducer,
});
export const useAppSelector = <T extends keyof RootState>(name: T) =>
  useSelector((state: RootState) => state[name]);
export default store;
