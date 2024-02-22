import { login, signup } from "@/types/typeSystem";
import axios from "axios";
const url = process.env.URL_APP;

const instance = axios.create({
   baseURL: url+'Account',
});


export const signIn = async (formPut:login) => {
   try {
      const response = await instance.post("/signIn", formPut);
      return response.data;
   } catch (error) {
      console.error("Error occurred while updating account details", error);
   }
};
export const signUp = async (formPut:signup) => {
   try {
      const response = await instance.post("/signUp", formPut);
      return response.data;
   } catch (error) {
      console.error("Error occurred while updating account details", error);
   }
};
export const getUser = async () => {
   try {
      const response = await instance.get("/getuser");
      return response.data;
   } catch (error) {
      console.error("Error occurred while updating account details", error);
   }
};
export const lockUser = async (id:number) => {
   try {
      const response = await instance.post(`/lockuser?id=${id}`);
      return response.data;
   } catch (error) {
      console.error("Error occurred while updating account details", error);
   }
};