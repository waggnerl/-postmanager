import { create } from "../../redux/reducers/user";
import { PayloadAction } from "@reduxjs/toolkit";
import { Dispatch } from "@reduxjs/toolkit";

export const updateUser = (name: string) => {
  return (dispatch: Dispatch<PayloadAction<string>>) => {
    dispatch(create(name));
  };
};
