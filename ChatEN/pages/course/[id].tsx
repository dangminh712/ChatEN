import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  PurchaseCourseByOwner,
  getCourseByOwner,
  getDetailCourse,
} from "../api/sales";
import { BuyCourse, Course, CourseDetail } from "@/types/typeCourse";
import { calBeDiscount, formatNumber, formatPrice } from "@/helper/dataHelper";
import { LiaPaintBrushSolid } from "react-icons/lia";
import { AiFillStar } from "react-icons/ai";
const DetailPage = () => {
  const router = useRouter();
  const [data, setData] = useState<CourseDetail>();
  const [bought, setBought] = useState<BuyCourse[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);
  const login =
    typeof window !== "undefined" ? sessionStorage.getItem("ID") || null : null;
  const handleClickBuy = async () => {
    if (login === undefined || login === "false" || login === null) {
      window.location.href = "/auth/login";
      return;
    }
    const newData: BuyCourse = {
      IDCourse: data?.ID || "",
      IDPerson: parseInt(sessionStorage.getItem("ID") ?? "0").toString() || "",
      DateBuy: new Date(),
      Price: data?.Price || 0,
    };
    await PurchaseCourseByOwner(newData);
    setRefresh(!refresh);
  };
  useEffect(() => {
    const { id } = router.query;
    if (typeof id === "string") {
      getDetailCourse(id).then((result: any) => setData(result));
    }
    getCourseByOwner(parseInt(login ?? "0")).then((result) =>
      setBought(result)
    );
  }, [router.query, router.query.id,refresh]);

  return (
    <section className="py-10 font-poppins da:bg-gray-800">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex flex-wrap mb-24 -mx-4">
          <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0 drop-shadow-xl">
            <div className="sticky top-52 overflow-hidden ">
              <div className="relative  mb-6 lg:mb-10 lg:h-[800px]">
                <img
                  className="hover:scale-150 transition-all duration-500 cursor-pointer object-contain w-full lg:h-full"
                  src={`${data?.Photo}`}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <div className="lg:pl-20">
              <div className="mb-6 ">
                <span className="px-2.5 py-0.5 text-xs text-blue-600 bg-blue-100 da:bg-gray-700 rounded-xl da:text-gray-200">
                  New Arrival
                </span>
                <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl da:text-gray-300">
                  {data?.Name}
                </h2>
                <div className="flex flex-wrap items-center mb-6">
                  <ul className="flex mb-4 mr-2 lg:mb-0 text-black">
                    <li>{data?.Rating}</li>
                    <li>
                      <AiFillStar className="text-red-600 text-[25px] ">
                        {" "}
                      </AiFillStar>
                    </li>
                  </ul>
                  <a
                    className="mb-4 text-xs underline hover:text-blue-600 da:text-gray-400 da:hover:text-gray-300 lg:mb-0"
                    href="#"
                  >
                    View the acer store
                  </a>
                </div>
                <p className="max-w-md mb-8 text-gray-700 da:text-gray-400">
                  {data?.Description}
                </p>
                <p className="inline-block text-2xl font-semibold text-gray-700 da:text-gray-400 ">
                  <span>
                    {" "}
                    {formatPrice(calBeDiscount(data?.Price, data?.Discount))}
                  </span>
                  <span className="ml-3 text-base font-normal text-gray-500 line-through da:text-gray-400">
                    {formatPrice(data?.Price)}
                  </span>
                </p>
              </div>
              <div className="mb-6">
                <div className="bg-gray-100  rounded-xl">
                  <div className="p-3 lg:p-5 ">
                    <div className="p-2 rounded-xl lg:p-6 da:bg-gray-800 bg-gray-50 flex">
                      <LiaPaintBrushSolid className="mb-2 text-[30px] font-[800] text-gray-800" />
                      <div className="mb-2 text-lg font-[700] text-gray-500">
                        Author:
                      </div>
                      <div className="mb-1 ml-10 text-md font-[700] text-blue-800 whitespace-nowrap text-ellipsis w-full">
                        {data?.Author}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-6 mb-6 border-t border-b border-gray-200 da:border-gray-700">
                <span className="text-base text-gray-600 da:text-gray-400">
                  In Stock
                </span>
                <p className="mt-2 text-sm text-blue-500 da:text-blue-200">
                  Ships from china.
                  <span className="text-gray-600 da:text-gray-400">
                    Most customers receive within 3-31 days.
                  </span>
                </p>
              </div>
              <div className="mb-6 "></div>
              <div className="flex flex-wrap items-center mb-6"></div>
              <div className="flex gap-4 mb-6">
                {bought.some((item) => item?.IDCourse === data?.ID) ? (
                  <button
                    className="w-full px-4 py-3 text-center text-gray-100 bg-blue-600 border border-transparent da:border-gray-700 hover:border-blue-500 hover:text-blue-700 hover:bg-blue-100 da:text-gray-400 da:bg-gray-700 da:hover:bg-gray-900 rounded-xl disabled"
                    disabled
                  >
                    You bought this book
                  </button>
                ) : (
                  <button
                    onClick={handleClickBuy}
                    className="w-full px-4 py-3 text-center text-gray-100 bg-blue-600 border border-transparent da:border-gray-700 hover:border-blue-500 hover:text-blue-700 hover:bg-blue-100 da:text-gray-400 da:bg-gray-700 da:hover:bg-gray-900 rounded-xl"
                  >
                    Buy now
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
