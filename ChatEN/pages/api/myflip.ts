import { MyFlip } from "@/types/typeSystem";
import axios from "axios";
const url = process.env.URL_APP;

const instance = axios.create({
   baseURL: url+'MyFlip',
});


export const CreateMyFlip = async (formPut:MyFlip) => {
   try {
      const response = await instance.post("/create-new-flip", formPut);
      return response.data;
   } catch (error) {
      console.error("Error occurred while updating account details", error);
   }
};
export const DeleteMyFlip = async (id:number) => {
   try {
      const response = await instance.delete(`/delete-flip-by-id/${id}`);
      return response.data;
   } catch (error) {
      console.error("Error occurred while updating account details", error);
   }
};
export const GetMyFlipById = async (id:number) => {
   try {
      const response = await instance.get(`/get-all-flip/${id}`);
      return response.data;
   } catch (error) {
      console.error("Error occurred while updating account details", error);
   }
};
