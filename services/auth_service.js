import { Url_base } from "./webApi";
import axios from "axios";

export const register = async (param) => {
  try {
    return await axios.post(`${Url_base}/register`, param).then(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const login = async (param) => {
  try {
    return await axios.post(`${Url_base}/login`, param).then(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
  }
};
