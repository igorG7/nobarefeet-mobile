import { Url_base } from "./webApi";
import axios from "axios";

export const creatAD = async (param) => {
  try {
    return await axios.post(`${Url_base}/anuncios`, param).then((response) => {
      return response.data;
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const importAD = async (param) => {
  try {
    return await axios.get(`${Url_base}/anuncios`, param).then(
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

// export const adsUser = async (id) => {
//   try {
//     return await axios.get(`${Url_base}?userID=${id}`).then((response) => {
//       return response.data;
//     });
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// };
