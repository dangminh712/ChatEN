import { formatPrice } from "@/helper/dataHelper";
import { BuyCourseDetail } from "@/types/typeCourse";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getCourse, getPurchaseCourse } from "../api/sales";

const Books = () => {
  const [totalSales, getTotalSales] = useState<BuyCourseDetail[]>([]);
  useEffect(() => {
    getPurchaseCourse().then((result) => getTotalSales(result));
  }, []);
  return (
    <div className="p-4 bg-white rounded-md shadow md:p-6 dark:bg-gray-900 text-black h-[80vh]">
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
      <div className="h-[60vh] overflow-auto">
        {totalSales.map((item) => (
          <>
            <div className="flex justify-between mb-4">
              <div className="flex gap-2">
                <img
                  src={item.course?.Photo}
                  alt=""
                  className="object-cover w-14 h-14"
                />
                <div className="">
                  <h2 className="my-1 text-lg font-medium dark:text-gray-400">
                    {item.course?.Name}
                  </h2>
                  <div className="text-gray-400">Ordered</div>
                </div>
              </div>
              <div className="">
                <span className="font-medium text-blue-400">
                  Price: {formatPrice(item?.Price)}
                </span>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
Books.layout = "admin";
export default Books;
