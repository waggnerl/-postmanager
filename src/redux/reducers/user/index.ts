import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface UserState {
  username: string;
}

const initialState: UserState = {
  username: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    create: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { create } = userSlice.actions;

export const selectCount = (state: RootState) => state.user.username;
export default userSlice.reducer;
