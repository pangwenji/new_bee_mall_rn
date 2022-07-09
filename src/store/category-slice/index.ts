/* eslint-disable @typescript-eslint/no-unused-vars */
import {getCategoryListData} from '@/api/category/category';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState: CATEGORY.CategoryDataType = {
  categoryList: [],
  categoryRight: [],
};

export const fetchCategoryListData = createAsyncThunk(
  'Category/fetchCategoryListData',
  async () => {
    let res = await getCategoryListData();
    return res;
  },
);

const CategorySlice = createSlice({
  name: 'Category',
  initialState: initialState,
  reducers: {
    jumpingToPart: (state, action) => {
      state.categoryRight = action.payload.secondLevelCategoryVOS;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCategoryListData.fulfilled, (state, action) => {
      state.categoryList = action.payload.data;
      action.payload.data.forEach(result => {
        if (result.categoryName.includes('家电')) {
          state.categoryRight = result.secondLevelCategoryVOS;
        }
      });
    });
  },
});
export let {jumpingToPart} = CategorySlice.actions;
export default CategorySlice;
