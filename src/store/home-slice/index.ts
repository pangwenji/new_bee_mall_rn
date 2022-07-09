/* eslint-disable @typescript-eslint/no-unused-vars */
import {getHomeInfo} from '@/api/home/home';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState: HOME.TotalDataType = {
  carousels: [],
  hotGoodses: [],
  newGoodses: [],
  recommendGoodsesResult: [],
};

export const fetchHomeServiceData = createAsyncThunk(
  'Home/fetchHomeServiceData',
  async () => {
    let res = await getInfo();
    return res;
  },
);
//获取后台数据
const getInfo = async () => {
  let carouselsResult,
    hotGoodsesResult,
    newGoodsesResult,
    recommendGoodsesResult;
  const result = await getHomeInfo();
  let {data} = result;
  if (data && data?.carousels) {
    carouselsResult = changeToType(data.carousels);
  }
  if (data && data?.hotGoodses) {
    hotGoodsesResult = changeToType(data.hotGoodses);
  }
  if (data && data?.hotGoodses) {
    newGoodsesResult = changeToType(data.newGoodses);
  }
  if (data && data?.recommendGoodses) {
    recommendGoodsesResult = changeToType(data.recommendGoodses);
  }
  return {
    carouselsResult,
    hotGoodsesResult,
    newGoodsesResult,
    recommendGoodsesResult,
  };
};
const changeToType = (array: Array<HOME.carouSelsType>) => {
  let totol: Array<any> = [];
  totol = array.map(res => {
    return res;
  });
  return totol;
};
const homeSlice = createSlice({
  name: 'Home',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchHomeServiceData.fulfilled, (state, action) => {
      state.carousels = action.payload.carouselsResult;
      state.hotGoodses = action.payload.hotGoodsesResult;
      state.newGoodses = action.payload.newGoodsesResult;
      state.recommendGoodsesResult = action.payload.recommendGoodsesResult;
    });
  },
});
// export let {getSeviceData} = homeSlice.actions;
export default homeSlice;
