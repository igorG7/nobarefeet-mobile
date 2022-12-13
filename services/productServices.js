import { Url_base } from "./webApi";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";

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

export const adsUser = async (id) => {
  try {
    return await axios
      .get(`${Url_base}anuncios?userID=${id}`)
      .then((response) => {
        return response.data;
      });
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteAD = async (id) => {
  try {
    return await axios.delete(`${Url_base}anuncios/${id}`).then((response) => {
      return response.data;
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updateAD = async (id, param) => {
  try {
    return await axios
      .patch(`${Url_base}anuncios/${id}`, param)
      .then((response) => {
        return response.data;
      });
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const closeAd = async (id, param) => {
  try {
    return await axios
      .patch(`${Url_base}anuncios/${id}`, param)
      .then((response) => {
        return response.data;
      });
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getInfosAD = async (id) => {
  try {
    return await axios.get(`${Url_base}/anuncios/${id}`).then((response) => {
      return response.data;
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};
