import axios from "axios";

export const instanceAxios = axios.create({
  baseURL: "https://dev.codeleap.co.uk/careers/",
  timeout: 1000,
});
