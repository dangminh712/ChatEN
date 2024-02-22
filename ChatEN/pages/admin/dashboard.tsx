import { useState, useEffect } from "react";
import { getCourse, getPurchaseCourse } from "../api/sales";
import { BuyCourse, BuyCourseDetail, Course } from "@/types/typeCourse";
import { formatPrice } from "@/helper/dataHelper";
import { User } from "@/types/typeAdmin";
import { getUser } from "../api/auth";
import Link from "next/link";

const DashBoard = () => {
  const [totalBook, getTotalBook] = useState<Course[]>([]);
  const [totalSales, getTotalSales] = useState<BuyCourseDetail[]>([]);
  const [totalUsers, getUsers] = useState<number>(0);
  useEffect(() => {
    getCourse().then((result) => getTotalBook(result));
    getPurchaseCourse().then((result) => getTotalSales(result));
    getUser().then((result) => getUsers(result.length));
  }, []);

  return (
    <div>
      <div className="bg-gray-100  text-gray-600  da:bg-gray-800 h-full">
        <div className="body-content">
          <div className="relative lg:block navbar-menu"></div>
          <div className="mx-auto transition-all content-wrapper" id="dash">
            <section className="px-4 pt-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                <div className="p-4 bg-white rounded-lg shadow hover:shadow-xl  da:bg-gray-900">
                  <div className="flex flex-row items-center">
                    <div className="flex-1 text-left md:text-left">
                      <h2 className="mb-2 text-lg font-bold text-gray-600 uppercase  da:text-gray-400">
                        Total orders
                      </h2>
                      <p className="mb-2 text-lg font-medium text-gray-600  da:text-gray-400">
                        {totalSales?.length}
                      </p>
                      <p className="text-sm font-medium text-gray-400  da:text-gray-400">
                        Lorem ipsum dor amet
                      </p>
                    </div>
                    <div className="flex-shrink">
                      <a
                        href="#"
                        className="flex items-center px-8 py-4 text-gray-400  da:text-gray-400 "
                      >
                        <span className="inline-block mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-10 h-10  da:group-hover:text-gray-300 bi bi-basket"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"></path>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow hover:shadow-xl  da:bg-gray-900">
                  <div className="flex flex-row items-center">
                    <div className="flex-1 text-left md:text-left">
                      <h2 className="mb-2 text-lg font-bold text-gray-600 uppercase  da:text-gray-400">
                        Total Book
                      </h2>
                      <p className="mb-2 text-lg font-medium text-gray-600  da:text-gray-400">
                        {totalBook.length}
                      </p>
                      <p className="text-sm font-medium text-gray-400  da:text-gray-400">
                        Lorem ipsum dor amet
                      </p>
                    </div>
                    <div className="flex-shrink">
                      <a
                        href="#"
                        className="flex items-center px-8 py-4 text-gray-400  da:text-gray-400 "
                      >
                        <span className="inline-block mr-3  da:group-hover:text-gray-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            className="w-10 h-10"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow hover:shadow-xl  da:bg-gray-900">
                  <div className="flex flex-row items-center">
                    <div className="flex-1 text-left md:text-left">
                      <h2 className="mb-2 text-lg font-bold text-gray-600 uppercase  da:text-gray-400">
                        Total Payment
                      </h2>
                      <p className="mb-2 text-lg font-medium text-gray-600  da:text-gray-400">
                        {formatPrice(
                          totalSales.reduce((acc, curr) => acc + curr.Price, 0)
                        )}
                      </p>
                      <p className="text-sm font-medium text-gray-400  da:text-gray-400">
                        Lorem ipsum dor amet
                      </p>
                    </div>
                    <div className="flex-shrink">
                      <a
                        href="#"
                        className="flex items-center px-8 py-4 text-gray-400  da:text-gray-400 "
                      >
                        <span className="inline-block mr-3  da:group-hover:text-gray-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-10 h-10 bi bi-cash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                            <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z" />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow hover:shadow-xl  da:bg-gray-900">
                  <div className="flex flex-row items-center">
                    <div className="flex-1 text-left md:text-left">
                      <h2 className="mb-2 text-lg font-bold text-gray-600 uppercase  da:text-gray-400">
                        Total Customers
                      </h2>
                      <p className="mb-2 text-lg font-medium text-gray-600  da:text-gray-400">
                        {totalUsers}
                      </p>
                      <p className="text-sm font-medium text-gray-400  da:text-gray-400">
                        Lorem ipsum dor amet
                      </p>
                    </div>
                    <div className="flex-shrink">
                      <a
                        href="#"
                        className="flex items-center px-8 py-4 text-gray-400  da:text-gray-400 "
                      >
                        <span className="inline-block mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-10 h-10 bi bi-people"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="px-4 py-6">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 ">
                <div className="p-4 bg-white rounded-md shadow md:p-6  da:bg-gray-900 ">
                  <h2 className="pb-4 text-xl font-bold border-b  da:border-gray-700  da:text-gray-400">
                    Task overview
                  </h2>
                  <div className="px-4 py-3 text-xs font-medium">
                    <div className="flex px-4 mb-3 text-gray-500  da:text-gray-400">
                      <h2 className="mr-auto">Task Name</h2>
                      <h2>Action</h2>
                    </div>
                    <div className="flex justify-between p-4 mb-4 bg-gray-100 rounded  da:bg-gray-800">
                      <div className="flex ">
                        <span className="inline-flex items-center justify-center w-8 h-8 mr-2 text-blue-600 rounded  da:text-gray-400  da:bg-gray-700 bg-blue-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-people"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                          </svg>
                        </span>
                        <div className="text-xs">
                          <p className="font-medium  da:text-gray-400">
                            Team members
                          </p>
                          <p className="text-gray-500  da:text-gray-400">
                            Meeting
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <button className="mr-2 text-blue-600  da:text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                        </button>
                        <button className="text-red-600  da:text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path
                              fill-rule="evenodd"
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between p-4 mb-4 bg-gray-100 rounded  da:bg-gray-800">
                      <div className="flex">
                        <span className="inline-flex items-center justify-center w-8 h-8 mr-2 text-blue-600 rounded  da:text-gray-400  da:bg-gray-700 bg-blue-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-5 h-5  da:group-hover:text-gray-300 bi bi-basket"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"></path>
                          </svg>
                        </span>
                        <div className="text-xs">
                          <p className="font-medium  da:text-gray-400">
                            {" "}
                            Products
                          </p>
                          <p className="text-gray-500  da:text-gray-400">
                            household
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <button className="mr-2 text-blue-600  da:text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                        </button>
                        <button className="text-red-600  da:text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path
                              fill-rule="evenodd"
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between p-4 mb-4 bg-gray-100 rounded  da:bg-gray-800">
                      <div className="flex">
                        <span className="inline-flex items-center justify-center w-8 h-8 mr-2 text-blue-600 rounded  da:text-gray-400  da:bg-gray-700 bg-blue-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-5 h-5 group-"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
                            <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"></path>
                          </svg>
                        </span>
                        <div className="text-xs">
                          <p className="font-medium  da:text-gray-400">Time</p>
                          <p className="text-gray-500  da:text-gray-400">
                            3 hours
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <button className="mr-2 text-blue-600  da:text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                        </button>
                        <button className="text-red-600  da:text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path
                              fill-rule="evenodd"
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between p-4 mb-4 bg-gray-100 rounded  da:bg-gray-800">
                      <div className="flex">
                        <span className="inline-flex items-center justify-center w-8 h-8 mr-2 text-blue-600 rounded  da:text-gray-400  da:bg-gray-700 bg-blue-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-5 h-5 group-"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"></path>
                            <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"></path>
                          </svg>
                        </span>
                        <div className="text-xs">
                          <p className="font-medium  da:text-gray-400">
                            Documents
                          </p>
                          <p className="text-gray-500  da:text-gray-400">pdf</p>
                        </div>
                      </div>
                      <div className="flex">
                        <button className="mr-2 text-blue-600  da:text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                        </button>
                        <button className="text-red-600  da:text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path
                              fill-rule="evenodd"
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-md shadow md:p-6 dark:bg-gray-900 ">
                  <div className="flex flex-wrap justify-between mb-6">
                    <h2 className="py-1 text-xl font-semibold capitalize border-b border-blue-500 dark:text-gray-400">
                      Recent Orders
                    </h2>
                    <Link
                      href="/admin/sales"
                      className="px-4 py-2 text-sm text-white capitalize bg-blue-500 rounded "
                    >
                      view all
                    </Link>
                  </div>
                  <div>
                    {totalSales.slice(-5).map((item) => (
                      <>
                        <div className="flex justify-between mb-4">
                          <div className="flex gap-2">
                            <img
                              src={item.course.Photo}
                              alt=""
                              className="object-cover w-14 h-14"
                            />
                            <div className="">
                              <h2 className="my-1 text-lg font-medium dark:text-gray-400">
                                {item.course.Name}
                              </h2>
                              <div className="text-gray-400">Ordered</div>
                            </div>
                          </div>
                          <div className="">
                            <span className="font-medium text-blue-400">
                              Price: {formatPrice(item.Price)}
                            </span>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <script
        defer
        src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
      ></script>
    </div>
  );
};
DashBoard.layout = "admin";
export default DashBoard;
