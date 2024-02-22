import { favourite } from "@/types/typeSystem";
import axios from "axios";
const url = process.env.URL_APP;

const instance = axios.create({
   baseURL: url+'favourite',
});


export const listFavouriteUser = async (own:number) => {
   try {
      const response = await instance.get(`/list-word-by-own/${own}`);
      return response.data;
   } catch (error) {
      console.error("Error occurred while updating account details", error);
   }
};
export const addListFavourite = async (data:favourite) => {
    try {
       const response = await instance.post(`/AddInFavorite`,data);
       return response.data;
    } catch (error) {
       console.error("Error occurred while updating account details", error);
    }
 };
 export const removeElementFavourite = async (data:favourite) => {
    try {
       const response = await instance.post('/DeleteInFavorite',data);
       return response.data;
    } catch (error) {
       console.error("Error occurred while updating account details", error);
    }
 };