// src/store/dataSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Posts = {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
}[];

type Content = {
  posts: Posts;
  page: number;
};

export type ApiState = {
  data: Content;
};
const initialState: ApiState = {
  data: {
    posts: [],
    page: 0,
  },
};

const ApiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    fetchDataSuccess: (state, action: PayloadAction<Content>) => {
      state.data = action.payload;
    },
    changeApiPage: (state, action: PayloadAction<number>) => {
      state.data.page = action.payload;
    },
  },
});

export const { fetchDataSuccess, changeApiPage } = ApiSlice.actions;

export default ApiSlice.reducer;
