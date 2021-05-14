import axios from "axios";
import { AsyncStorage } from "react-native";

export const URL = "https://api-garnet.herokuapp.com";
// export const URL = "http://192.168.0.109:3000";

const apiaxios = axios.create({
  baseURL: "https://api-garnet.herokuapp.com",
});

apiaxios.interceptors.request.use(async (config) => {
  try {
    const JWT_TOKEN = await AsyncStorage.getItem("@token");

    if (JWT_TOKEN) {
      config.headers.Authorization = `Bearer ${JWT_TOKEN}`;
    }

    return config;
  } catch (error) {
    console.log(error);
  }
});

export default apiaxios;
