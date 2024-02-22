import React from "react";
import {
  formatPrice,
  calDiscount,
  formatPercent,
} from "../helper/dataHelper.js";
import Link from "next/link.js";
import { Course } from "@/types/typeCourse.js";
import { AiFillStar } from "react-icons/ai";

type Props = {
  item: Course;
};
const CardIndex = (props: Props) => {
  const data = props?.item;
  return (
    <Link href={`/course/${data.ID}`}>
      <div className="flex flex-col items-start justify-start gap-[16px]  w-[270px] hover:shadow-xl hover:shadow-red-200 rounded-[10px] pb-[10px]">
        <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0 bg-[#F5F5F5]">
          <div className="absolute top-[12px] left-[12px] rounded bg-secondary-2 flex flex-row py-1 px-3 items-center justify-center bg-[#DB4444] z-10">
            <div className="relative leading-[18px] font-[600] text-[white] text-[12px]">
              - {formatPercent(parseFloat(data?.Discount.toString()))} %
            </div>
          </div>
          <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] rounded-[20px]  overflow-hidden">
            <img
              className="relative top-[calc(50%_-_76px)] left-[calc(50%_-_86px)] w-[172px] h-[152px] rounded-[20px] hover:rounded-[20px]  hover:transform hover:scale-150 hover:transition-transform"
              alt=""
              src={data.Photo}
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[8px] text-base text-text2 p-[5px] drop-shadow-sm text-black">
          <div className="relative leading-[24px] font-medium w overflow-hidden w-[270px] text-[20px] whitespace-nowrap text-ellipsis ">
            {data.Name}
          </div>

          <div className="flex items-start justify-between gap-[12px] text-secondary-2 w-full">
            {data.Rating != 0 ? (
              <>
                <div className="flex flex-row items-start justify-start gap-[8px] text-sm">
                  Rating : {data.Rating}
                  <div className="flex flex-row items-start justify-start">
                    <AiFillStar className="text-[#d6d654]" />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-row items-start justify-start gap-[8px] text-sm">
                  <div className="flex flex-row items-start justify-start"></div>
                  <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]"></div>
                </div>
              </>
            )}
            <div className="flex">
              <div className="relative leading-[24px] font-medium text-[#DB4444]">
                {" "}
                {formatPrice(
                  calDiscount(
                    parseInt(data?.Price.toString()),
                    parseFloat(data?.Discount.toString())
                  )
                )}
              </div>
              <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-text2 opacity-[0.5]">
                {formatPrice(data.Price)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default CardIndex;
