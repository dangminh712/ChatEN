import { formatPrice } from "@/helper/dataHelper";
import { BuyCourseDetail, Course } from "@/types/typeCourse";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getCourse, getPurchaseCourse } from "../api/sales";

const Books = () => {
  const [books, getBooks] = useState<Course[]>([]);
  useEffect(() => {
    getCourse().then((result) => getBooks(result));
  }, []);
  return (
    <div className="p-4 bg-white rounded-md shadow md:p-6 da:bg-gray-900 text-black h-[80vh]">
      <div className="flex flex-wrap justify-between mb-6">
        <h2 className="py-1 text-xl font-semibold capitalize border-b border-blue-500 da:text-gray-400">
          List Books
        </h2>
      
      </div>
      <div className="h-[60vh] overflow-auto">
        <div className="flex flex-col">
          <div className="overflow-x-auto ">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full border text-center text-sm font-medium da:border-neutral-500">
                  <thead className="border-b font-medium da:border-neutral-500">
                    <tr>
                      <th
                        scope="col"
                        className="border-r px-6 py-4 da:border-neutral-500"
                      >
                        #ID
                      </th>
                      <th
                        scope="col"
                        className="border-r px-6 py-4 da:border-neutral-500"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="border-r px-6 py-4 da:border-neutral-500"
                      >
                        Price
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Photo
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {books.map((item) => (
                      <>
                        <tr className="border-b da:border-neutral-500">
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium da:border-neutral-500">
                            {item.ID}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 text-blue-600">
                            {item.Name}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 da:border-neutral-500">
                             {formatPrice( item.Price)}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                         
                            <img
                              src={item.Photo}
                              alt=""
                              className="object-cover w-14 h-14"
                            />
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Books.layout = "admin";
export default Books;
