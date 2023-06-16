import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";

interface UserState {
  name: string;
}

const initialState: UserState = {
  name: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    create: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { create } = userSlice.actions;

export const selectCount = (state: RootState) => state.user.name;

export default userSlice.reducer;
