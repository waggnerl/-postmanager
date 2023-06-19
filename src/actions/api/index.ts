import { fetchDataSuccess, changeApiPage } from "../../redux/reducers/api";
import { Dispatch } from "@reduxjs/toolkit";
import { Posts } from "../../redux/reducers/api/index";
export const fetchData = (page: number) => {
  return async (dispatch: Dispatch) => {
    try {
      let response;
      if (page === 0) {
        response = await fetch("https://dev.codeleap.co.uk/careers/");
        const data = await response.json();
        const results: Posts = data.results;
        const dataSorted = results.sort(
          (
            { created_datetime: created_datetime_a },
            { created_datetime: created_datetime_b }
          ) => {
            const dateA = new Date(created_datetime_a);
            const dateB = new Date(created_datetime_b);

            if (isNaN(dateA.getTime())) {
              return 1;
            }

            if (isNaN(dateB.getTime())) {
              return -1;
            }

            return dateB.getTime() - dateA.getTime();
          }
        );

        return dispatch(fetchDataSuccess({ posts: dataSorted, page: page }));
      }
      if (page > 1) {
        response = await fetch(
          `https://dev.codeleap.co.uk/careers/?limit=10&offset=${page}`
        );
        const data = await response.json();
        const results: Posts = data.results;
        const dataSorted = results.sort(
          (
            { created_datetime: created_datetime_a },
            { created_datetime: created_datetime_b }
          ) => {
            const dateA = new Date(created_datetime_a);
            const dateB = new Date(created_datetime_b);

            if (isNaN(dateA.getTime())) {
              return 1;
            }

            if (isNaN(dateB.getTime())) {
              return -1;
            }

            return dateB.getTime() - dateA.getTime();
          }
        );

        return dispatch(fetchDataSuccess({ posts: dataSorted, page: page }));
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
