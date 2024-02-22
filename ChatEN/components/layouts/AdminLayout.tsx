import React from "react";
import { AiOutlineHome, AiOutlineTablet, AiOutlineUser } from "react-icons/ai";
import { CiDiscount1, CiBitcoin } from "react-icons/ci";
import Link from "next/link";
const AdminLayout = ({ children }: any) => {
  return (
    <div className="w-[100vw] min-h-[100vh] bg-white">
      <div className="flex justify-center border-b-1 border-black ">
        <div className="h-[100px] w-[1440px] flex items-center">
          <div className="flex items-center justify-center h-20 w-[300px] shadow-md">
            <h1 className="text-3xl uppercase text-indigo-500">Admin</h1>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100%_-_100px)]">
        <div className="h-[100%] w-[300px] flex justify-center">
          <div className=" flex flex-row bg-gray-100 border-r-[2px] border-black">
            <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden ">
              <ul className="flex flex-col py-4 ">
                <li>
                  <Link
                    href="/admin/dashboard"
                    className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                  >
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                      <AiOutlineHome></AiOutlineHome>
                    </span>
                    <span className="text-sm font-medium">Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/books"
                    className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                  >
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                      <AiOutlineTablet></AiOutlineTablet>
                    </span>
                    <span className="text-sm font-medium">Books</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/users"
                    className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                  >
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                      <AiOutlineUser></AiOutlineUser>
                    </span>
                    <span className="text-sm font-medium">Users</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/orders"
                    className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                  >
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                      <CiDiscount1></CiDiscount1>
                    </span>
                    <span className="text-sm font-medium">Orders</span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/"
                    className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                  >
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                      <i className="bx bx-log-out"></i>
                    </span>
                    <span className="text-sm font-medium">Logout</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-[100%] w-[2px] bg-[black]"></div>
        <div className="bg-[white] h-[100%] w-[calc(100%_-_302px)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
