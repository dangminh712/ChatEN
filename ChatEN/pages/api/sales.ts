import { BuyCourse } from "@/types/typeCourse";
import axios from "axios";
const url = process.env.URL_APP;

const instance = axios.create({
   baseURL: url+'Sale',
});


export const getCourse = async () => {
   try {
      const response = await instance.get("/course");
      return response.data;
   } catch (error) {
      console.error("Error occurred while updating account details", error);
   }
};
export const getDetailCourse = async (id:string) => {
   try {
      const response = await instance.get(`/course/${id}`);
      return response.data;
   } catch (error) {
      console.error("Error occurred while updating account details", error);
   }
};
export const getPurchaseCourse = async () => {
    try {
       const response = await instance.get("/all-bought-course");
       return response.data;
    } catch (error) {
       console.error("Error occurred while updating account details", error);
    }
 };
 export const getCourseByOwner = async (id:number) => {
    try {
       const response = await instance.get(`/bought-course/${id}`);
       return response.data;
    } catch (error) {
       console.error("Error occurred while updating account details", error);
    }
 };
 export const PurchaseCourseByOwner = async (data:BuyCourse) => {
    try {
       const response = await instance.post(`/purchase-course`,data);
       return response.data;
    } catch (error) {
       console.error("Error occurred while updating account details", error);
    }
 };
 