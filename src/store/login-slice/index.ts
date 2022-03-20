import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getToken} from '../../api/login/login';
import {TokenType} from '../../utils/asyncThunkName';
import {getUserParam} from '@/api/login/login';
import {loginType} from '@/constants/login';
const FETCH_TOKEN = createAsyncThunk<any>(
  TokenType.FETCH_TOKEN,
  async (data: any) => getToken(data),
);
//初始化仓库的值
const initialState: LOGIN.LoginToken = {
  tokenFlag: loginType.success,
  tokenPlayloan: {},
};
const loginSlice = createSlice({
  name: 'login',
  reducers: {
    getServerToken: (state, action) => {
      //测试接口
      // getUserParam(action.payload)
      //   .then(res => {
      //     console.log(res, '多云');
      //     //返回值设到仓库
      //   })
      //   .catch(data => {
      //     console.log(data, 'data');
      //   });
    },
  },
  extraReducers: builder => {
    builder.addCase(FETCH_TOKEN.pending, () => {});
  },
  initialState: initialState,
});
export const {getServerToken} = loginSlice.actions;
export default loginSlice;
