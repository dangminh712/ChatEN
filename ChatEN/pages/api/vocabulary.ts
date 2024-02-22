import { vocabulary } from "@/types/typeSystem";
import axios from "axios";
const url = process.env.URL_APP;

const instance = axios.create({
  baseURL: url + "Vocabulary",
});

export const CreateNewWord = async (data:vocabulary) => {
  try {
    const response = await instance.post("/create-new-vocabulary",data);
    return response.data;
  } catch (error) {
    console.error("Error occurred while updating account details", error);
  }
};
export const GetAllVocabulary = async () => {
    try {
      const response = await instance.get("/get-all-vocabulary");
      return response.data;
    } catch (error) {
      console.error("Error occurred while updating account details", error);
    }
  };
  export const GetLimitVocabulary = async (value:number) => {
    try {
      const response = await instance.get(`/get-filter-vocabulary/${value}`);
      return response.data;
    } catch (error) {
      console.error("Error occurred while updating account details", error);
    }
  };
  export const SearchByWord = async (value:string) => {
    try {
      const response = await instance.get(`/search-by-word/${value}`);
      return response.data;
    } catch (error) {
      console.error("Error occurred while updating account details", error);
    }
  };
    