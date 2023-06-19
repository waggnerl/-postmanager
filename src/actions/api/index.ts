import { fetchDataSuccess, changeApiPage } from "../../redux/reducers/api";
import { Dispatch } from "@reduxjs/toolkit";

export const fetchData = (page: number) => {
  return async (dispatch: Dispatch) => {
    try {
      let response;
      if (page === 0) {
        response = await fetch("https://dev.codeleap.co.uk/careers/");
        const data = await response.json();
        return dispatch(fetchDataSuccess({ posts: data.results, page: page }));
      }
      if (page > 1) {
        response = await fetch(
          `https://dev.codeleap.co.uk/careers/?limit=10&offset=${page}`
        );
        const data = await response.json();
        return dispatch(fetchDataSuccess({ posts: data.results, page: page }));
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
};

export const changePage = (page: number) => {
  return (dispatch: Dispatch) => {
    dispatch(changeApiPage(page));
  };
};
