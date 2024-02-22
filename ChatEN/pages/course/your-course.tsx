import React, { useRef, useState, useEffect } from "react";
import { BuyCourse, BuyCourseDetail, Course, getBuy } from "@/types/typeCourse";
import { getCourseByOwner } from "../api/sales";
import Link from "next/link";
import { formatDate } from "@/helper/dataHelper";
const Cource = () => {
  const [buy, setBuy] = useState<BuyCourseDetail[]>([]);
  const login =
    typeof window !== "undefined" ? sessionStorage.getItem("ID") || null : null;
  useEffect(() => {
    getCourseByOwner(parseInt(login ?? "0")).then((result) => setBuy(result));
  }, [login]);

  return (
    <>
      <section className="flex items-center py-10 bg-gray-100 lg:py-24 font-poppins da:bg-gray-800 text-black min-h-screen">
        <div className="justify-center flex-1 max-w-4xl px-4 py-4 mx-auto text-left lg:py-10 ">
          <div className="mb-10 text-center">
            <span className="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center text-blue-500 uppercase da:text-gray-400">
              Your Book
            </span>
            <h1 className="text-3xl font-bold capitalize da:text-white">
              {" "}
              List Book
            </h1>
          </div>
          {buy.length==0 &&(
            <div>
                <h1 className="text-3xl font-bold  da:text-white text-center text-[gray]">
              {" "}
              Please log in to see the books you've purchased
            </h1>
            </div>
          )}
          <div></div>
          {buy.map((item) => {
            return (
              <>
                <div
                  className="grid grid-cols-1 bg-white da:bg-gray-900  mb-6 lg:grid-cols-[1fr,70%] gap-4 p-5"
                  key={item.IDCourse}
                >
                  <div>
                    <img
                      src={item.course.Photo}
                      alt=""
                      className="object-cover w-full rounded-md h-80 lg:h-44"
                    />
                  </div>
                  <div className="px-4 py-4 lg:px-0">
                    <Link
                      href="#"
                      className="px-2.5  py-0.5 mr-2 text-xs text-gray-700 bg-gray-200 rounded hover:bg-blue-600 da:bg-gray-700 da:text-gray-400 hover:text-gray-100 da:hover:bg-gray-800"
                    >
                     Purchased
                    </Link>
                    <Link href={`/course/${item.IDCourse}`}>
                      <h2 className="mt-3 mb-3 text-xl font-semibold text-gray-600 hover:text-blue-600 da:text-gray-400">
                        {item.course.Name}
                      </h2>
                    </Link>
                    <p className="mb-3 text-sm text-gray-500 da:text-gray-400">
                    {item.course.Description}
                    </p>
                    <span className="text-xs font-medium text-gray-700 da:text-gray-400">
                    Date purchased:  {formatDate(item.DateBuy)}
                    </span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Cource;
