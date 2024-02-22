import React, { useState, useEffect } from "react";
import RowTableAdminUser from "../../components/Admin/RowTableAdminUser";
import { getUser } from "../api/auth";
import { User } from "@/types/typeAdmin";

const AdminUser = () => {
  const [Users, setUser] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [reset, SetReset] = useState<boolean>(true);
  const handleReset = () => {
    SetReset(!reset);
  };
  useEffect(() => {
    getUserFromAPI();
  }, [reset]);
  const movePage = (move: any) => {
    if (currentPage === 1 && move === -1) return;
    setCurrentPage(currentPage + move);
  };

  const findOrders = (value: any) => {
    if (value === "") {
      getUserFromAPI();
      return;
    }
  };
  const getUserFromAPI = () => {
    getUser().then((response) => setUser(response));
  };
  return (
    <>
      <div className=" h-[80px] border-solid border-[black] border-b-[2px] flex justify-between">
        <div className="h-[80px]  text-[24px] font-[600] mt-[10px] ml-[20px]">
          List User
        </div>
        <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3 mr-[50px]">
          <button
            type="button"
            className="flex bg-gray-300 items-center justify-center px-4 py-2 border-[1px] hover:bg-gray-100 text-sm font-medium text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dbg-primary-600 dhover:bg-primary-700 focus:outline-none dfocus:ring-primary-800"
          >
            <svg
              className="h-3.5 w-3.5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              />
            </svg>
            Add new user
          </button>

          <button
            type="button"
            className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-gray-300 border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dfocus:ring-gray-700 dbg-gray-800 dtext-gray-400 dborder-gray-600 dhover:text-white dhover:bg-gray-700"
          >
            <svg
              className="w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            Export
          </button>
        </div>
      </div>
      <div className="bg-[white] h-[calc(100%_-_180px)]">
        <section className="bg-white dbg-gray-900 py-3 sm:py-5">
          <div className="px-4 mx-auto max-w-screen-2xl lg:px-12 mt-[10px]">
            <div className="relative overflow-hidden bg-white shadow-md dbg-gray-800 ">
              <div className="h-[40px] w-[500px] mb-[20px]">
                <input
                  type="text"
                  placeholder="Enter Find Users By AccountID,Username or Phone"
                  onChange={(e) => {
                    findOrders(e.target.value);
                  }}
                  className="p-[5px] h-[40px] w-[500px] bg-gray-200 rounded-[10px] border-[1px] border-[gray]"
                />
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dtext-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-200 dbg-gray-700 dtext-gray-400">
                    <tr>
                      <th scope="col" className="p-4"></th>

                      <th scope="col" className="px-4 py-3">
                        PersonID
                      </th>
                      <th scope="col" className="px-4 py-3 w-[150px]">
                        Username
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Name
                      </th>

                      <th scope="col" className="px-4 py-3">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Users.map((item) => {
                      return (
                        <RowTableAdminUser
                          item={item}
                          key={item.Personid}
                          handleReset={handleReset}
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
AdminUser.layout = "admin";
export default AdminUser;
