import { Url_base } from "./webApi";
import axios from "axios";

export const register = async (param) => {
  try {
    return await axios
      .post(
        `https://no-bare-feet-api-1670964769587.azurewebsites.net/usuarios`,
        param
      )
      .then(
        (response) => {
          return response.data;
        },
        (error) => {
          console.error(error.response.data);
          console.error(error.response.status);
          console.error(error.response.headers);
          return null;
        }
      );
  } catch (error) {
    console.log(error);
  }
};

export const login = async (param) => {
  try {
    return await axios
      .post(
        `https://no-bare-feet-api-1670964769587.azurewebsites.net/login`,
        param
      )
      .then(
        (response) => {
          console.log(response.data);
          console.log(response.status);
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

export const updateInfoUser = async (id, param) => {
  try {
    return await axios.patch(`${Url_base}/users/${id}`, param).then(
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

export const getInfosUser = async (id) => {
  try {
    return await axios.get(`${Url_base}users/${id}`).then(
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
